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
        <div className="relative " />
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
