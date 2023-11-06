import React from "react";
import styles from "app/nav.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={["relative isolate px-6 pt-14 md:px-8", styles.hero].join(" ")}
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/698] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#f52121] to-[#5cc1ec] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-red-500 hover:ring-white">
            We do not offer excuses or justifications. We simply deliver.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Andego Gachagua &{" "}
            <span className="sm:text-6xl text-red-500">
              Associates Advocates
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            AG Legal provides comprehensive legal solutions, prioritizing client
            understanding, protection, and collaboration for exceptional results
            with integrity and professionalism.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-red-500 hover:text-white shadow-sm hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-white hover:no-underline hover:text-red-500"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
