"use client";
import React from "react";

import { IconBook, IconLibrary, IconUser } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
} from "@/components/Shared/Sidebar";
import { generateRoutePath, ROUTES } from "@/path";
import { cn } from "@/utils/utils";

import SidebarLink from "./sidebar-link";
import SidebarLinkText from "./sidebar-link-text";

const SIDEBARMENUITEMS = [
  {
    title: "All Tickets",
    icon: <IconLibrary stroke={2} />,
    href: generateRoutePath(ROUTES.TICKETS),
  },
  {
    title: "My Tickets",
    icon: <IconBook stroke={2} />,
    href: generateRoutePath(ROUTES.MYTICKETS),
  },
  {
    title: "My Account",
    icon: <IconUser stroke={2} />,
    href: generateRoutePath(ROUTES.ACCOUNT),
  },
];

function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {SIDEBARMENUITEMS.map((menuItems) => {
            const isTicketsSection = menuItems.href === ROUTES.TICKETS;
            const isActive =
              path.startsWith(menuItems.href) &&
              !(isTicketsSection && path.startsWith(ROUTES.MYTICKETS));

            return (
              <SidebarItem
                key={menuItems.title}
                active={isActive}
                render={(isOpen: boolean) => (
                  <SidebarLink
                    href={menuItems.href}
                    className={cn("flex w-full gap-4", {
                      "flex-row-reverse": isOpen,
                    })}
                  >
                    <SidebarLinkText
                      icon={menuItems.icon}
                      text={menuItems.title}
                      isOpen={isOpen}
                    />
                  </SidebarLink>
                )}
              />
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
