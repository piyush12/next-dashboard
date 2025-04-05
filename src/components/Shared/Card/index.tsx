import React from "react";

import { Colors, TextVariant } from "@/types/global";
import { cn } from "@/utils/utils";

import Box from "../Box";
import Flex from "../Flex";
import Paper from "../Paper";
import Text from "../Text";
import { AllowedTags } from "../Text/Text";

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

function CardSubTitle({
  variant = "subtitle2",
  color,
  children,
  as = "span",
}: IProps & { variant?: TextVariant; color?: Colors; as?: AllowedTags }) {
  return (
    <Text as={as} variant={variant} color={color}>
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

export { Card, CardContent, CardFooter, CardHeader, CardSubTitle, CardTitle };
