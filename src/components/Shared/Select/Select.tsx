import { FC, ReactNode } from "react";

import { cn } from "@/utils/utils";

import Content from "./Content";
import MenuProvider from "./Context";
import Item from "./Item";
import TriggerMenu from "./Trigger";
import Wrapper from "./Wrapper";

type SelectProps<T> = {
  children: ReactNode;
  className?: string;
  onChange?: (value: T) => void;
  value: string;
};

const Select = <T,>({ children, className, onChange }: SelectProps<T>) => {
  const classes = cn("relative w-max", className);
  return (
    <MenuProvider>
      <Wrapper className={classes} onChange={onChange}>
        {children}
      </Wrapper>
    </MenuProvider>
  );
};

Select.displayName = "Select";

type SelectTriggerProps = {
  children?: ReactNode;
  className?: string;
  chevron?: boolean;
};
const SelectTrigger = ({
  children,
  className,
  chevron = true,
}: SelectTriggerProps) => {
  return (
    <TriggerMenu className={className} chevron={chevron}>
      {children}
    </TriggerMenu>
  );
};

SelectTrigger.displayName = "Select.Trigger";

type SelectContentProps = {
  children: ReactNode;
  className?: string;
  onChange?: (value: string) => void;
};

const SelectContent = ({
  children,
  className,
  onChange,
}: SelectContentProps) => {
  return (
    <Content className={className} onChange={onChange}>
      {children}
    </Content>
  );
};

SelectContent.displayName = "Select.Content";

type SelectItemProps = {
  children: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
  value: string;
  onChange?: (value: string) => void;
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

const SelectItem: FC<SelectItemProps> = ({
  active,
  children,
  className,
  value,
  onChange,
}) => {
  const bgClass = active ? menuItemClasses["activeBg"] : menuItemClasses["bg"];
  const hoverClass = active
    ? menuItemClasses["activeHover"]
    : menuItemClasses["hover"];

  const classes = cn(menuItemClasses["base"], bgClass, hoverClass, className);
  return (
    <Item value={value} onChange={onChange} className={classes}>
      {children}
    </Item>
  );
};

SelectItem.displayName = "Select.Item";

Select.Item = SelectItem;
Select.Content = SelectContent;
Select.Trigger = SelectTrigger;

export default Select;
