"use client";
import React, { ChangeEvent } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Flex from "@/components/Shared/Flex";
import TextField from "@/components/Shared/TextField";
import useDebounce from "@/hooks/useDebounce";

function SearchInput({ placeholder }: { placeholder: string }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSeaerch = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const newSearchParams = new URLSearchParams(searchParams);
    if (value) {
      newSearchParams.set("search", value);
    } else {
      newSearchParams.delete("search");
    }
    replace(`${pathName}?${newSearchParams.toString()}`, {
      scroll: false,
    });
  }, 250);

  return (
    <Flex>
      <TextField
        type="text"
        fullWidth
        placeholder={placeholder}
        onChange={handleSeaerch}
        defaultValue={searchParams.get("search") as string}
      />
    </Flex>
  );
}

SearchInput.displayName = "SearchInput";

export default SearchInput;
