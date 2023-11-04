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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-between">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-teal-100">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-5 flex-shrink-0">
                <BiSolidBank size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  CONVEYANCING, FINANCE & BANKING
                </h2>
                <p className="leading-relaxed text-base">
                  Our team excels in property acquisition, development, tax
                  planning, leasing, conveyancing (property transfer, leases,
                  etc.), and banking services (securities assessment,
                  documentation, and debt recovery). We ensure smooth financial
                  transactions with expert guidance and business-oriented legal
                  advice.
                </p>
              </div>
              <div className="flex mt-6 justify-center ">
                <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
              </div>
            </div>
            {/* Dispute Resolution */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-teal-100">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-5 flex-shrink-0">
                <SiHandshake size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  DISPUTE RESOLUTION
                </h2>
                <p className="leading-relaxed text-base">
                  AG Legal specializes in personalized legal solutions,
                  including civil and commercial litigation, debt recovery, land
                  and environment disputes, personal injury, employment
                  disputes, and family law. We guide clients through dispute
                  resolution methods such as litigation, negotiation,
                  conciliation, mediation, and arbitration, addressing a wide
                  spectrum of legal issues.
                </p>
              </div>
              <div className="flex mt-6 justify-center ">
                <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
              </div>
            </div>
            {/* Tax Commercial */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-teal-100">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-5 flex-shrink-0">
                <BiSolidBriefcaseAlt2 size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  TAX, COMMERCIAL & CORPORATE SERVICES
                </h2>
                <p className="leading-relaxed text-base">
                  Our experienced team offers comprehensive tax, commercial, and
                  corporate services for seamless business operations. We
                  optimize structures in compliance with laws, provide counsel
                  for complex transactions, and specialize in incorporating
                  legal entities. We offer tailored solutions, handle legal
                  issues, and register intellectual property rights with a focus
                  on business acumen and legal compliance.
                </p>
              </div>
              <div className="flex mt-6 justify-center ">
                <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
              </div>
            </div>
            {/* Family Law */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-teal-100">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-5 flex-shrink-0">
                <BiSolidBank size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  FAMILY LAW, TRUSTS & ESTATE
                </h2>
                <p className="leading-relaxed text-base">
                  AG Legal's team of professionals is dedicated to safeguarding
                  your interests and those of your loved ones with
                  confidentiality and expertise. We specialize in family law in
                  Kenya, covering child custody, adoption, divorce, probate, and
                  matrimonial property disputes. Our services include estate
                  planning, wills, trusts, and more to protect your family's
                  legacy. We guide families through separation, divorce, and
                  child custody matters, working collaboratively with relevant
                  authorities and stakeholders.
                </p>
              </div>
              <div className="flex mt-6 justify-center ">
                <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
              </div>
            </div>
            {/* Emerging Areas */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-teal-100">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-5 flex-shrink-0">
                <SiHandshake size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  EMERGING AREAS
                </h2>
                <p className="leading-relaxed text-base">
                  At AG Legal, we understand that the operating environment is
                  constantly changing. We stay and remain ahead so that we can
                  anticipate legal hurdles and guide you through these
                  seamlessly. From cybersecurity law, data privacy and
                  protection, fintech, renewable energy and natural resources
                  among others; we have it all covered. We provide legal alerts
                  and information notes to help you understand their impact for
                  you and/or your business so that you stay ahead of the
                  developments in real-time.
                </p>
              </div>
              <div className="flex mt-6 justify-center ">
                <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
