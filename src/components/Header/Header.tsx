"use client";
import React from "react";

import {
  IconDeviceLaptop,
  IconMoonStars,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";

import Flex from "@/components/Shared/Flex";
import Select from "@/components/Shared/Select/Select";
import { useTheme } from "@/hooks/useTheme";

import TextField from "../Shared/TextField";

type IMode = "light" | "dark" | "system";
type IModeData = Record<IMode, { label: string; icon: React.ReactNode }>;

const modeData: IModeData = {
  light: { label: "Light", icon: <IconSun /> },
  dark: { label: "Dark", icon: <IconMoonStars /> },
  system: { label: "System", icon: <IconDeviceLaptop /> },
};

function Header({ hasSearch = true }) {
  const { theme, onChangeTheme } = useTheme();
  const justify = hasSearch ? "between" : "end";

  return (
    <Flex align={"center"} justify={justify}>
      {hasSearch && (
        <Flex align="center" direction="row-reverse" className="w-10/12">
          <TextField type="text" placeholder="Search..." fullWidth>
            <IconSearch
              stroke={2}
              className="text-light-primary dark:text-dark-primary"
            />
          </TextField>
        </Flex>
      )}

      <Select
        onChange={(value: IMode) => {
          onChangeTheme(value);
        }}
        value="light"
      >
        <Select.Trigger chevron={false}>{modeData[theme].icon}</Select.Trigger>
        <Select.Content>
          {Object.keys(modeData).map((key) => {
            return (
              <Select.Item value={key} active={theme == key} key={key}>
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
