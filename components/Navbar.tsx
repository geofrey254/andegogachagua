import Link from "next/link";
import Image from "next/image";
import styles from "app/nav.module.css";
import { FaAward, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="navbar z-30 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-cont dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {NAV_LINKS.map((link) => (
              <Link
                className="cursor-pointer text-sm transition-all pt-2 text-white font-semibold hover:no-underline hover:text-white"
                href={link.href}
                key={link.key}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <Link href="/" className="hover:no-underline">
          <Image
            src="/logo_3.png"
            width={150}
            height={150}
            alt="Andego Gachagua"
            className="logo object-contain hidden md:block"
          ></Image>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Andego Gachagua"
            className="logo object-contain md:hidden w-10"
          ></Image>
        </Link>{" "}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="lg:menu-horizontal hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              className="cursor-pointer text-sm transition-all pt-2 color-andego font-semibold hover:no-underline hover:text-red-300"
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/appointment"
          className="btn lg:btn-md btn-sm bg-black lg:shadow-lg text-white font-bold rounded-full hover:no-underline hover:text-black"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
