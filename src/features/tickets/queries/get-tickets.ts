import prisma from "@/lib/prisma";

import { ParsedSearchParams } from "../search-tickets";

export const getTickets = async (
  userId: string | undefined = undefined,
  searchParams: ParsedSearchParams,
) => {
  const skip = searchParams.page * searchParams.size;
  const take = searchParams.size;
  const where = {
    userId,
    title: {
      contains: searchParams.search,
      mode: "insensitive" as const,
    },
  };

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
      where,
      skip,
      take,
      orderBy: {
        ...(searchParams.sort === undefined && { createdAt: "desc" }),
        ...(searchParams.sort === "newest" && { createdAt: "desc" }),
        ...(searchParams.sort === "bounty" && { bounty: "desc" }),
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    }),
    prisma.ticket.count({
      where,
    }),
  ]);

  return {
    list: tickets,
    paginationMetadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};
