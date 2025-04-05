"use server";
import { revalidatePath } from "next/cache";

import { setCookie } from "@/actions/cookies";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { ActionState } from "@/utils/utils";

export const deleteComment = async (
  commentId: string,
): Promise<ActionState> => {
  const { user } = await getAuthRedirect();
  const comment = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });
  if (!comment || !isOwner(user, comment)) {
    return { message: "Un authorized" };
  }
  try {
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      await setCookie("toastError", error.message);
      return { message: error.message };
    }
    await setCookie("toastError", "Something went wrong");
  }
  const path = generateRoutePath(ROUTES.TICKETS_DETAIL, {
    id: comment?.ticketId,
  });
  revalidatePath(path);
  return { message: "Successfully deleted comment" };
};
