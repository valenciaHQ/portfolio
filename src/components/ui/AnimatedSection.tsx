"use client";

import { motion } from "motion/react";
import { fadeSlideUp, staggerContainerScroll } from "@/lib/animations";

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGrid({ children, className }: AnimatedProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainerScroll}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className }: AnimatedProps) {
  return (
    <motion.div
      className={className}
      variants={fadeSlideUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
