import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import IndiaAdvantageBanner from "@/components/IndiaAdvantageBanner";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import IndustryBanner from "@/components/IndustryBanner";
import Tools from "@/components/Tools";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Website & Web Application Development",
  description:
    "Rolla is a software solutions company that builds beautiful, high-performance websites and web applications tailored to your business — so you stand out, engage users, and scale faster.",
  keywords: [
    "custom web development company",
    "software solutions company India",
    "web application development",
    "Java Spring Boot developer",
    "MERN stack developer",
    "React developer",
    "full stack web development",
    "SaaS development India",
    "startup software company",
    "enterprise web solutions",
  ],
  openGraph: {
    title: "Rolla | Custom Website & Web Application Development",
    description:
      "We design and build bespoke high-performance websites and web applications. First consultation is free.",
    type: "website",
    url: "https://rolla.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolla | Custom Website & Web Application Development",
    description:
      "We design and build bespoke high-performance websites and web applications. First consultation is free.",
  },
  alternates: {
    canonical: "https://rolla.dev",
  },
};

export default function Home() {
  return (
    <main className="w-full relative bg-rolla-bg">
      <Navigation />
      <Hero />
      <MarqueeBanner />
      <IndiaAdvantageBanner />
      <ProblemSolution />
      <Services />
      <Pricing />
      <Results />
      <IndustryBanner />
      <Tools />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
