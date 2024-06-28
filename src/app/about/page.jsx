"use client";

import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div></div>
    </motion.div>
  );
}
