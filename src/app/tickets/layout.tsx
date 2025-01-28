import React from "react";

import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthRedirect();

  return <>{children}</>;
}

export default layout;
