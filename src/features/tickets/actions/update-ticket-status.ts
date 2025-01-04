import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

type IStatus = "DONE" | "IN_PROGRESS" | "OPEN";

export const updateTicketStatus = async (id: string, status: IStatus) => {
  const response = await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      status: status,
    },
  });
  revalidatePath("/tickets");
  return response;
};
