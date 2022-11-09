import React from "react";
import { FaReact, FaCode, FaRegSun, FaEthereum, FaDeezer, FaGamepad, FaBacon } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Alejandro Valencia",
  title: "Software Engineer",
  social: {
    github: "https://github.com/valenciaHQ",
    linkedln: "https://www.linkedin.com/in/valenciaalejandro/",
    twitter: "https://twitter.com/_valenciaHQ",
    email: "alejandro.d.valencia@gmail.com",
  },
  about: {
    title: "My Background",
    description: "I have worked in several companies and teams. This formed me as a versatile developer, highly focused in order. My technical expertise includes skills in React, state management, scss / css in js / Tailwind, backend languages and libs such as java/node, relational and non-relational databases."
  },
  skills: [
    {
      inputName: "Frontend",
      inputIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      inputName: "ReactJS",
      inputIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      inputName: "Backend",
      inputIcon: <FaRegSun className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  interests: [
    {
      inputName: 'Frontend ',
      inputIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />
    },
    {
      inputName: 'Blockchain',
      inputIcon: <FaEthereum className={BOOTSTRAP_FOR_SKILL_ICON} />
    },
    {
      inputName: 'Architecture',
      inputIcon: <FaDeezer className={BOOTSTRAP_FOR_SKILL_ICON} />
    },
    {
      inputName: 'Gaming',
      inputIcon: <FaGamepad className={BOOTSTRAP_FOR_SKILL_ICON} />
    },
    {
      inputName: 'Food',
      inputIcon: <FaBacon className={BOOTSTRAP_FOR_SKILL_ICON} />
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ]
};
export default data;
