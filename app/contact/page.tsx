import React from "react";
import styles from "app/about_us.module.css";
import Link from "next/link";
import {
  Hero,
  Navbar,
  Cards,
  About,
  Services,
  Team,
  Call,
  Appointment,
  Footer,
  Choose,
  Contact_page,
} from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andego Gachagua Advocates LLP - Contact Us",
  description:
    "We firmly believe in doing our work well, guided by a keen sense of professional integrity, trust and commercial awareness. This means that we apply our best efforts to provide excellent advice, to protect our clients' interests and to do that in a timely manner that does not affect other facets of our clients' personal/business affairs. After all, we understand that the legal aspect is but one of several other aspects you need to consider. We do not offer excuses or justifications. We simply deliver.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Andego Gachagua Advocates LLP - Contact Us",
    description:
      "We firmly believe in doing our work well, guided by a keen sense of professional integrity, trust and commercial awareness. This means that we apply our best efforts to provide excellent advice, to protect our clients' interests and to do that in a timely manner that does not affect other facets of our clients' personal/business affairs. After all, we understand that the legal aspect is but one of several other aspects you need to consider. We do not offer excuses or justifications. We simply deliver.",
    url: "https://www.andegogachagua.com/about",
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
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <div
        className={["justify-center text-center p-12", styles.about].join(" ")}
      >
        <div>
          <h2 className={["text-white", styles.about_title].join(" ")}>
            Contact Us
          </h2>
        </div>
        <div className="flex justify-center text-center">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium hover:no-underline text-gray-400 dark:hover:color-andego"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-white md:ml-2">
                    Contact Us
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Contact_page />
      <Footer />
    </div>
  );
};

export default page;
