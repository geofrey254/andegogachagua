import Head from "next/head";
import React from "react";
import Image from "next/image";

const Maintenance = () => {
  return (
    <html lang="en">
      <body className="body">
        <div className="text-center p-32">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Andego Gachagua"
              className=""
            ></Image>
          </div>
          <h1 className="text-white font-extrabold heading">
            This Site is Under Maintenance
          </h1>
        </div>
      </body>
    </html>
  );
};

export default Maintenance;
