import React from "react";

import { Ticket } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTicket } from "@/features/tickets/queries/get-ticket";

async function page({ params }: { params: Promise<{ ticketId: string }> }) {
  const { ticketId } = await params;
  const ticket = (await getTicket(ticketId)) as Ticket;
  if (!ticket) {
    notFound();
  }

  return (
    <Box>
      <Flex className="p-4">
        {/* TOP MENU */}
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Header hasSearch={false} />
        </Paper>
      </Flex>
      <Box className="p-4">
        <Link href="/tickets">
          <Button variant="outline" color="primary">
            Tickets
          </Button>
        </Link>
      </Box>

      <TicketCard ticket={ticket} />
    </Box>
  );
}

export default page;
