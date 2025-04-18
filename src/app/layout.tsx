import React from "react";

import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toastify } from "@/components/Shared/Toast";
import { ITheme } from "@/hooks/useTheme";

import Providers from "./providers";

import "./globals.css";

const publicSans = Public_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = (await cookies()).get("color-theme");
  const getTheme = savedTheme?.value as ITheme;
  const theme = getTheme === "system" ? "dark" : getTheme;
  return (
    <html lang="en" className={theme} data-theme={theme}>
      <Providers>
        <body className={`${publicSans.className}`}>
          <NuqsAdapter>
            {children} <Toastify />
          </NuqsAdapter>
          <div id="modal"></div>
        </body>
      </Providers>
    </html>
  );
}
