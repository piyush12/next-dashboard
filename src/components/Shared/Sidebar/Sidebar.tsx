"use client";
import React, { useContext } from "react";

import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarRightExpand,
} from "@tabler/icons-react";

import { cn } from "@/utils/utils";

import Box from "../Box";
import Button from "../Button";
import Flex from "../Flex";

type SidebarProps = {
  children: React.ReactNode;
};

type SidebarContextProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Must wrap inside Sidebar Provider");
  }
  return context;
};

function Sidebar({ children }: SidebarProps) {
  return (
    <SidebarProvider>
      <SidebarWrapper>{children}</SidebarWrapper>
    </SidebarProvider>
  );
}

function SidebarWrapper({ children }: SidebarProps) {
  const { isOpen } = useSidebar();
  return (
    <Box
      className={cn(
        "cubic-bezier(0.6,-0.28,0.74,0.05) w-64 transition-transform duration-200 ",
        {
          "-translate-x-[10%]": isOpen,
          "-translate-x-[0%]": !isOpen,
          "w-64": !isOpen,
          "w-16": isOpen,
        },
      )}
    >
      <div
        className={cn(
          "sticky  top-0  h-svh bg-light-paperBg p-2 dark:bg-dark-paperBg",
        )}
      >
        {children}
      </div>
    </Box>
  );
}

function SidebarHeader({ children }: { children?: React.ReactNode }) {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <Flex justify="between" className="pb-10 pr-2">
      <div className="min-h-6">{children}</div>
      <Button role="button" onClick={() => setIsOpen(!isOpen)} className="!p-0">
        {isOpen ? (
          <IconLayoutSidebarLeftExpand stroke={2} />
        ) : (
          <IconLayoutSidebarRightExpand stroke={2} />
        )}
      </Button>
    </Flex>
  );
}
SidebarHeader.displayName = "SidebarHeader";

function SidebarContent({ children }: SidebarProps) {
  return <Box>{children}</Box>;
}
SidebarContent.displayName = "SidebarContent";

function SidebarGroup({ children }: SidebarProps) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}
SidebarGroup.displayName = "SidebarGroup";

function SidebarItem({
  children,
  render,
  active,
}: {
  render?: (value: boolean) => React.ReactNode;
  active?: boolean;
  children?: React.ReactNode;
}) {
  const { isOpen } = useSidebar();
  return (
    <li
      className={cn(
        "flex items-center gap-3 pb-3 pl-2 pr-2 pt-3 text-body1 text-light-primary hover:bg-gray-800/15 dark:text-dark-primary",
        {
          "flex-row-reverse": isOpen,
          "bg-gray-800/15": active,
        },
      )}
    >
      {!render && children}
      {render && render(isOpen)}
      {/* {icon && icon}
      {!isOpen && (
        <span
          className={cn(
            "opacity-100 transition-opacity duration-200 ease-linear",
            {
              "opacity-0": isOpen,
            },
          )}
        >
          {children}
        </span>
      )} */}
    </li>
  );
}
SidebarItem.displayName = "SidebarItem";
// TODO
// const SidebarFooter = () => {}

export { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarGroup };
