import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andego Gachagua Advocates LLP",
  description:
    "We firmly believe in doing our work well, guided by a keen sense of professional integrity, trust and commercial awareness. This means that we apply our best efforts to provide excellent advice, to protect our clients' interests and to do that in a timely manner that does not affect other facets of our clients' personal/business affairs. After all, we understand that the legal aspect is but one of several other aspects you need to consider.",
  keywords: ["Andego Gachagua", "Law Firm Kenya", "Patrick Kimani"],
  verification: {
    google: "sIV8tM10UwKglS_MqnPslytfvxJpGr9bP21OtyRwU3I",
  },
  alternates: {
    canonical: `https://www.andegogachagua.com/`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "Andego Gachagua Advocates LLP",
    description:
      "We firmly believe in doing our work well, guided by a keen sense of professional integrity, trust and commercial awareness. This means that we apply our best efforts to provide excellent advice, to protect our clients' interests and to do that in a timely manner that does not affect other facets of our clients' personal/business affairs. After all, we understand that the legal aspect is but one of several other aspects you need to consider.",
    url: "https://www.andegogachagua.com",
    siteName: "Andego Gachagua",
    images: [
      {
        url: "https://www.andegogachagua.com/_next/image?url=%2Flogo.png&w=64&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.andegogachagua.com/_next/image?url=%2Flogo.png&w=64&q=75",
        width: 1800,
        height: 1600,
        alt: "Andego Gachagua Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Footer />
      </body>
    </html>
  );
}
