import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import "uikit/dist/css/uikit.min.css";

import { BiSolidBank, BiSolidBriefcaseAlt2, BiWorld } from "react-icons/bi";

const About = () => {
  return (
    <div className="flex-1 p-20 padding-x lg:grid lg:grid-cols-12 ">
      <div className="image md:col-span-5 col-span-12">
        <Image
          className="rounded-lg border-2 border-amber-500 shadow-lg shadow-amber-500/100"
          src="/attorney1.jpg"
          width={400}
          height={300}
          alt="Picture of the CEO"
        />
      </div>
      <div className="about-home md:col-span-7 col-span-full">
        <h4
          className={[
            "text-red-500 text-2xl md:text-lg md:mt-0 mt-10",
            styles.about_h_home,
          ].join(" ")}
        >
          About Us
        </h4>
        <h2
          className={["md:mt-5 mt-2 text-gray-800", styles.about_welcome].join(
            " "
          )}
        >
          Welcome to Andego Gachagua & Associates Advocates
        </h2>
        <p className="md:mt-12 mt-8 text-gray-500">
          We firmly believe in doing our work well, guided by a keen sense of
          professional integrity, trust and commercial awareness. This means
          that we apply our best efforts to provide excellent advice, to protect
          our clients' interests and to do that in a timely manner that does not
          affect other facets of our clients' personal/business affairs. After
          all, we understand that the legal aspect is but one of several other
          aspects you need to consider. We do not offer excuses or
          justifications. We simply deliver.
        </p>

        <h4
          className={[
            "md:mt-20 mt-10 text-red-500",
            styles.about_signature,
          ].join(" ")}
        >
          Patrick Njuguna Kimani
        </h4>
        <h5 className="mt-1 font-bold text-lg">Partner</h5>
      </div>
    </div>
  );
};

export default About;
