"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
  const response = await prisma.ticket.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tickets");
  return response;
};
