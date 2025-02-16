import React from "react";

import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketForm from "@/features/tickets/components/Form/Form";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTickets } from "@/features/tickets/queries/get-tickets";

async function Tickets() {
  const tickets = await getTickets();
  return (
    <Flex
      direction="column"
      className="min-h-screen flex-wrap"
      align="center"
      gap="6"
    >
      <Paper className="w-[400px] p-6">
        <TicketForm />
      </Paper>
      {tickets.map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />;
      })}
    </Flex>
  );
}

export default Tickets;
