"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { fadeSlideUp, staggerContainer } from "@/lib/animations";

const social = {
  github: "https://github.com/valenciaHQ",
  linkedln: "https://www.linkedin.com/in/valenciaalejandro/",
  twitter: "https://twitter.com/_valenciaHQ",
  email: "alejandro.valencia.dev@gmail.com",
};

const mailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=alejandro.valencia.dev@gmail.com";

export function AnimatedHero() {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="space-y-2"
        variants={fadeSlideUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Hello! I&apos;m Alejandro Valencia
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Full-stack Software Engineer with 10+ years of experience building
          scalable web applications. I&apos;ve specialized in Frontend
          development with React and TypeScript, delivering MVPs and full
          platforms for startups and tech-driven teams.
          <br /> Strong focus on clean architecture, product thinking, and
          cross-functional collaboration.
        </p>
      </motion.div>

      <motion.div
        className="flex align-center justify-center mt-4"
        variants={fadeSlideUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href={social.github}
          target="_blank"
        >
          <GitHubLogoIcon />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
          href={social.linkedln}
          target="_blank"
        >
          <LinkedInLogoIcon />
          <span className="sr-only">Linkedln</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href={social.twitter}
          target="_blank"
        >
          <TwitterLogoIcon />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href={mailLink}
          target="_blank"
        >
          <EnvelopeClosedIcon />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>

      <motion.div
        className="space-x-4"
        variants={fadeSlideUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link href={mailLink}>
          <Button>Reach me!</Button>
        </Link>
        <a
          download="Alejandro_Valencia_Resume.pdf"
          className="text-blue-500 hover:underline"
          href="/files/alejandrovalencia.pdf"
        >
          Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
