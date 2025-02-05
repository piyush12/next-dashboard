import { Ticket } from "@prisma/client";
import { notFound } from "next/navigation";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import { getAuth } from "@/features/auth/queries/getAuth";
import { isOwner } from "@/features/auth/utils/is-owner";
import TicketForm from "@/features/tickets/components/Form/Form";
import { getTicket } from "@/features/tickets/queries/get-ticket";

async function TicketEdit({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const { ticketId } = await params;
  const { user } = await getAuth();
  const ticket = (await getTicket(ticketId)) as Ticket;

  const isTicketFound = !!ticket;
  const isTicketOwner = isOwner(user, ticket);

  if (!isTicketFound || !isTicketOwner) {
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
        <Paper className="w-[400px] p-6">
          <TicketForm
            isEdit
            defaultValue={{
              title: ticket.title,
              content: ticket.content,
              id: ticket.id,
              bounty: ticket.bounty,
              deadline: ticket.deadline,
            }}
          />
        </Paper>
      </Flex>
    </Box>
  );
}

export default TicketEdit;
