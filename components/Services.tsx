import styles from "app/services.module.css";
import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import Link from "next/link";
import { Features } from "@/components";

const Services = () => {
  return (
    <div
      className={[
        "items-center justify-center text-center p-8",
        styles.practice_areas,
      ].join(" ")}
    >
      <h3
        className={["color-andego col-span-12 mt-8", styles.services_what].join(
          " "
        )}
      >
        What We Do
      </h3>
      <h2
        className={[
          "col-span-12 md:text-4xl text-2xl mt-2",
          styles.services_title,
        ].join(" ")}
      >
        Our Practice Areas
      </h2>
      <div className="grid p-4 grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
        <div className="p-8 space-y-3 border-2 rounded-xl bg-custom">
          <span className="inline-block color-andego">
            <BiSolidBank size={52} />
          </span>

          <h1 className="text-sm md:text-2xl font-bold capitalize color-text">
            CONVEYANCING, FINANCE & BANKING
          </h1>

          <p className="color-andego">
            Our team excels in property acquisition, development, tax planning,
            leasing, conveyancing (property transfer, leases, etc.), and banking
            services (securities assessment, documentation, and debt recovery).
            We ensure smooth financial transactions with expert guidance and
            business-oriented legal advice.
          </p>
        </div>
        <div className="p-8 space-y-3 border-2 rounded-xl bg-custom">
          <span className="inline-block color-andego ">
            <SiHandshake size={52} />
          </span>

          <h1 className="text-sm md:text-2xl font-bold capitalize color-text">
            DISPUTE RESOLUTION
          </h1>

          <p className="color-andego">
            AG Legal specializes in personalized legal solutions, including
            civil and commercial litigation, debt recovery, land and environment
            disputes, personal injury, employment disputes, and family law. We
            guide clients through dispute resolution methods such as litigation,
            negotiation, conciliation, mediation, and arbitration, addressing a
            wide spectrum of legal issues.
          </p>
        </div>
      </div>

      <div className="about_page_button col-span-12 justify-center text-center mb-8 md:mb-0">
        <Link href="/contact" className="hover:no-underline">
          <button className="flex mx-auto select-none items-center gap-3 rounded-lg bg-orange-300 py-3 px-6 text-center align-middle text-s font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:no-underline">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
