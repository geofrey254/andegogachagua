import styles from "app/services.module.css";
import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import Link from "next/link";

const Services = () => {
  return (
    <div
      className={[
        "items-center justify-center text-center p-2 md:p-12 grid grid-cols-12",
        styles.practice_areas,
      ].join(" ")}
    >
      <h3
        className={["text-red-500 col-span-12 mt-8", styles.services_what].join(
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
      <div
        className={[
          "p-12 m-10 md:col-span-4 col-span-12 rounded-3xl",
          styles.cards_services,
        ].join(" ")}
      >
        <div className="card-icon flex justify-center p-8">
          <BiSolidBank size={72} color="white" />
        </div>
        <h2
          className={["font-bold md:text-2xl mb-2", styles.practice_h2].join(
            " "
          )}
        >
          Conveyancing, Finance & Banking
        </h2>
      </div>

      {/* Dispute Resolution */}
      <div
        className={[
          "p-12 m-10 md:col-span-4 col-span-12 rounded-3xl",
          styles.cards_services,
        ].join(" ")}
      >
        <div className="card-icon flex justify-center p-8">
          <SiHandshake size={72} color="white" />
        </div>
        <h2
          className={["font-bold md:text-2xl mb-2", styles.practice_h2].join(
            " "
          )}
        >
          Dispute Resolution
        </h2>
      </div>

      {/* Tax, Commercial & Corporate Services */}
      <div
        className={[
          "p-12 m-10 md:col-span-4 col-span-12 rounded-3xl",
          styles.cards_services,
        ].join(" ")}
      >
        <div className="card-icon flex justify-center p-8">
          <BiSolidBriefcaseAlt2 size={72} color="white" />
        </div>
        <h2
          className={["font-bold md:text-2xl mb-2", styles.practice_h2].join(
            " "
          )}
        >
          Tax, Commercial & Corporate Services
        </h2>
      </div>

      {/* Family Law, Trusts & Estate */}
      <div
        className={[
          "p-12 m-10 md:col-span-4 col-span-12 rounded-3xl",
          styles.cards_services,
        ].join(" ")}
      >
        <div className="card-icon flex justify-center p-8">
          <MdFamilyRestroom size={72} color="white" />
        </div>
        <h2
          className={["font-bold md:text-2xl mb-2", styles.practice_h2].join(
            " "
          )}
        >
          Family Law, Trusts & Estate
        </h2>
      </div>

      {/* Emerging Areas */}
      <div
        className={[
          "p-12 m-10 md:col-span-4 col-span-12 rounded-3xl",
          styles.cards_services,
        ].join(" ")}
      >
        <div className="card-icon flex justify-center p-8">
          <BiWorld size={72} color="white" />
        </div>
        <h2
          className={["font-bold md:text-2xl mb-2", styles.practice_h2].join(
            " "
          )}
        >
          Emerging Areas
        </h2>
      </div>

      <div className="about_page_button col-span-12 justify-center text-center mb-8 md:mb-0">
        <Link
          className={[
            "flex mx-auto rounded-lg mt-5 font-bold shadow-lg items-center justify-center",
            styles.about_button,
          ].join(" ")}
          href="/about"
        >
          View Practice Areas
          <FaArrowRight size={22} color="white" className="ml-4" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
