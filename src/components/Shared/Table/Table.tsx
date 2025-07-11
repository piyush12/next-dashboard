import React, { ComponentProps, TableHTMLAttributes } from 'react';

import Flex from '@/components/Shared/Flex';
import { cn } from '@/utils/utils';

type IProps = {
  children: React.ReactNode;
  className?: string;
};

function Table({
  children,
  className,
  ...props
}: ComponentProps<'table'> & IProps) {
  const classes = cn(
    'w-full text-light-primary dark:text-dark-primary',
    className,
  );
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  );
}

function TableHeader({
  children,
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement> & IProps) {
  const classes = cn(
    'text-left align-middle text-tableHeader font-medium uppercase opacity-90',
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
  const classes = cn('text-body1', className);
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
      ? 'border-light-divider dark:border-dark-divider border-b-[1px]'
      : '',
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
}: ComponentProps<'th'> & IProps) {
  const classes = cn('p-4', className);
  return (
    <th className={classes} {...props}>
      <Flex justify="between">
        {children}
        <span className="inline-block min-h-3 w-[1px] bg-light-divider dark:bg-dark-divider"></span>
      </Flex>
    </th>
  );
}

function TableFooter({
  children,
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement> & IProps) {
  const classes = cn('p-4', className);
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
}: ComponentProps<'td'> & IProps) {
  const classes = cn('p-4', className);
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
}

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
