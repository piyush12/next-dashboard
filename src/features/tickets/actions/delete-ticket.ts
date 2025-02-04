"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { setCookie } from "@/actions/cookies";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { ActionState } from "@/utils/utils";

export const deleteTicket = async (id: string): Promise<ActionState> => {
  const { user } = await getAuthRedirect();
  const path = generateRoutePath(ROUTES.TICKETS);
  try {
    if (id) {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: id,
        },
      });

      if (!ticket || !isOwner(user, ticket)) {
        await setCookie("toastError", "Not authorized");
        return { message: "Not Authorized" };
      }
    }

    await prisma.ticket.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      await setCookie("toastError", error.message);
      return { message: error.message };
    }
    await setCookie("toastError", "Something went wrong");
  }

  revalidatePath(path);
  // await setCookie("toastError", "Ticket Deleted");
  redirect(path);
};
