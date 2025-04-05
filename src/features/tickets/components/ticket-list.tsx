import SearchInput from "@/components/search-input";
import Flex from "@/components/Shared/Flex";
import SortSelect from "@/components/sort-select";
import { getAuth } from "@/features/auth/queries/getAuth";

import { getTickets } from "../queries/get-tickets";
import { ParsedSearchParams } from "../search-tickets";

import TicketPagination from "./pagination";
import TicketCard from "./TicketCard";

async function TicketList({
  userId,
  searchParams,
}: {
  userId?: string;
  searchParams: ParsedSearchParams;
}) {
  const { list: tickets, paginationMetadata } = await getTickets(
    userId,
    searchParams,
  );
  const { user } = await getAuth();

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
        return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
      })}
      <TicketPagination paginationMetadata={paginationMetadata} />
    </Flex>
  );
}

TicketList.displayName = "TicketList";

export default TicketList;
