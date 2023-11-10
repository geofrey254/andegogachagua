import Link from "next/link";
import Image from "next/image";
import styles from "app/nav.module.css";
import { FaAward, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={[
                "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 hover:no-underline",
                styles.navbg,
              ].join(" ")}
            >
              <li>
                <Link
                  href="/"
                  className="hover:no-underline text-white font-bold hover:color-andego"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:no-underline text-white font-bold hover:color-andego"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/practice_areas"
                  className="hover:no-underline text-white font-bold hover:color-andego"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:no-underline text-white font-bold hover:color-andego"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl hover:no-underline hover:color-andego"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Andego Gachagua"
              className="logo"
            ></Image>
            <span className="l hidden">Andego Gachagua</span>
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl hover:no-underline hover:color-andego"
          >
            <Image
              src="/whats.png"
              width={100}
              height={100}
              alt="Andego Gachagua"
              className="logo"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
