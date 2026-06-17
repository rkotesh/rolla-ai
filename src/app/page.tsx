import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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
  title: "Rolla | Custom Website & Web Application Development",
  description:
    "Rolla is a digital agency that builds beautiful, high-performance websites and web applications tailored to your business — so you stand out, engage users, and scale faster.",
  keywords: [
    "web development agency",
    "custom web applications",
    "django developer",
    "python developer",
    "mern stack developer",
    "react developer",
    "full stack web development",
    "digital agency India",
  ],
  openGraph: {
    title: "Rolla | Custom Website & Web Application Development",
    description:
      "We design and build bespoke high-performance websites and web applications. First consultation is free.",
    type: "website",
    url: "https://rolla.agency",
  },
};

export default function Home() {
  return (
    <main className="w-full relative bg-white">
      <Navigation />
      <Hero />
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
