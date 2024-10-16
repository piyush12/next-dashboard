import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      className="min-h-screen"
    >
      <Paper className="w-[460px] p-12">{children}</Paper>
    </Flex>
  );
}

export default Layout;
