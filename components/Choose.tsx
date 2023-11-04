import React from "react";
import styles from "app/about.module.css";
import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { SiHandshake } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";

const Choose = () => {
  return (
    <div className={["", styles.choose_us].join(" ")}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Why Choose Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            We firmly believe in doing our work well, guided by a keen sense of
            professional integrity, trust and commercial awareness. This means
            that we apply our best efforts to provide excellent advice, to
            protect our clients' interests and to do that in a timely manner
            that does not affect other facets of our clients' personal/business
            affairs. After all, we understand that the legal aspect is but one
            of several other aspects you need to consider.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg justify-center text-center">
              <BiSolidBriefcaseAlt2
                size={72}
                className="text-red-500  w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-white">
                400+
              </h2>
              <p className="leading-relaxed">Cases Closed</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <GoLaw
                size={72}
                className="text-red-500  w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-white">
                10+
              </h2>
              <p className="leading-relaxed">Expert Attorneys</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaHandshake
                size={72}
                className="text-red-500  w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-white">
                500+
              </h2>
              <p className="leading-relaxed">Trusted Clients</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaAward
                size={72}
                className="text-red-500  w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-white">
                255+
              </h2>
              <p className="leading-relaxed">Successful Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
