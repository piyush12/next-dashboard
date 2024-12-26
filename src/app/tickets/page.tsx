import { Header } from "@/components/Header";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketCard from "@/features/tickets/components/TicketCard";
import { getTickets } from "@/features/tickets/queries/get-tickets";

async function Tickets() {
  // async function handleSignOut() {
  //   "use server";
  // }

  const tickets = await getTickets();

  return (
    <Box>
      <Flex className="p-4">
        {/* TOP MENU */}
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Header hasSearch={false} />
        </Paper>
      </Flex>
      <Flex
        direction="column"
        className="min-h-screen flex-wrap"
        align="center"
        gap="6"
      >
        {tickets.map((ticket) => {
          return <TicketCard key={ticket.id} ticket={ticket} />;
        })}
      </Flex>
    </Box>
  );
}

export default Tickets;
