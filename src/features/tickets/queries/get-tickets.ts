import prisma from "@/lib/prisma";

export const getTickets = async (userId: string | undefined = undefined) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
    },
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
