import React from "react";
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
    "Get in touch with Andego Gachagua Advocates LLP through our Contact Us page. Whether you need legal assistance, have inquiries about our services, or want to schedule a consultation, our experienced team is here to help. Reach out to us today to discuss your legal needs and let us guide you through your legal journey with professionalism and expertise.",
  robots: {
    index: true,
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
  alternates: {
    canonical: `https://www.andegogachagua.com/contact`,
  },
  openGraph: {
    title: "Andego Gachagua Advocates LLP - Contact Us",
    description:
      "Get in touch with Andego Gachagua Advocates LLP through our Contact Us page. Whether you need legal assistance, have inquiries about our services, or want to schedule a consultation, our experienced team is here to help. Reach out to us today to discuss your legal needs and let us guide you through your legal journey with professionalism and expertise.",
    url: "https://www.andegogachagua.com/contact",
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

const page = () => {
  return (
    <>
      <div>
        <div className="justify-center text-center p-12 about mt-16 md:mt-24">
          <div>
            <h2 className="text-white about_title">Contact Us</h2>
          </div>
          <div className="flex justify-center text-center">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium hover:no-underline text-gray-400 hover:text-white"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
      </div>
    </>
  );
};

export default page;
