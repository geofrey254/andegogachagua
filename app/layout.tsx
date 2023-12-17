import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./nav.module.css";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andego Gachagua Advocates LLP",
  description: "Andego Gachagua Advocates LLP",
  verification: {
    google: "zUhK1LifkKZBI8vvFhwNbGknoIo-CUafRWL3ijty0D4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
