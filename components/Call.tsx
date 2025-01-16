import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Call = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl md:px-6 px-6 py-12 md:py-32 xl:px-4">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#cb8647" />
                <stop offset={1} stopColor="#cb8547" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to secure your legal rights and find the best solution for
              your case?{" "}
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Contact us today, and let our experienced team of attorneys guide
              you towards a brighter legal future. Your peace of mind is just a
              call or click away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us Now
              </Link>
              <Link
                href="/about"
                className="text-sm/6 font-semibold text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src="/andego/group.jpg"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[20rem] md:w-[40rem] max-w-none rounded-2xl ring-1 ring-white"
              alt="Group Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
