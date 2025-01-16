"use client";
import React, { useState } from "react";
import { MdOutlineMenuBook, MdOutlineSupportAgent } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaCertificate, FaMoneyCheck, FaSchool } from "react-icons/fa6";
import { TbBooks, TbListTree } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiTalk } from "react-icons/gi";
import { useRouter } from "next/navigation";

import { PiStudentFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// imports

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 bg-white z-50 h-[2vh] md:h-[18vh] xl:h-[2vh] w-full flex justify-center items-center py-12 px-4 md:px-12">
      <div className="container flex justify-between items-center">
        {/* Branding Section */}
        <div>
          <Link href="/">
            <Image
              src="/logo_3.png"
              width={150}
              height={150}
              alt="Andego Gachagua Logo"
              className="w-2/4 md:w-full xl:w-2/4"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-8 2xl:gap-12 items-center text-black font-bold text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/practice_areas">Practice Areas</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            menuOpen
              ? "collapse fixed w-0 h-[100%] left-4 top-[2000px] transition-all duration-700 ease-in-out md:hidden"
              : "fixed bg-white w-[100%] left-0 top-20 h-[90%] z-10 transition-all duration-700 ease-linear shadow-xl shadow-[#8a6445] md:hidden py-4"
          }
        >
          <div className="flex flex-col gap-6">
            <ul className="flex mt-6 px-4 justify-between">
              <li>
                <Link
                  href="/appointment"
                  onClick={handleNav}
                  className="bg-black text-white border-2 border-[#f8d6b6] px-8 py-2 rounded-2xl"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
            <hr />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col text-lg gap-y-14 mt-8 p-4 text-black font-semibold">
            <li>
              <Link
                href="/"
                className="bg-black hover:bg-gray-500 rounded block text-white py-2 px-3"
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:bg-gray-500 rounded block hover:text-white py-2 px-3"
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:bg-gray-500 rounded block hover:text-white py-2 px-3"
                onClick={handleNav}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/practice_areas"
                className="hover:bg-gray-500 rounded block hover:text-white py-2 px-3"
                onClick={handleNav}
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:bg-gray-500 rounded block hover:text-white py-2 px-3"
                onClick={handleNav}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side of the Navbar */}
        <div className="flex">
          <div className="hidden md:flex gap-6 justify-center items-center font-semibold text-sm">
            <>
              <Link
                href="/appointment"
                className="bg-[#000000] hover:bg-[#facba0] rounded-2xl px-4 py-2 text-white"
              >
                Book Appointment
              </Link>
            </>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="mobile-menu md:hidden" onClick={handleNav}>
            <BsFillMenuButtonWideFill
              size={30}
              className={
                menuOpen
                  ? "text-[#6d4019] cursor-pointer transition-all duration-700 ease-in-out"
                  : "hidden transition-all duration-700 ease-in-out"
              }
            />
            <IoClose
              size={30}
              className={
                !menuOpen
                  ? "text-[#6d4019] cursor-pointer transition-all duration-700 ease-in-out"
                  : "hidden transition-all duration-700 ease-in-out"
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
