"use client";

import { useQueryState } from "nuqs";

import { sortParser } from "@/features/tickets/search-tickets";

import Select from "./Shared/Select/Select";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
};

function SortSelect({ options, defaultValue }: Props) {
  const [sort, setSort] = useQueryState("sort", sortParser);

  const value = sort || defaultValue;

  const onHandleChange = (optionValue: string) => {
    setSort(optionValue);
  };

  return (
    <Select onChange={onHandleChange} value={value}>
      <Select.Trigger chevron={false} variant="outline">
        {value}
      </Select.Trigger>
      <Select.Content>
        {options.map((option) => {
          return (
            <Select.Item
              value={option.value}
              active={option.value === value}
              key={option.value}
            >
              {option.label}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select>
  );
}

export default SortSelect;
