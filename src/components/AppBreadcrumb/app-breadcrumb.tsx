import React from "react";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/Shared/Breadcrumb";

type Props = {
  items: IItems[];
};

type IItems = {
  title: string;
  href?: string;
};

function AppBreadCrumb({ items }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          if (item.href) {
            return (
              <React.Fragment key={item.title}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-light-primary hover:dark:text-dark-primary"
                    >
                      {item.title}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {items.length - 1 !== index || index !== 0 ? (
                  <BreadcrumbItem key={index} role="presentation">
                    <BreadcrumbSeparator />
                  </BreadcrumbItem>
                ) : null}
              </React.Fragment>
            );
          } else {
            return (
              <BreadcrumbItem key={item.title}>
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default AppBreadCrumb;
