import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";

const About = () => {
  return (
    <div className="p-6 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="about-home col-span-12 text-center bg-svg p-6 md:p-12 rounded-2xl shadow-lg">
        <h2 className="mt-4 md:mt-8 text-3xl md:text-5xl font-bold text-gray-800 about_welcome leading-tight">
          <span className="block text-xl md:text-2xl text-gray-600">
            Welcome to
          </span>
          <span className="block text-2xl md:text-4xl font-extrabold color-text mt-2">
            Andego Gachagua Advocates LLP
          </span>
        </h2>
        <p className="mt-6 md:mt-10 text-gray-600 text-base md:text-base xl:text-lg leading-relaxed">
          At our core, we adhere steadfastly to the principles of professional
          integrity, trust, and commercial awareness in all facets of our work.
          We are dedicated to delivering exemplary service by harnessing our
          expertise and committing our utmost efforts to each task at hand. Our
          commitment extends beyond mere legal counsel; it encompasses a
          holistic approach aimed at safeguarding the best interests of our
          clients. <br />
          <br />
          We recognize the intricate interplay between legal matters and the
          broader scope of personal and business affairs. Therefore, we
          prioritize efficiency and timeliness without compromising the quality
          of our services. We understand that our clients' lives are
          multifaceted, and our aim is to seamlessly integrate our legal
          expertise into their broader objectives. By doing so, we not only
          offer sound legal advice but also facilitate the smooth progression of
          our clients' endeavors.
        </p>
      </div>
    </div>
  );
};

export default About;
