"use client";

import React from "react";

import { ToastContextProvider } from "@/components/Shared/Toast/context";
import { ThemeContextProvider } from "@/hooks/useTheme";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ToastContextProvider>{children}</ToastContextProvider>
    </ThemeContextProvider>
  );
}

export default Providers;
