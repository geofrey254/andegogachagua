import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-20 mx-auto sm:max-w-xl md:max-w-full bg-[#f0f1f0]">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Andego Gachagua"
              className="logo"
            ></Image>
            <span className="ml-2 md:text-3xl text-base font-bold tracking-wide uppercase color-text">
              Andego Gachagua Advocates LLP
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-base md:text-lg text-gray-600">
              We firmly believe in doing our work well, guided by a keen sense
              of professional integrity, trust and commercial awareness.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide color-text">
            Contacts
          </p>
          <div className="flex gap-6">
            <p className="mr-1 color-text">Phone:</p>
            <Link
              href="tel:+254 759 803001"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 color-andego hover:no-underline"
            >
              +254 759 803001
            </Link>
          </div>
          <div className="flex gap-6">
            <p className="mr-1 color-text">Phone:</p>
            <Link
              href="tel:+254 759 803001"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 color-andego hover:no-underline"
            >
              +254 704 208484
            </Link>
          </div>
          <div className="flex gap-6">
            <p className="mr-1 color-text">Email:</p>
            <Link
              href="mailto:info@andegogachagua.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 color-andego hover:no-underline"
            >
              info@andegogachagua.com
            </Link>
          </div>
          <div className="flex gap-6">
            <p className="mr-1 color-text">Address:</p>
            <Link
              href="https://www.google.com/maps/place/Madonna+House/@-1.265306,36.8046322,20z/data=!4m6!3m5!1s0x182f173fc261c85d:0xc5db81b7b61f20ae!8m2!3d-1.265306!4d36.8049541!16s%2Fg%2F1yg4v8_03?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 color-andego hover:no-underline"
            >
              Madonna House, 3rd Floor, Suite 314 and 315 Westlands Rd,
              Westlands
            </Link>
          </div>
          <div className="flex gap-6">
            <p className="mr-1 color-text">Address:</p>
            <Link
              href="https://www.google.com/maps/@-0.1091283,34.753468,3a,75y,261.9h,90t/data=!3m10!1e1!3m8!1stDI3KJU8_gVT9-pDNdbo9Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtDI3KJU8_gVT9-pDNdbo9Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D281.58456%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!9m2!1b1!2i36?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 color-andego hover:no-underline"
            >
              Adala Otuko Road, Behind St.Joseph's Catholic Church,Milimani,
              Kisumu
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide color-text">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              href="/"
              className="transition-colors duration-300 color-text hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="transition-colors duration-300 color-text hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="transition-colors duration-300 color-text hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm">
            Connect with us on social media to stay updated on the latest legal
            news, insights, and our firm's activities. Follow us on our social
            platforms for valuable legal content and updates
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Andego Gachagua Advocates LLP
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/practice_areas"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Practice Areas
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
