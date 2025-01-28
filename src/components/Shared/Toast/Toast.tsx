"use client";
import React, { useEffect, useRef } from "react";

import {
  IconInfoCircleFilled,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";

import { cn } from "@/utils/utils";

import Box from "../Box";
import Flex from "../Flex";

import { useToastContext } from "./context";
import { ITOAST, ITOASTTYPE } from "./types";

const TOAST_COLOR: Record<ITOASTTYPE, string> = {
  error: "text-error-500",
  success: "text-success-500",
  info: "text-info-500",
  warning: "text-warning-500",
  default: "text-light-primary dark:text-dark-primary",
};

const TOAST_ICON: Record<ITOASTTYPE, React.ReactElement> = {
  error: <IconInfoCircleFilled />,
  info: <IconInfoCircleFilled />,
  warning: <IconInfoCircleFilled />,
  success: <IconRosetteDiscountCheckFilled />,
  default: <></>,
};

function Toastify() {
  const { toasts } = useToastContext();

  return (
    <Box className="fixed bottom-4 right-4 flex flex-col gap-4">
      {toasts.map((toast: ITOAST) => {
        return (
          <Toast
            type={toast.type}
            id={toast.id}
            message={toast.message}
            key={toast.id}
          >
            {toast.message}
          </Toast>
        );
      })}
    </Box>
  );
}

const Toast = ({
  type,
  message,
  id,
}: {
  type: ITOASTTYPE;
  children: React.ReactNode;
  id: string;
  message: string;
}) => {
  const className = cn(
    "w-[360px] rounded-md bg-light-paperBg p-3 dark:bg-dark-paperBg ",
    TOAST_COLOR[type as ITOASTTYPE],
  );
  const { dismiss } = useToastContext();
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    timerId.current = setTimeout(() => {
      dismiss(id);
    }, 4000);

    return () => {
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
      }
    };
  }, [dismiss, id]);
  return (
    <Flex className={className}>
      {TOAST_ICON[type as ITOASTTYPE]}
      {message}
    </Flex>
  );
};

export { Toastify };
