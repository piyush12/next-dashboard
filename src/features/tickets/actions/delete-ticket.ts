"use server";

import { revalidatePath } from "next/cache";

import { setCookie } from "@/actions/cookies";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";

export const deleteTicket = async (id: string) => {
  const { user } = await getAuthRedirect();
  try {
    if (id) {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: id,
        },
      });

      if (!ticket || !isOwner(user, ticket)) {
        await setCookie("toastError", "Not authorized");
        return;
      }
    }

    const response = await prisma.ticket.delete({
      where: {
        id,
      },
    });
    await setCookie("toastError", "Ticket Deleted");
    revalidatePath(generateRoutePath(ROUTES.TICKETS));
    return response;
  } catch (error) {
    if (error instanceof Error) {
      await setCookie("toastError", error.message);
      return;
    }
    await setCookie("toastError", "Something went wrong");
  }
};
