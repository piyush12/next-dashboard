"use server";

import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { ActionState } from "@/utils/utils";

const commentSchema = z.object({
  content: z.string().trim().min(5).max(1024),
});

export const addComment = async (
  ticketId: string,
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const { user } = await getAuthRedirect();
  try {
    const data = { content: formData.get("content") };
    const parsedData = commentSchema.parse(data);

    await prisma.comment.create({
      data: {
        ticketId: ticketId,
        userId: user.id,
        ...parsedData,
      },
    });
  } catch (error) {
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
  const path = generateRoutePath(ROUTES.TICKETS_DETAIL, { id: ticketId });
  revalidatePath(path);
  return { message: "Success" };
};
