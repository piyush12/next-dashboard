import { IconBook, IconLibrary, IconUser } from '@tabler/icons-react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { generateRoutePath, ROUTES } from '@/path';

// Menu items.
const items = [
  {
    title: 'All Tickets',
    icon: <IconLibrary stroke={2} />,
    href: generateRoutePath(ROUTES.TICKETS),
  },
  {
    title: 'My Tickets',
    icon: <IconBook stroke={2} />,
    href: generateRoutePath(ROUTES.MYTICKETS),
  },
  {
    title: 'Ecommerce',
    icon: <IconUser stroke={2} />,
    href: generateRoutePath(ROUTES.ECOMMERCE_PRODUCTS_LIST),
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="pb-6 pt-6">
                    {item.href && (
                      <Link href={item.href}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
