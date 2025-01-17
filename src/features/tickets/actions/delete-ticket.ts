"use server";

import { revalidatePath } from "next/cache";

import { setCookie } from "@/actions/cookies";
import prisma from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
  const response = await prisma.ticket.delete({
    where: {
      id,
    },
  });
  await setCookie("toastError", "Ticket Deleted");
  revalidatePath("/tickets");
  return response;
};
