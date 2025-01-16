import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero w-full max-w-full flex justify-center items-center">
      <Image
        src="/nairobi1.jpg"
        alt="Law firm office"
        fill={true}
        style={{ objectFit: "cover" }}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
      <div className="container z-20">
        <div className="mx-auto px-8 py-12 md:px-24 md:py-24 mt-12 md:mt-0 max-w-2xl">
          <div className="text-center px-2 md:px-0">
            <h1 className="font-bold tracking-tight text-white text-4xl md:text-6xl">
              Andego Gachagua Advocates LLP
            </h1>
            <p className="mt-6 text-base md:text-lg leading-8 text-gray-200">
              AG Advocates provides comprehensive legal solutions, prioritizing
              client understanding, protection, and collaboration for
              exceptional results with integrity and professionalism.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold color-andego hover:text-white shadow-sm hover:bg-orange-300 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:no-underline hover:color-andego"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
