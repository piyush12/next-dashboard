import React from "react";

import AppSidebar from "@/app/_navigation/AppSidebar/app-sidebar";
import { Header } from "@/app/_navigation/Header";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthRedirect();

  return (
    <div className="flex">
      <AppSidebar />
      <main className="w-full">
        <Box>
          <Flex className="p-4">
            <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
              <Header hasSearch={false} />
            </Paper>
          </Flex>
          {children}
        </Box>
      </main>
    </div>
  );
}

export default layout;
