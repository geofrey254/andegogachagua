import styles from "app/cards.module.css";
import Link from "next/link";
import { BiHome, BiSearch, BiUser } from "react-icons/bi";

const Cards = () => {
  return (
    <div className="flex justify-center">
      <div className={["p-4", styles.cards_hero].join(" ")}>
        <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
      </div>
      <div className={["p-4", styles.cards_hero_2].join(" ")}>
        <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
      </div>
      <div className={["p-4", styles.cards_hero].join(" ")}>
        <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
      </div>
    </div>
  );
};

export default Cards;
