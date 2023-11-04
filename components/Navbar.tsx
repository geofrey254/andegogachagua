import Link from "next/link";
import Image from "next/image";
import styles from "app/nav.module.css";

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
                  className="hover:no-underline text-white font-bold hover:text-red-500"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:no-underline text-white font-bold hover:text-red-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/practice_areas"
                  className="hover:no-underline text-white font-bold hover:text-red-500"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:no-underline text-white font-bold hover:text-red-500"
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
            className="btn btn-ghost normal-case text-xl hover:no-underline hover:text-red-500"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Andego Gachagua"
              className="logo"
            ></Image>
            Andego Gachagua
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
