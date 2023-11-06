import React from "react";
import styles from "app/services.module.css";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const Features = () => {
  return (
    <div className={["", styles.features].join(" ")}>
      <div className="container px-6 py-10 mx-auto">
        <p className="mt-4  xl:mt-6 text-gray-300">
          The Firm provides a full array of legal services to the foregoing
          sectors under the following departments
        </p>
        <div className="grid p-4 grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-red-500">
              <BiSolidBank size={52} />
            </span>

            <h1 className="text-2xl font-bold capitalize text-white">
              CONVEYANCING, FINANCE & BANKING
            </h1>

            <p className="text-gray-300">
              Our team excels in property acquisition, development, tax
              planning, leasing, conveyancing (property transfer, leases, etc.),
              and banking services (securities assessment, documentation, and
              debt recovery). We ensure smooth financial transactions with
              expert guidance and business-oriented legal advice.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-red-500 ">
              <SiHandshake size={52} />
            </span>

            <h1 className="text-2xl font-bold capitalize text-white">
              DISPUTE RESOLUTION
            </h1>

            <p className="text-gray-300">
              AG Legal specializes in personalized legal solutions, including
              civil and commercial litigation, debt recovery, land and
              environment disputes, personal injury, employment disputes, and
              family law. We guide clients through dispute resolution methods
              such as litigation, negotiation, conciliation, mediation, and
              arbitration, addressing a wide spectrum of legal issues.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-red-500 dark:text-red-400">
              <BiSolidBriefcaseAlt2 size={52} />
            </span>

            <h1 className="text-2xl font-bold capitalize text-white">
              TAX, COMMERCIAL & CORPORATE SERVICES
            </h1>

            <p className="text-gray-300">
              Our experienced team offers comprehensive tax, commercial, and
              corporate services for seamless business operations. We optimize
              structures in compliance with laws, provide counsel for complex
              transactions, and specialize in incorporating legal entities. We
              offer tailored solutions, handle legal issues, and register
              intellectual property rights with a focus on business acumen and
              legal compliance.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-red-500 ">
              <MdFamilyRestroom size={52} />
            </span>

            <h1 className="text-2xl font-bold capitalize text-white">
              FAMILY LAW, TRUSTS & ESTATE
            </h1>

            <p className="text-gray-300">
              AG Legal's team of professionals is dedicated to safeguarding your
              interests and those of your loved ones with confidentiality and
              expertise. We specialize in family law in Kenya, covering child
              custody, adoption, divorce, probate, and matrimonial property
              disputes. Our services include estate planning, wills, trusts, and
              more to protect your family's legacy. We guide families through
              separation, divorce, and child custody matters, working
              collaboratively with relevant authorities and stakeholders.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-red-500 ">
              <BiWorld size={52} />
            </span>

            <h1 className="text-2xl font-bold capitalize text-white">
              EMERGING AREAS
            </h1>

            <p className="text-gray-300">
              At AG Legal, we understand that the operating environment is
              constantly changing. We stay and remain ahead so that we can
              anticipate legal hurdles and guide you through these seamlessly.
              From cybersecurity law, data privacy and protection, fintech,
              renewable energy and natural resources among others; we have it
              all covered. We provide legal alerts and information notes to help
              you understand their impact for you and/or your business so that
              you stay ahead of the developments in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
