import { Ticket } from "@prisma/client";
import Link from "next/link";

import { Header } from "@/components/Header";
import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketForm from "@/features/tickets/components/Form/Form";
import { getTicket } from "@/features/tickets/queries/get-ticket";

async function TicketEdit({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const { ticketId } = await params;
  const ticket = (await getTicket(ticketId)) as Ticket;

  return (
    <Box>
      <Flex className="p-4">
        {/* TOP MENU */}
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Header hasSearch={false} />
        </Paper>
      </Flex>
      <Box className="p-4">
        <Link href={`/tickets/${ticket.id}`}>
          <Button variant="outline" color="primary">
            Go Back
          </Button>
        </Link>
      </Box>

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
