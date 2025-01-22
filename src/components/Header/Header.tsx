"use client";
import React, { useEffect, useState } from "react";

import {
  IconDeviceLaptop,
  IconMoonStars,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import { User } from "lucia";

import Flex from "@/components/Shared/Flex";
import Select from "@/components/Shared/Select/Select";
import { signOut } from "@/features/auth/actions/signout";
import { getAuth } from "@/features/auth/queries/getAuth";
import { useTheme } from "@/hooks/useTheme";

import Button from "../Shared/Button";
import TextField from "../Shared/TextField";
import { SubmitButton } from "../SubmitButton";

type IMode = "light" | "dark" | "system";
type IModeData = Record<IMode, { label: string; icon: React.ReactNode }>;

const modeData: IModeData = {
  light: { label: "Light", icon: <IconSun /> },
  dark: { label: "Dark", icon: <IconMoonStars /> },
  system: { label: "System", icon: <IconDeviceLaptop /> },
};

function Header({ hasSearch = true }) {
  const { theme, onChangeTheme } = useTheme();
  const [user, setUser] = useState<User | null>(null);
  const justify = hasSearch ? "between" : "end";
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const { user } = await getAuth();
      setUser(user);
      setFetched(true);
    }
    fetchUser();
  }, []);

  if (!isFetched) {
    return false;
  }

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
      {user ? (
        <form action={signOut}>
          <SubmitButton type="submit">Sign Out</SubmitButton>
        </form>
      ) : (
        <>
          <Button variant="default">Sign In</Button>
          <Button variant="default">Register </Button>
        </>
      )}
    </Flex>
  );
}

export default Header;
