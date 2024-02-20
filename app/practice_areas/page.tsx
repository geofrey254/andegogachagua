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
  Features,
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andego Gachagua Advocates LLP - Our Services",
  description:
    "Explore the diverse practice areas offered by Andego Gachagua Advocates LLP, a leading law firm dedicated to providing expert legal services in Kenya. Our practice areas encompass a wide range of specialties including corporate law, commercial litigation, intellectual property, real estate, employment law, family law, and more. With a team of experienced and skilled attorneys, we are committed to delivering tailored solutions and exceptional representation to our clients. Learn more about how our firm can assist you in navigating complex legal matters and achieving your objectives effectively.",
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
  alternates: {
    canonical: `https://www.andegogachagua.com/practice_areas`,
  },
  openGraph: {
    title: "Andego Gachagua Advocates LLP - Our Services",
    description:
      "Explore the diverse practice areas offered by Andego Gachagua Advocates LLP, a leading law firm dedicated to providing expert legal services in Kenya. Our practice areas encompass a wide range of specialties including corporate law, commercial litigation, intellectual property, real estate, employment law, family law, and more. With a team of experienced and skilled attorneys, we are committed to delivering tailored solutions and exceptional representation to our clients. Learn more about how our firm can assist you in navigating complex legal matters and achieving your objectives effectively.",
    url: "https://www.andegogachagua.com/practice_areas",
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
      <div
        className={["justify-center text-center p-12", styles.about].join(" ")}
      >
        <div>
          <h2 className={["text-white", styles.about_title].join(" ")}>
            Practice Areas
          </h2>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-white md:ml-2">
                    Practice Areas
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default page;
