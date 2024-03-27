"use client";
import React from "react";
import { getTeam } from "@/constants";
import styles from "app/about_us.module.css";
import { motion } from "framer-motion";
import { Footer } from "@/components";

const page = async ({ params }) => {
  const { teamId } = params;

  const post = await getTeam(teamId);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="grid gap-2 lg:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 bg-special section-padding-100-70">
          <div className="mx-auto">
            <img
              className="w-40 md:w-80 rounded-full shadow-lg shadow-orange-400"
              src={post && post.imageUrl}
              alt={post && post.name}
            />
          </div>
          <div className="p-2 md:p-4 mt-8 md:mt-0">
            <h1 className="font-bold prof-name color-text lg:text-6xl shadow-md shadow-slate-100">
              {post && post.name}
            </h1>
            <h2 className="font-medium prof-title text-white">
              {post && post.role}
            </h2>
            <p className="mt-8 text-slate-300 text-sm md:text-lg">
              {post && post.description}
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default page;
