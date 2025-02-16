import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import TicketForm from "@/features/tickets/components/Form/Form";
import TicketList from "@/features/tickets/components/ticket-list";

import { searchParams } from "./types";

async function Tickets({
  searchParams,
}: {
  searchParams: Promise<searchParams>;
}) {
  const searchParam = await searchParams;
  return (
    <Flex
      direction="column"
      className="min-h-screen flex-wrap"
      align="center"
      gap="6"
    >
      <Text variant="h2" as="h2">
        All Tickets
      </Text>
      <Paper className="w-[400px] p-6">
        <TicketForm />
      </Paper>
      <TicketList searchParams={searchParam} />
    </Flex>
  );
}

export default Tickets;
