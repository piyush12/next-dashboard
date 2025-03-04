"use client";
import { useEffect, useRef } from "react";

import { useQueryState, useQueryStates } from "nuqs";

import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";

import { paginationOption, paginationParser } from "../search-tickets";

function TicketPagination({
  paginationMetadata,
}: {
  paginationMetadata: { count: number; hasNextPage: boolean };
}) {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOption,
  );

  const [search] = useQueryState("search");
  const prevSearch = useRef(search);

  useEffect(() => {
    if (search === prevSearch.current) return;
    setPagination({ ...pagination, page: 0 });
    prevSearch.current = search;
  }, [pagination, search, setPagination]);

  const startOffset = pagination.page * pagination.size + 1;
  const endOffset = startOffset - 1 + pagination.size;

  const actualEndOffset = Math.min(endOffset, paginationMetadata.count);

  const nextPage = pagination.page + 1;
  const previousPage = pagination.page - 1;

  return (
    <Flex align="center" justify="between">
      <Text as="p" variant="h5">
        {startOffset} - {actualEndOffset} of {paginationMetadata.count}
      </Text>
      <Flex gap="4">
        <Button
          variant="default"
          color="primary"
          disabled={pagination.page < 1}
          onClick={() => setPagination({ ...pagination, page: previousPage })}
        >
          Previous
        </Button>
        <Button
          variant="default"
          color="primary"
          onClick={() => setPagination({ ...pagination, page: nextPage })}
          disabled={!paginationMetadata.hasNextPage}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default TicketPagination;
