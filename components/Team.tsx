import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import { PEOPLE } from "@/constants";

const Team = () => {
  return (
    <div>
      <div className="py-24 sm:py-32 gap-2">
        <div className="mx-auto text-center">
          <div className="w-full px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Our Team"
                className="flex items-center flex-wrap md:justify-around justify-around p-2"
              >
                {PEOPLE.map((person) => (
                  <div
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white shadow-orange-300">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-38">
                          <img
                            src={person.imageUrl}
                            alt={person.name}
                            role="img"
                            className="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">
                          {person.name}
                        </h1>
                        <p className="text-gray-800 text-sm text-center">
                          {person.role}
                        </p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
