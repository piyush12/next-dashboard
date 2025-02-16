"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Select from "./Shared/Select/Select";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
};

function SortSelect({ options, defaultValue }: Props) {
  const sortParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const value = sortParams.get("sort") || defaultValue;

  const onHandleChange = (optionValue: string) => {
    const params = new URLSearchParams(sortParams);
    if (optionValue) {
      params.set("sort", optionValue);
    } else {
      params.delete("sort");
    }
    replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Select onChange={onHandleChange} value="light">
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
