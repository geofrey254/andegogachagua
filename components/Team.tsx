import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";
import { PEOPLE } from "@/constants";

const Team = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PEOPLE.map((person) => (
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row shadow-lg shadow-red-200">
              <div className="w-full md:w-2/5 h-50">
                <img
                  className="object-center object-cover w-full h-full"
                  src={person.imageUrl}
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
