"use client";
import React from "react";
import Flex from "@/components/Shared/Flex";
import Select from "@/components/Shared/Select/Select";
import TextField from "@/components/Shared/TextField";
import {
  IconDeviceLaptop,
  IconMoonStars,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";

type IMode = "light" | "dark" | "system";
type IModeData = {
  [key in IMode]: { label: string; icon: React.ReactNode };
};

const modeData: IModeData = {
  light: { label: "Light", icon: <IconSun /> },
  dark: { label: "Dark", icon: <IconMoonStars /> },
  system: { label: "System", icon: <IconDeviceLaptop /> },
};

function Header() {
  const [mode, setMode] = React.useState<IMode>("system");
  return (
    <Flex align="center" justify="between">
      <Flex align="center" direction="row-reverse" className="w-10/12">
        <TextField type="text" placeholder="Search..." fullWidth>
          <IconSearch
            stroke={2}
            className="text-light-primary dark:text-dark-primary"
          />
        </TextField>
      </Flex>
      <Select
        onChange={(value: IMode) => {
          setMode(value);
        }}
        value="light"
      >
        <Select.Trigger chevron={false}>{modeData[mode].icon}</Select.Trigger>
        <Select.Content>
          {Object.keys(modeData).map((key) => {
            return (
              <Select.Item value={key} active={mode == key} key={key}>
                {modeData[key as IMode].icon} {modeData[key as IMode].label}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select>
    </Flex>
  );
}

export default Header;
