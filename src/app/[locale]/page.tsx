"use client";
/** @format */

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Globe,
  Github,
  Award,
  GraduationCap,
  Code,
  Languages,
  Star,
  FileText,
} from "lucide-react";
import { EnvelopeClosedIcon, CalendarIcon } from "@radix-ui/react-icons";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeSlideUp } from "@/lib/animations";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { HeroBlobs } from "@/components/HeroBlobs";

const techStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Remix",
  "Node.js",
  "Express.js",
  "NestJS",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Redux Toolkit",
  "Zustand",
  "Tailwind CSS",
  "AWS",
  "Vercel",
  "Cypress",
  "Jest",
  "Claude Code",
];

type Job = {
  title: string;
  company: string;
  period: string;
  description: string;
  stack: string;
};

export default function Portfolio() {
  const t = useTranslations();
  const skills = t.raw("skills.items") as string[];
  const workExperience = t.raw("experience.jobs") as Job[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Alejandro Valencia
            </h1>
            <div className="flex gap-4 items-center">
              <LocaleSwitcher />
              <a href="mailto:alejandro.d.valencia@gmail.com">
                <Button
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
                  {t("nav.contact")}
                </Button>
              </a>
              <a
                href="https://github.com/valenciaHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  <Github className="w-4 h-4 mr-2" />
                  {t("nav.github")}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <HeroBlobs />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="mb-6"
              variants={fadeSlideUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Alejandro Valencia
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                {t("hero.role")}
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                {t("hero.bio")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              variants={fadeSlideUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{t("hero.location")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <EnvelopeClosedIcon className="w-4 h-4" />
                <span>alejandro.d.valencia@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>valenciahq.com</span>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center gap-4"
              variants={fadeSlideUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <a href="mailto:alejandro.d.valencia@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
                  {t("hero.getInTouch")}
                </Button>
              </a>
              <motion.a
                href="/files/alejandrovalencia.pdf"
                download="alejandro-valencia-resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="flex items-center"
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FileText className="w-4 h-4" />
                </motion.span>
                {t("hero.downloadResume")}
                <motion.span
                  className="text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                  animate={{ y: [0, 2, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  }}
                >
                  PDF
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("skills.sectionTitle")}
          </h2>
          <AnimatedGrid className="grid md:grid-cols-2 gap-8">
            <AnimatedItem>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    {t("skills.professionalTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>

            <AnimatedItem>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-green-500" />
                    {t("skills.languagesTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{t("skills.spanish")}</span>
                      <Badge className="bg-green-100 text-green-800">
                        {t("skills.spanishLevel")}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{t("skills.english")}</span>
                      <Badge className="bg-blue-100 text-blue-800">
                        {t("skills.englishLevel")}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          </AnimatedGrid>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("techStack.sectionTitle")}
          </h2>
          <AnimatedGrid className="grid grid-cols-1">
            <AnimatedItem>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-500" />
                    {t("techStack.cardTitle")}
                  </CardTitle>
                  <CardDescription>
                    {t("techStack.cardDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-white border-gray-300 text-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          </AnimatedGrid>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("experience.sectionTitle")}
          </h2>
          <AnimatedGrid className="space-y-6">
            {workExperience.map((job, index) => (
              <AnimatedItem key={index}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-600">
                          {job.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        {job.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {job.stack.split(", ").map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("education.sectionTitle")}
          </h2>
          <AnimatedGrid className="grid md:grid-cols-2 gap-6">
            <AnimatedItem>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    {t("education.educationTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {t("education.degreeTitle")}
                    </h3>
                    <p className="text-gray-600">{t("education.degreeSchool")}</p>
                    <p className="text-sm text-gray-500">
                      {t("education.degreePeriod")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>

            <AnimatedItem>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    {t("education.certificationsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{t("education.cert1Title")}</h3>
                      <p className="text-sm text-gray-600">
                        {t("education.cert1Provider")}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold">{t("education.cert2Title")}</h3>
                      <p className="text-sm text-gray-600">
                        {t("education.cert2Provider")}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <a
                        href={t("education.cert3Url")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <h3 className="font-semibold">{t("education.cert3Title")}</h3>
                      </a>
                      <p className="text-sm text-gray-600">
                        {t("education.cert3Provider")}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <a
                        href={t("education.cert4Url")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <h3 className="font-semibold">{t("education.cert4Title")}</h3>
                      </a>
                      <p className="text-sm text-gray-600">
                        {t("education.cert4Provider")}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {t("education.claudeCodeNote")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          </AnimatedGrid>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("contact.sectionTitle")}</h2>
          <p className="text-xl text-gray-300 mb-8">{t("contact.body")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:alejandro.d.valencia@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              >
                <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
                alejandro.d.valencia@gmail.com
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Globe className="w-4 h-4 mr-2" />
              valenciahq.com
            </Button>
            <a
              href="https://github.com/valenciaHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Github className="w-4 h-4 mr-2" />
                {t("contact.githubLabel")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>{t("footer.copy")}</p>
        </div>
      </footer>
    </div>
  );
}
