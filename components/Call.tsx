import React from "react";
import styles from "app/about.module.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

const Call = () => {
  return (
    <div
      className={["text-center mx-auto md:p-36 p-12", styles.call].join(" ")}
    >
      <h2 className="text-white font-bold md:text-4xl mb-8 text-4xl">
        Ready to secure your legal rights and find the best solution for your
        case?
      </h2>
      <p className=" text-white md:text-lg mb-8">
        Contact us today, and let our experienced team of attorneys guide you
        towards a brighter legal future. Your peace of mind is just a call or
        click away.
      </p>
      <Link href="/contact" className="hover:no-underline">
        <button className="flex mx-auto select-none items-center gap-3 rounded-lg bg-orange-300 py-3 px-6 text-center align-middle text-s font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:no-underline">
          CONTACT US NOW
          <BiSolidPhoneCall size={22} />
        </button>
      </Link>
    </div>
  );
};

export default Call;
