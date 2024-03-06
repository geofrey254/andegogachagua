import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import "uikit/dist/css/uikit.min.css";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";

const About = () => {
  return (
    <div className="p-20 md:grid md:grid-cols-12 ">
      <div className="about-home col-span-12 text-center">
        <h2
          className={[
            "md:mt-5 mt-2 text-3xl md:text-4xl text-gray-800",
            styles.about_welcome,
          ].join(" ")}
        >
          <span className="color-text text-2xl">Welcome to</span>
          <br />
          <span className="color-text font-extrabold">
            Andego Gachagua Advocates LLP
          </span>
        </h2>
        <p className="md:mt-12 mt-8 text-gray-500">
          At our core, we adhere steadfastly to the principles of professional
          integrity, trust, and commercial awareness in all facets of our work.
          We are dedicated to delivering exemplary service by harnessing our
          expertise and committing our utmost efforts to each task at hand. Our
          commitment extends beyond mere legal counsel; it encompasses a
          holistic approach aimed at safeguarding the best interests of our
          clients. <br /> We recognize the intricate interplay between legal
          matters and the broader scope of personal and business affairs.
          Therefore, we prioritize efficiency and timeliness without
          compromising the quality of our services. We understand that our
          clients' lives are multifaceted, and our aim is to seamlessly
          integrate our legal expertise into their broader objectives. By doing
          so, we not only offer sound legal advice but also facilitate the
          smooth progression of our clients' endeavors.
        </p>
      </div>
    </div>
  );
};

export default About;
