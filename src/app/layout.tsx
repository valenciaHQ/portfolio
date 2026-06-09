import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = "https://www.valenciahq.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alejandro Valencia | Product Engineer & Freelance Software Developer",
  description:
    "Freelance Product Engineer with 10+ years building scalable web apps. Specialized in React, Next.js, TypeScript. Delivering MVPs and full platforms for startups.",
  keywords: [
    "freelance software engineer",
    "product engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "startup MVP",
    "web developer Buenos Aires",
    "full-stack developer",
    "Alejandro Valencia",
    "valenciahq",
  ],
  authors: [{ name: "Alejandro Valencia", url: SITE_URL }],
  creator: "Alejandro Valencia",
  publisher: "Alejandro Valencia",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Alejandro Valencia",
    title: "Alejandro Valencia | Product Engineer & Freelance Software Developer",
    description:
      "Freelance Product Engineer with 10+ years building scalable web apps. React, Next.js, TypeScript. MVPs and full platforms for startups.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alejandro Valencia — Product Engineer" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_valenciaHQ",
    creator: "@_valenciaHQ",
    title: "Alejandro Valencia | Product Engineer & Freelance Software Developer",
    description:
      "Freelance Product Engineer with 10+ years building scalable web apps. React, Next.js, TypeScript.",
    images: ["/opengraph-image"],
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alejandro Valencia",
    url: SITE_URL,
    jobTitle: "Product Engineer",
    description:
      "Freelance Product Engineer with 10+ years building scalable web applications using React, Next.js, and TypeScript.",
    email: "alejandro.d.valencia@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: [
      "https://github.com/valenciaHQ",
      "https://www.linkedin.com/in/valenciaalejandro/",
      "https://twitter.com/_valenciaHQ",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full-Stack Development",
      "MVP Development",
      "Software Architecture",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
