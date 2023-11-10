import React from "react";
import styles from "app/appointment.module.css";

const Appointment = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-full bg-white p-4">
        <div className="container mx-auto my-20 px-4 lg:px-0">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1
                className={[
                  "font-bold uppercase md:text-5xl",
                  styles.book_title,
                ].join(" ")}
              >
                Book an Appointment
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-orange-300 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
              >
                Book
              </button>
            </div>
          </div>

          <div
            className={[
              "w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto rounded-2xl",
              styles.appoint_box,
            ].join(" ")}
          >
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4 text-white">
                Drop in our office
              </h1>
              <p className="text-white">
                We firmly believe in doing our work well, guided by a keen sense
                of professional integrity, trust and commercial awareness.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl color-andego">Main Office</h2>
                  <p className=" text-white">
                    Madonna House, 3rd Floor, Suite 315 Westlands Rd, Westlands
                  </p>
                </div>
              </div>

              <div className="flex my-4 ">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl color-andego">Call Us</h2>
                  <p className="text-white">Tel: +254 759 803001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
