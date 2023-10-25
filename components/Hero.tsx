import React from "react";
import styles from "app/nav.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={["", styles.hero].join(" ")}>
      <div className="flex-1 pt-36 padding-x lg:grid lg:grid-cols-4">
        <h2 className="font-black text-white lg:col-span-4 mb-2 text-xl">
          <span className={styles.andego_span}>
            Andego Gachagua & Associate Advocates
          </span>
        </h2>
        <h1 className="text-6xl font-black text-white lg:col-span-2">
          We Simply Deliver
        </h1>
        <p className="lg:col-span-3 text-white mt-4 p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          doloribus tempore corporis accusamus voluptatum repellendus dolorum
          numquam minus tempora repudiandae?
        </p>
      </div>
    </div>
  );
};

export default Hero;
