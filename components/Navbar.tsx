import Link from "next/link";
import Image from "next/image";
import styles from "app/nav.module.css";

const Navbar = () => {
  return (
    <header className="w-full absolute inset-x-0 top-0 z-50 bg-custom">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Andego Gachagua"
          ></Image>
        </Link>
        <div className={styles.andego}>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Practice Areas</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className={styles.contact_info}>
          <h5>Call Us</h5>
          <h6 className={styles.contact_number}>+254 728 547650</h6>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
