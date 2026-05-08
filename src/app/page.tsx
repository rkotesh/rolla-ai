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
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rolla | Automate your business. No code needed.",
  description:
    "Rolla is a no-code automation agency that builds smart workflows using Make, Zapier, and n8n — so you stop doing things manually and start focusing on what matters.",
  keywords: [
    "automation agency",
    "no-code automation",
    "workflow automation",
    "make automation",
    "zapier expert",
    "n8n workflows",
    "business automation India",
  ],
  openGraph: {
    title: "Rolla | Automate your business. No code needed.",
    description:
      "We build smart automated workflows using Make, Zapier, and n8n. First consultation is free.",
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
      <Stats />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
