import { searchParams } from "@/app/(authenticated)/tickets/types";
import SearchInput from "@/components/search-input";
import Flex from "@/components/Shared/Flex";
import SortSelect from "@/components/sort-select";

import { getTickets } from "../queries/get-tickets";

import TicketCard from "./TicketCard";

async function TicketList({
  userId,
  searchParams,
}: {
  userId?: string;
  searchParams: searchParams;
}) {
  const tickets = await getTickets(userId, searchParams);
  return (
    <Flex direction="column" className="mb-8 w-[400px] gap-6">
      <Flex>
        <SearchInput placeholder="Search Tickets..." />
        <SortSelect
          options={[
            {
              label: "Newest",
              value: "newest",
            },
            {
              label: "Bounty",
              value: "bounty",
            },
          ]}
          defaultValue="newest"
        />
      </Flex>

      {tickets.map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />;
      })}
    </Flex>
  );
}

TicketList.displayName = "TicketList";

export default TicketList;
