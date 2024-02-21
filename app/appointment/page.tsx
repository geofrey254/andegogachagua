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
  title: "Book an appointment",
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
    canonical: `https://www.andegogachagua.com/appointment`,
  },
  openGraph: {
    title: "Book an Appointment",
    description:
      "Get in touch with Andego Gachagua Advocates LLP through our Contact Us page. Whether you need legal assistance, have inquiries about our services, or want to schedule a consultation, our experienced team is here to help. Reach out to us today to discuss your legal needs and let us guide you through your legal journey with professionalism and expertise.",
    url: "https://www.andegogachagua.com/appointment",
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
    <div>
      <Appointment />
    </div>
  );
};

export default page;
