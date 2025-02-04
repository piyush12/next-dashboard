"use client";
import React, { useState } from "react";

import Box from "../Box";
import Button from "../Button";
import Flex from "../Flex";
import { Portal } from "../Portal";
import Text from "../Text";

type AlertProps = {
  children: React.ReactNode;
};

type AlertDialogContextProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

function Overlay() {
  return (
    <Box className="fixed left-0 top-0 z-50 h-full w-full bg-dark-bg/80" />
  );
}

const AlertDialogContext = React.createContext<AlertDialogContextProps | null>(
  null,
);

const AlertDialogProvider = ({ children }: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AlertDialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

AlertDialogProvider.displayName = "AlertDialogProvider";

const useAlertDialog = () => {
  const context = React.useContext(AlertDialogContext);
  if (!context) {
    throw new Error("Must wrap inside AlertDialogProvider");
  }
  return context;
};

function AlertDialog({ children }: AlertProps) {
  return <AlertDialogProvider>{children}</AlertDialogProvider>;
}

AlertDialog.displayName = "AlertDialog";

function AlertDialogTrigger({
  asChild,
  children,
}: AlertProps & { asChild?: boolean }) {
  const { setIsOpen } = useAlertDialog();
  const child = children as React.ReactElement<{
    onClick?: React.MouseEventHandler;
  }>;
  return asChild ? (
    React.cloneElement(child, { onClick: () => setIsOpen(true) })
  ) : (
    <Button onClick={() => setIsOpen(true)}>{children}</Button>
  );
}

AlertDialogTrigger.displayName = "AlertDialogTrigger";

function AlertDialogContent({ children }: AlertProps) {
  const { isOpen } = useAlertDialog();
  if (isOpen)
    return (
      <Portal selector="#modal">
        <Overlay />
        <Box
          role="alertdialog"
          className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md bg-light-paperBg p-8 dark:bg-dark-paperBg"
        >
          {children}
        </Box>
      </Portal>
    );
  return null;
}

AlertDialogContent.displayName = "AlertDialogContent";

function AlertDialogHeader({ children }: AlertProps) {
  return (
    <Flex direction="column" gap="4">
      {children}
    </Flex>
  );
}

AlertDialogHeader.displayName = "AlertDialogHeader";

function AlertDialogTitle({ children }: AlertProps) {
  return (
    <Text variant="h4" as="h2">
      {children}
    </Text>
  );
}
AlertDialogTitle.displayName = "AlertDialogTitle";

function AlertDialogDescription({ children }: AlertProps) {
  return (
    <Text as="p" variant="body1">
      {children}
    </Text>
  );
}

AlertDialogDescription.displayName = "AlertDialogDescription";

function AlertDialogFooter({ children }: AlertProps) {
  return (
    <Flex justify="end" gap="2">
      {children}
    </Flex>
  );
}

AlertDialogFooter.displayName = "AlertDialogFooter";

function AlertDialogCancel({ children }: AlertProps) {
  const { setIsOpen } = useAlertDialog();
  return (
    <Button
      variant="default"
      color="secondary"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Button>
  );
}

AlertDialogCancel.displayName = "AlertDialogCancel";

function AlertDialogAction({
  children,
  onClick,
  asChild,
}: AlertProps & { asChild?: boolean; onClick?: () => void }) {
  const { setIsOpen } = useAlertDialog();
  if (asChild) {
    return children;
  }
  return (
    <Button
      variant="default"
      color="primary"
      onClick={() => {
        onClick?.();
        setIsOpen(false);
      }}
    >
      {children}
    </Button>
  );
}

AlertDialogAction.displayName = "AlertDialogAction";

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogTrigger,
};
