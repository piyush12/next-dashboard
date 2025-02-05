import React from "react";

import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import { getAuth } from "@/features/auth/queries/getAuth";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTickets } from "@/features/tickets/queries/get-tickets";

async function MyTickets() {
  const { user } = await getAuth();
  if (!user?.id) return;
  const tickets = await getTickets(user?.id);

  return (
    <Flex
      direction="column"
      className="min-h-screen flex-wrap"
      align="center"
      gap="6"
    >
      <Text variant="h2" as="h2">
        My Tickets
      </Text>

      {tickets.map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />;
      })}
    </Flex>
  );
}

export default MyTickets;
