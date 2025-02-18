"use client";
import { ChangeEvent } from "react";

import { useQueryState } from "nuqs";

import Flex from "@/components/Shared/Flex";
import TextField from "@/components/Shared/TextField";
import { searchParser } from "@/features/tickets/search-tickets";
import useDebounce from "@/hooks/useDebounce";

function SearchInput({ placeholder }: { placeholder: string }) {
  const [search, setSearch] = useQueryState("search", searchParser);

  const handleSeaerch = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
  }, 250);

  return (
    <Flex>
      <TextField
        type="text"
        fullWidth
        placeholder={placeholder}
        onChange={handleSeaerch}
        defaultValue={search as string}
      />
    </Flex>
  );
}

SearchInput.displayName = "SearchInput";

export default SearchInput;
