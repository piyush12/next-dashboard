"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

import { setCookie } from "@/actions/cookies";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { ActionState } from "@/utils/utils";

const formSchema = z.object({
  title: z.string().trim().min(5),
  content: z.string().trim().min(1).max(1024),
  bounty: z.coerce.number().positive(),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
});

export const upsertTicket = async (
  ticketId: string | undefined = "",
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const { user } = await getAuthRedirect();
  try {
    if (ticketId) {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });
      if (!ticket || !isOwner(user, ticket)) {
        return {
          message: "User not authorized",
        };
      }
    }

    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    };
    const parsedData = formSchema.parse(data);
    const dbData = {
      ...parsedData,
      userId: user.id,
      bounty: parsedData.bounty * 100,
    };
    await prisma.ticket.upsert({
      where: { id: ticketId || "" },
      create: dbData,
      update: dbData,
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
  await setCookie("toast", "Ticket Added");
  revalidatePath(generateRoutePath(ROUTES.TICKETS));
  if (ticketId) {
    await setCookie("toast", "Ticket Updated");
    redirect(generateRoutePath(ROUTES.TICKETS_DETAIL, { id: ticketId }));
  }
  return { message: "" };
};
