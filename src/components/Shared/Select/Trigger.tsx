"use client";
import React from "react";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import Button from "@/components/Shared/Button";

import { ButtonVariant } from "../Button/Button";

import { useSelect } from "./Context";

function TriggerMenu({
  children,
  className,
  chevron,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  chevron: boolean;
  variant?: ButtonVariant;
}) {
  const { show, setShow } = useSelect();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Button className={className} onClick={handleClick} variant={variant}>
      {children}{" "}
      {chevron &&
        (show ? <IconChevronUp stroke={1} /> : <IconChevronDown stroke={1} />)}
    </Button>
  );
}

export default TriggerMenu;
