"use server";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { generateS3Key } from "@/features/utils/generate-s3-kys";
import { s3 } from "@/lib/aws";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { ActionState } from "@/utils/utils";

import { ACCEPTED, MAX_SIZE, sizeInMB } from "../constants";

const createAttachmentsSchema = z.object({
  files: z
    .custom<FileList>()
    .transform((files) => Array.from(files))
    .transform((files) => files.filter((file) => file.size > 0))
    .refine(
      (files) => files.every((file) => sizeInMB(file.size) <= MAX_SIZE),
      `The maximum file size is ${MAX_SIZE}MB`,
    )
    .refine(
      (files) => files.every((file) => ACCEPTED.includes(file.type)),
      "File type is not supported",
    )
    .refine((files) => files.length !== 0, "File is required"),
});

export async function createAttachment(
  ticketId: string,
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { user } = await getAuthRedirect();
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  if (!isOwner(user, ticket)) {
    throw new Error("You are not a owner of this ticket");
  }
  let attachment;
  try {
    const { files } = createAttachmentsSchema.parse({
      files: formData.getAll("files"),
    });

    for (const file of files) {
      const buffer = await Buffer.from(await file.arrayBuffer());

      attachment = await prisma.attachments.create({
        data: {
          name: file.name,
          ticketId: ticket.id,
        },
      });

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: generateS3Key({
            name: "ticket-attachment",
            ticketId: ticket.id,
            fileName: file.name,
            attachmentId: attachment.id,
          }),
          Body: buffer,
          ContentType: file.type,
        }),
      );
    }
  } catch (error) {
    // fallback if S3 upload fails, but attachment was created
    if (attachment) {
      await prisma.attachments.delete({
        where: {
          id: attachment.id,
        },
      });
    }

    if (error instanceof ZodError) {
      return {
        fieldErrors: error.flatten().fieldErrors,
        payload: formData,
      };
    }
    if (error instanceof Error) {
      return {
        message: error.message,
        payload: formData,
      };
    }
    return {
      message: "Something went wrong",
    };
  }
  formData.set("files", "");
  const path = generateRoutePath(ROUTES.TICKETS_DETAIL, { id: ticketId });
  revalidatePath(path);
  return { message: "Successfully uploaded" };
}
