import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./nav.module.css";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Head from "next/head";

import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andego Gachagua & Advocate Associates",
  description: "Andego Gachagua & Advocate Associate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
