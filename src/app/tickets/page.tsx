import { Header } from "@/components/Header";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import TicketCard from "@/features/tickets/components/TicketCard";

function Tickets() {
  // async function handleSignOut() {
  //   "use server";
  // }

  return (
    <Box>
      <Flex className="p-4">
        {/* TOP MENU */}
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Header hasSearch={false} />
        </Paper>
      </Flex>
      <Flex direction="row" className="min-h-screen flex-wrap">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </Flex>
    </Box>
  );
}

export default Tickets;
