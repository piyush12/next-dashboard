import { FC, ReactNode } from "react";

import Flex from "@/components/Shared/Flex";
import { cn } from "@/utils/utils";

import Content from "./Content";
import MenuProvider from "./Context";
import TriggerMenu from "./TriggerMenu";
import Wrapper from "./Wrapper";

type DropdownMenuProps = {
  children: ReactNode;
  className?: string;
};

const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
  const classes = cn("relative w-max", className);
  return (
    <MenuProvider>
      <Wrapper className={classes}>{children}</Wrapper>
    </MenuProvider>
  );
};

DropdownMenu.displayName = "DropdownMenu";

type DropdownMenuTriggerProps = {
  children: ReactNode;
};
const DropdownMenuTrigger = ({ children }: DropdownMenuTriggerProps) => {
  return <TriggerMenu>{children}</TriggerMenu>;
};

DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";

type DropdownMenuContentProps = {
  children: ReactNode;
  className?: string;
};

const DropdownMenuContent = ({
  children,
  className,
}: DropdownMenuContentProps) => {
  return <Content className={className}>{children}</Content>;
};

DropdownMenuContent.displayName = "DropdownMenu.Content";

type DropdownMenuItemProps = {
  children: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
};

const menuItemClasses: {
  base: string;
  bg: string;
  hover: string;
  activeHover: string;
  activeBg: string;
} = {
  base: "min-h-[auto] cursor-pointer items-center gap-5 rounded-md p-2 text-body1 font-regular",
  bg: "text-light-primary opacity-90  dark:text-dark-primary",
  hover: "hover:bg-light-grayLight hover:dark:bg-dark-grayLight",
  activeHover: "hover:bg-opacity-[25%]",
  activeBg: "bg-purple-500 bg-opacity-[16%] text-purple-500",
};

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  active,
  icon,
  children,
  className,
}) => {
  const bgClass = active ? menuItemClasses["activeBg"] : menuItemClasses["bg"];
  const hoverClass = active
    ? menuItemClasses["activeHover"]
    : menuItemClasses["hover"];

  const classes = cn(menuItemClasses["base"], bgClass, hoverClass, className);
  return (
    <Flex role="menuitem" className={classes}>
      <div className="icon">{icon}</div> {children}
    </Flex>
  );
};

DropdownMenuItem.displayName = "DropdownMenu.Item";

DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Trigger = DropdownMenuTrigger;

export default DropdownMenu;
