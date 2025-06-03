import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type SelectProps = {
  placeholder: string;
  name: string;
  selectItem: {
    [key: string]: string;
  }[];
  defaultValue?: string;
};

function AppSelect({
  placeholder,
  selectItem,
  name,
  defaultValue,
}: SelectProps) {
  return (
    <Select name={name} defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectItem.map((item) => {
          const [[key, value]] = Object.entries(item);
          return (
            <SelectItem value={key} key={key}>
              {value}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default AppSelect;
