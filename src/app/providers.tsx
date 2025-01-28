"use client";

import React from "react";

import { RedirectToast } from "@/components/RedirectToast";
import { ToastContextProvider } from "@/components/Shared/Toast/context";
import { ITheme, ThemeContextProvider } from "@/hooks/useTheme";

function Providers({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: ITheme;
}) {
  return (
    <ThemeContextProvider initialTheme={initialTheme}>
      <ToastContextProvider>
        {children}
        <RedirectToast />
      </ToastContextProvider>
    </ThemeContextProvider>
  );
}

export default Providers;
