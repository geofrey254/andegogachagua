"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import { PEOPLE } from "@/constants";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div>
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PEOPLE.map((person) => (
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row shadow-lg shadow-red-200">
              <div className="w-full md:w-2/5 h-50">
                <img
                  className="object-center object-cover w-full h-full"
                  src=z
                  alt={person.name}
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-2xl text-white font-extrabold">
                  {person.name}
                </p>
                <p className="text-base text-white font-bold">{person.role}</p>
                <p className="text-xs leading-relaxed text-white font-normal">
                  {person.description}
                </p>
              </div>
              <Link className="btn-info" href={`/team/${person.id}`}>
                See more
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      {/* Design 2 */}
      <motion.div
        animate={{ y: 10, x: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {" "}
        <section className="bg-svg">
          <div className="py-2 px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="grid gap-2 lg:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {PEOPLE.map((person) => (
                <div className="text-center text-gray-500 ">
                  <Image
                    className="mx-auto mb-4 w-36 h-34 rounded-full shadow-lg shadow-orange-400"
                    src={person.imageUrl}
                    alt={person.name}
                    width={500}
                    height={300}
                    loading="eager"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <Link
                      className="color-text teamName hover:no-underline hover:text-black"
                      href={`/team/${person.slug}`}
                    >
                      {person.name}
                    </Link>
                  </h3>
                  <p className="f font-medium">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Team;
