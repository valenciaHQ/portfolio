import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Laptop, Smartphone, Code2 } from "lucide-react";
import { Metadata } from "next";
import projects from "@/projects.json";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const social = {
  github: "https://github.com/valenciaHQ",
  linkedln: "https://www.linkedin.com/in/valenciaalejandro/",
  twitter: "https://twitter.com/_valenciaHQ",
  email: "alejandro.d.valencia@gmail.com",
};

export const metadata: Metadata = {
  title: "Alejandro Valencia | Software engineer",
  description:
    "I'm a freelance software engineer, and i can help your software dreams to come true 🚀",
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold">Alejandro Valencia</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hello! I&apos;m Alejandro Valencia
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting beautiful, responsive, and user-friendly websites.
                  Let&apos;s bring your digital vision to life.
                </p>
              </div>
              <div className="flex align-center justify-center mt-4 ">
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
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                    "alejandro.valencia.dev@gmail.com"
                  }
                  target="_blank"
                >
                  <EnvelopeClosedIcon />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <div className="space-x-4">
                <Link
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                    "alejandro.valencia.dev@gmail.com"
                  }
                >
                  <Button>Reach me!</Button>
                </Link>
                <Link
                  className="text-blue-500 hover:underline"
                  href={`files/alejandrovalencia.pdf`}
                >
                  Get my career
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 text-black dark:text-lime-300"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Laptop className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold text-center">Web Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Creating stunning, user-friendly designs that captivate your
                  audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code2 className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold text-center">
                  Web Development
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Building robust, scalable web applications using cutting-edge
                  technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Smartphone className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold text-center">
                  Responsive Design
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ensuring your website looks great on all devices, from mobile
                  to desktop.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="flex justify-center w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Projects
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {projects.map(({ url, name }) => (
                <div
                  key={name}
                  className="flex group relative justify-center overflow-hidden"
                >
                  <Image
                    src={`/img/${name}.png`}
                    alt={`Project ${name}`}
                    className="object-contain transition-transform group-hover:scale-110 rounded-lg"
                    width={200}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:opacity-100 flex items-center justify-center opacity-0">
                    <Link href={url} target="_blank">
                      <Button variant="secondary">View Project</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}