import prisma from "@/lib/prisma";

export async function getComment(ticketId: string) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ticketId,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return comments;
  } catch (e) {
    console.log(e);
  }
}
