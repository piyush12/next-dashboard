import React from "react";

import { IconSlash } from "@tabler/icons-react";

import { cn } from "@/utils/utils";

function Breadcrumb({ children }: { children: React.ReactNode }) {
  return <nav aria-label="breadcrumb">{children}</nav>;
}

function BreadcrumbList({ children }: { children: React.ReactNode }) {
  return (
    <ol
      className={cn(
        "text-sm flex flex-wrap items-center gap-1.5 break-words text-gray-500 sm:gap-2.5",
      )}
    >
      {children}
    </ol>
  );
}

Breadcrumb.displayName = "Breadcrumb";

BreadcrumbList.displayName = "BreadcrumbList";

function BreadcrumbItem({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: string;
}) {
  return (
    <li className="inline-flex items-center gap-1.5" role={role}>
      {children}
    </li>
  );
}

BreadcrumbItem.displayName = "BreadcrumbItem";

function BreadcrumbLink({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: React.ReactNode;
}) {
  return asChild ? (
    children
  ) : (
    <a
      href=""
      className={cn(
        "transition-colors hover:text-light-primary hover:dark:text-dark-primary",
      )}
    >
      {children}
    </a>
  );
}

BreadcrumbLink.displayName = "BreadcrumbLink";

function BreadcrumbSeparator({ children }: { children?: React.ReactNode }) {
  return children ? children : <IconSlash stroke={1} />;
}

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

function BreadcrumbPage({ children }: { children: React.ReactNode }) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className="font-normal text-light-primary dark:text-dark-primary"
    >
      {children}
    </span>
  );
}

BreadcrumbPage.displayName = "BreadcrumbPage";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
};
