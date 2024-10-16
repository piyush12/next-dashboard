import React, { ComponentProps, TableHTMLAttributes } from "react";
import Paper from "@/components/Shared/Paper";
import { cn } from "@/utils/utils";
import Flex from "@/components/Shared/Flex";

type IProps = {
  children: React.ReactNode;
  className?: string;
};

function Table({
  children,
  className,
  ...props
}: ComponentProps<"table"> & IProps) {
  const classes = cn(
    "w-full text-light-primary dark:text-dark-primary",
    className,
  );
  return (
    <Paper className="w-full p-3">
      <div className="min-w-full">
        <table className={classes} {...props}>
          {children}
        </table>
      </div>
    </Paper>
  );
}

function TableHeader({
  children,
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement> & IProps) {
  const classes = cn(
    "text-left align-middle text-tableHeader font-medium uppercase opacity-90",
    className,
  );
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
}

function TableBody({
  children,
  className,
}: TableHTMLAttributes<HTMLTableSectionElement> & IProps) {
  const classes = cn("text-body1", className);
  return <tbody className={classes}>{children}</tbody>;
}

function TableRow({
  children,
  className,
  showBorder = true,
  ...props
}: TableHTMLAttributes<HTMLTableRowElement> &
  IProps & { showBorder?: boolean }) {
  const classes = cn(
    showBorder
      ? "border-light-divider dark:border-dark-divider border-b-[1px]"
      : "",
    className,
  );
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
}

function TableHead({
  children,
  className,
  ...props
}: TableHTMLAttributes<HTMLTableCellElement> & IProps) {
  const classes = cn("p-4", className);
  return (
    <th className={classes} {...props}>
      <Flex justify="between">
        {children}
        <span className="dark:bg-dark-divider bg-light-divider inline-block min-h-3 w-[1px]"></span>
      </Flex>
    </th>
  );
}

function TableFooter({
  children,
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement> & IProps) {
  const classes = cn("p-4", className);
  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  );
}

function TableCell({
  children,
  className,
  ...props
}: ComponentProps<"td"> & IProps) {
  const classes = cn("p-4", className);
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
};
