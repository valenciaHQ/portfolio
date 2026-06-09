"use client";

import { motion } from 'motion/react';

export function HeroBlobs() {
  return (
    <>
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-violet-300 opacity-30 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-sky-300 opacity-25 blur-3xl pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-emerald-300 opacity-20 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  );
}
