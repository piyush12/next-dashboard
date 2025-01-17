"use client";

import React from "react";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { RedirectToast } from "@/components/RedirectToast";
import { ToastContextProvider } from "@/components/Shared/Toast/context";
import { ITheme, ThemeContextProvider } from "@/hooks/useTheme";

function Providers({
  session,
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  session: Session | null;
  initialTheme: ITheme;
}) {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider initialTheme={initialTheme}>
        <ToastContextProvider>
          {children}
          <RedirectToast />
        </ToastContextProvider>
      </ThemeContextProvider>
    </SessionProvider>
  );
}

export default Providers;
