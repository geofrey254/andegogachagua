import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import "uikit/dist/css/uikit.min.css";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";

const About = () => {
  return (
    <div className="p-20 md:grid md:grid-cols-12 ">
      <div className="image md:col-span-5 lg:col-span-5 col-span-12">
        <Image
          className=""
          src="/law.png"
          width={400}
          height={400}
          alt="Picture of the CEO"
        />
      </div>
      <div className="about-home md:col-span-7 lg:col-span-7 col-span-12 md:ml-8">
        <h4
          className={[
            "color-andego text-2xl md:text-lg md:mt-0 mt-10",
            styles.about_h_home,
          ].join(" ")}
        >
          About Us
        </h4>
        <h2
          className={[
            "md:mt-5 mt-2 text-4xl md:text-4xl text-gray-800",
            styles.about_welcome,
          ].join(" ")}
        >
          Welcome to Andego Gachagua Advocates LLP
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
