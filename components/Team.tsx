import Link from "next/link";
import Image from "next/image";
import styles from "app/about.module.css";

const Team = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black-100">
              Our Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Kevin Andego
                  </a>
                </h3>
                <span className="text-white">Managing Director</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Patrick Kimani
                  </a>
                </h3>
                <span className="text-white">Partner</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Kevin Lugano
                  </a>
                </h3>
                <span className="text-white">Associate</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Paul Tirop
                  </a>
                </h3>
                <span className="text-white">Associate</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Gloria Mwanzia
                  </a>
                </h3>
                <span className="text-white">Office Administrator</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Michael Tendwa
                  </a>
                </h3>
                <span className="text-white">Associate</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Ben Opalo
                  </a>
                </h3>
                <span className="text-white">
                  Consultant Business Development & Strategy
                </span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Daniel Kobimbo
                  </a>
                </h3>
                <span className="text-white">Consultant</span>
              </div>
            </div>
            <div className="items-center bg-cont rounded-lg shadow-lg sm:flex">
              <a href="#"></a>
              <div className="p-5">
                <h3 className="text-3xl font-black tracking-tight">
                  <a
                    href="#"
                    className="text-white hover:no-underline hover:text-white"
                  >
                    Leah Wanjohi
                  </a>
                </h3>
                <span className="text-white">Intern</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
