import React from "react";
import styles from "app/about.module.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

const Call = () => {
  return (
    <div
      className={["text-center mx-auto md:p-36 p-12", styles.call].join(" ")}
    >
      <h2 className="text-white font-bold md:text-4xl">
        Ready to secure your legal rights and find the best solution for your
        case?
      </h2>
      <p className=" text-white md:text-lg">
        Contact us today, and let our experienced team of attorneys guide you
        towards a brighter legal future. Your peace of mind is just a call or
        click away.
      </p>
      <Link href="/about">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold md:py-2 md:px-8 py-4 px-6 rounded md:flex items-center mx-auto">
          CONTACT US NOW
          <span>
            <BiSolidPhoneCall size={22} color="white" className="md:mr-3" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Call;
