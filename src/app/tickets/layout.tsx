import React from "react";

import Link from "next/link";

import { Header } from "@/components/Header";
import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { generateRoutePath, ROUTES } from "@/path";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthRedirect();

  return (
    <Box>
      <Flex className="p-4">
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Header hasSearch={false} />
        </Paper>
      </Flex>
      <Flex className="p-4">
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Link href={generateRoutePath(ROUTES.TICKETS)}>
            <Button variant="outline" color="primary">
              All Tickets
            </Button>
          </Link>
        </Paper>
      </Flex>
      {children}
    </Box>
  );
}

export default layout;
