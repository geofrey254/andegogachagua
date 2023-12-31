import styles from "app/cards.module.css";
import Link from "next/link";
import { BiHome, BiSearch, BiUser } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import { FaAward } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="md:flex items-center justify-center text-center p-0">
      <div className={["p-12", styles.cards_hero_2].join(" ")}>
        <div className="card-icon flex justify-center p-8">
          <IoNavigate size={52} color="white" />
        </div>
        <h2 className={["font-bold text-xl mb-2 color-text"].join(" ")}>
          Navigating the Legal Landscape
        </h2>
        <p className="text-white drop-shadow-2xl">
          We help you navigate the complexities of the legal world with clarity
          and confidence, ensuring your rights and interests are protected.
        </p>
      </div>
      <div className={["p-12", styles.cards_hero].join(" ")}>
        <div className="card-icon flex justify-center p-8">
          <FaAward size={52} color="white" />
        </div>
        <h2 className={["font-bold text-xl mb-2", styles.cards_h2].join(" ")}>
          Excellence in Advocacy
        </h2>
        <p className="color-andego drop-shadow-2xl">
          Experience the pinnacle of legal representation with our team of
          skilled attorneys who deliver unwavering dedication and excellence in
          advocacy.
        </p>
      </div>
    </div>
  );
};

export default Cards;
