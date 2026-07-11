import type { Metadata } from "next";
import "./globals.css";

import {Header} from "@/components/Header"

export const metadata: Metadata = {
  title: "Revision Site",
  description: "Project i am writing for the purpose of learning next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
