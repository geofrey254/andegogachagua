import React from "react";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const Features = () => {
  return (
    <div className={["bg bg-gray-100 p-12"].join(" ")}>
      <section className="">
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* CONVEYANCING, FINANCE & BANKING */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg shadow-orange-200">
            <BiSolidBank size={52} className="color-text" />
            <h3 className="my-3 text-2xl font-bold">
              CONVEYANCING, FINANCE & BANKING
            </h3>
            <div className="space-y-1">
              <p>
                Our team excels in property acquisition, development, tax
                planning, leasing, conveyancing (property transfer, leases,
                etc.), and banking services (securities assessment,
                documentation, and debt recovery). We ensure smooth financial
                transactions with expert guidance and business-oriented legal
                advice.
              </p>
            </div>
          </div>

          {/* DISPUTE RESOLUTION */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg shadow-orange-200">
            <SiHandshake size={52} className="color-text" />
            <h3 className="my-3 text-2xl font-bold">DISPUTE RESOLUTION</h3>
            <div className="space-y-1">
              <p>
                AG Legal specializes in personalized legal solutions, including
                civil and commercial litigation, debt recovery, land and
                environment disputes, personal injury, employment disputes, and
                family law. We guide clients through dispute resolution methods
                such as litigation, negotiation, conciliation, mediation, and
                arbitration, addressing a wide spectrum of legal issues.
              </p>
            </div>
          </div>

          {/* */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg shadow-orange-200">
            <BiSolidBriefcaseAlt2 size={52} className="color-text" />
            <h3 className="my-3 text-2xl font-bold">
              TAX, COMMERCIAL & CORPORATE SERVICES
            </h3>
            <div className="space-y-1">
              <p>
                Our experienced team offers comprehensive tax, commercial, and
                corporate services for seamless business operations. We optimize
                structures in compliance with laws, provide counsel for complex
                transactions, and specialize in incorporating legal entities. We
                offer tailored solutions, handle legal issues, and register
                intellectual property rights with a focus on business acumen and
                legal compliance.
              </p>
            </div>
          </div>

          {/* Family Law */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg shadow-orange-200">
            <MdFamilyRestroom size={52} className="color-text" />
            <h3 className="my-3 text-2xl font-bold">
              FAMILY LAW, TRUSTS & ESTATE
            </h3>
            <div className="space-y-1">
              <p>
                AG Legal's team of professionals is dedicated to safeguarding
                your interests and those of your loved ones with confidentiality
                and expertise. We specialize in family law in Kenya, covering
                child custody, adoption, divorce, probate, and matrimonial
                property disputes. Our services include estate planning, wills,
                trusts, and more to protect your family's legacy. We guide
                families through separation, divorce, and child custody matters,
                working collaboratively with relevant authorities and
                stakeholders.
              </p>
            </div>
          </div>

          {/* EMERGING AREAS */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg shadow-orange-200">
            <BiWorld size={52} className="color-text" />
            <h3 className="my-3 text-2xl font-bold">EMERGING AREAS</h3>
            <div className="space-y-1">
              <p>
                AG Legal's team of professionals is dedicated to safeguarding
                your interests and those of your loved ones with confidentiality
                and expertise. We specialize in family law in Kenya, covering
                child custody, adoption, divorce, probate, and matrimonial
                property disputes. Our services include estate planning, wills,
                trusts, and more to protect your family's legacy. We guide
                families through separation, divorce, and child custody matters,
                working collaboratively with relevant authorities and
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
