/** @format */

"use client";

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
} from "lucide-react";
import { EnvelopeClosedIcon, CalendarIcon } from "@radix-ui/react-icons";

export default function Portfolio() {
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
  ];

  const skills = [
    "Full-Stack Web Development",
    "Rapid Prototyping & MVP Delivery",
    "Product Thinking & User-Centered Design",
    "Codebase Scalability & Maintainability",
    "Cross-functional Collaboration",
    "Agile Methodologies",
  ];

  const workExperience = [
    {
      title: "Founding Engineer",
      company: "Bondly",
      period: "09/24 - Present",
      description:
        "Owned full lifecycle. Launched cookie consent, rebuilt scheduling tool, improved SEO and tracking.",
      stack: "Next.js, Remix, NestJS, Supabase, TypeScript, AI tools",
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      period: "2023 - Present",
      description:
        "Building high-performance web applications and MVPs. Collaborated with CTOs and CEOs on startup initiatives.",
      stack: "Next.js, React, TypeScript, Tailwind CSS, AWS Serverless",
    },
    {
      title: "Senior Full Stack Engineer",
      company: "StackZone",
      period: "03/22 - 08/23",
      description:
        "Improved WebApp via refactoring, mentoring, and TS best practices. Built cost modules and Serverless APIs.",
      stack: "React, TypeScript, AWS, Redux-Saga, Cypress, PostgreSQL",
    },
    {
      title: "Lead Frontend Developer",
      company: "Commit Studio",
      period: "11/21 - 03/22",
      description:
        "Led feature development and team support. Delivered credit partner platform (PedidosYa) and e-commerce CLI.",
      stack: "Next.js, TypeScript, MySQL, Redux-Toolkit",
    },
    {
      title: "Sr Software Engineer",
      company: "Santander Tecnologia",
      period: "06/20 - 11/21",
      description:
        "Frontend lead for Checks team. Built microsites and BFF with NestJS. Led internal React training.",
      stack: "React, NestJS, TypeScript, Redux-Toolkit",
    },
    {
      title: "Software Engineer",
      company: "ParkAssist",
      period: "06/20 - 11/21",
      description:
        "Developed parking admin platform using AWS and React. Delivered performant client-side features.",
      stack: "React, TypeScript, Redux, AWS IAM, IoT, DynamoDB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Alejandro Valencia
            </h1>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Alejandro Valencia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Full-stack Software Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              10+ years of experience building scalable web applications.
              Specialized in Frontend development with React and TypeScript
              since 2017, delivering MVPs and full platforms for startups and
              tech-driven teams.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <EnvelopeClosedIcon className="w-4 h-4" />
              <span>alejandro.d.valencia@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4" />
              <span>valenciahq.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              onClick={() => {
                window.location.href = "mailto:someone@example.com";
              }}
            >
              <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Professional Skills
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-green-500" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Spanish</span>
                    <Badge className="bg-green-100 text-green-800">
                      Native
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <Badge className="bg-blue-100 text-blue-800">
                      B2/C1 Professional
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tech Stack
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-500" />
                Technologies & Tools
              </CardTitle>
              <CardDescription>
                Modern technologies I use to build scalable applications
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
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-semibold text-lg">
                    Superior Software Development Technician
                  </h3>
                  <p className="text-gray-600">ISTEA - Tertiary Degree</p>
                  <p className="text-sm text-gray-500">2014 - 2017</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Epic React</h3>
                    <p className="text-sm text-gray-600">
                      Kent C. Dodds (epicreact.dev)
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold">CSS-in-JS</h3>
                    <p className="text-sm text-gray-600">
                      Josh W. Comeau (css-for-js.dev)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&#39;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to build something amazing? I&#39;m always open to discussing
            new opportunities and interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                window.location.href = "mailto:someone@example.com";
              }}
            >
              <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
              alejandro.d.valencia@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Globe className="w-4 h-4 mr-2" />
              valenciahq.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                window.open("https://github.com/valenciaHQ", "_blank");
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            &copy; 2024 Alejandro Valencia. Full-stack Software Engineer based
            in Buenos Aires, Argentina.
          </p>
        </div>
      </footer>
    </div>
  );
}
