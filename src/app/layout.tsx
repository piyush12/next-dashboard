import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { auth } from "@/auth";

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
  const session = await auth();

  return (
    <html lang="en" className="dark" data-theme="dark">
      <SessionProvider session={session}>
        <body className={`${publicSans.className} `}>{children}</body>
      </SessionProvider>
    </html>
  );
}
