import prisma from "@/lib/prisma";

export const getTickets = async () => {
  return await prisma.ticket.findMany({
    orderBy: {
      title: "desc",
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
