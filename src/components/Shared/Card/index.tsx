import React from "react";

import { cn } from "@/utils/utils";

import Box from "../Box";
import Flex from "../Flex";
import Paper from "../Paper";
import Text from "../Text";

type IProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">;

type CardProps = IProps;

function Card({ children, className }: CardProps) {
  return (
    <Paper className={cn("max-w-[400px] pb-3 pl-6 pr-6 pt-3", className)}>
      {children}
    </Paper>
  );
}

function CardHeader({ children, className }: IProps) {
  return (
    <Flex as="header" direction="column" className={cn("mb-8", className)}>
      {children}
    </Flex>
  );
}

function CardTitle({ children }: IProps) {
  return (
    <Text as="h4" variant="h4">
      {children}
    </Text>
  );
}

function CardSubTitle({ children }: IProps) {
  return (
    <Text as="span" variant="subtitle2">
      {children}
    </Text>
  );
}

function CardContent({ children, className }: IProps) {
  return <Box className={cn("mb-8", className)}>{children}</Box>;
}

function CardFooter({ children, className }: IProps) {
  return (
    <Box as="footer" className={cn(className)}>
      {children}
    </Box>
  );
}

export { Card, CardHeader, CardTitle, CardSubTitle, CardContent, CardFooter };
