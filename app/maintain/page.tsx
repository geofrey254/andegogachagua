import Head from "next/head";
import React from "react";
import styles from "app/main.module.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={["", styles.body].join(" ")}>
        <div className={["text-center p-32"].join(" ")}>
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Andego Gachagua"
              className=""
            ></Image>
          </div>
          <h1
            className={["text-white font-extrabold", styles.heading].join(" ")}
          >
            This Site is Under Maintenance
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}
