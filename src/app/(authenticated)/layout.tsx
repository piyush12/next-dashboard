import React from 'react';

import { Header } from '@/app/_navigation/Header';
import Box from '@/components/Shared/Box';
import Flex from '@/components/Shared/Flex';
import Paper from '@/components/Shared/Paper';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { getAuthRedirect } from '@/features/auth/queries/get-auth-redirect';

import { AppSidebar } from '../_navigation/AppSidebar/app-sidebar';

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthRedirect();

  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <Box>
            <Flex className="p-4">
              <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
                <Header hasSearch={false} />
              </Paper>
            </Flex>
            {children}
          </Box>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default layout;
