import { revalidatePath } from "next/cache";

import { setCookie } from "@/actions/cookies";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";

type IStatus = "DONE" | "IN_PROGRESS" | "OPEN";

export const updateTicketStatus = async (id: string, status: IStatus) => {
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

    const response = await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status: status,
      },
    });
    await setCookie("toast", "Status updated");
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
