import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTicket } from "@/features/tickets/queries/get-ticket";

async function page({ params }: { params: Promise<{ ticketId: string }> }) {
  const { ticketId } = await params;
  const ticket = (await getTicket(ticketId)) as Prisma.TicketGetPayload<{
    include: {
      user: {
        select: {
          username: true;
        };
      };
    };
  }>;

  if (!ticket) {
    notFound();
  }

  return (
    <Box>
      <Flex
        direction="column"
        className="min-h-screen flex-wrap"
        align="center"
        gap="6"
      >
        <TicketCard ticket={ticket} isDetail />
      </Flex>
    </Box>
  );
}

export default page;
