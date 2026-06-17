"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Users, BarChart3, ShoppingCart, UserCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface IndustryDetails {
  title: string;
  description: string;
  icon: ReactNode;
  bottlenecks: string[];
  solutions: {
    title: string;
    desc: string;
  }[];
  stat: string;
}

const industryData: Record<string, IndustryDetails> = {
  "real-estate": {
    title: "Real Estate",
    description: "High-performance websites and MLS search portals to capture buyers and show listings.",
    icon: <Users className="w-10 h-10" />,
    bottlenecks: [
      "Slow template websites that fail to capture property buyer leads",
      "Clunky user interfaces making property searches frustrating",
      "Difficulty keeping property lists and details updated in real-time",
      "Lack of direct booking systems for scheduling property tours",
    ],
    solutions: [
      {
        title: "MLS & IDX Integration",
        desc: "Seamlessly pull real estate listings directly onto your site with high-performance filters."
      },
      {
        title: "Interactive Property Galleries",
        desc: "Embed high-resolution virtual tours, interactive maps, and media galleries that load instantly."
      },
      {
        title: "Lead Capture & Booking",
        desc: "Convert visitors with custom inquiry forms and automated call scheduling integrations."
      }
    ],
    stat: "40% increase in mobile inquiries"
  },
  "marketing-agencies": {
    title: "Marketing Agencies",
    description: "Bespoke marketing websites and client portals that showcase your brand and results.",
    icon: <BarChart3 className="w-10 h-10" />,
    bottlenecks: [
      "Outdated portfolio designs that fail to convey modern capabilities",
      "Slow page loading speeds hurting Google search indexing (SEO)",
      "Lack of secure portals to share project assets and timelines",
      "Manual client onboarding processes causing friction",
    ],
    solutions: [
      {
        title: "Interactive Portfolios",
        desc: "Bespoke case study showcases and interactive galleries built to highlight your work and details."
      },
      {
        title: "Secure Client Portals",
        desc: "Custom dashboards for sharing deliverables, managing approvals, and onboarding new clients."
      },
      {
        title: "Conversion Optimization",
        desc: "Aesthetically rich, custom landing pages optimized to capture inbound consultation calls."
      }
    ],
    stat: "100% custom-designed to match your brand"
  },
  "ecommerce": {
    title: "E-commerce",
    description: "Headless storefronts and custom e-commerce web applications built for speed.",
    icon: <ShoppingCart className="w-10 h-10" />,
    bottlenecks: [
      "High checkout abandonment rates caused by page load delays",
      "Rigid Shopify/WooCommerce layouts limiting unique brand styling",
      "Poor mobile performance leading to lost sales on handheld devices",
      "Difficult integration of custom inventory or ERP platforms",
    ],
    solutions: [
      {
        title: "Headless Shopify Storefronts",
        desc: "Blazing fast frontend storefronts connected to Shopify or other e-commerce engines."
      },
      {
        title: "Frictionless Checkout Flows",
        desc: "Custom cart drawers, express payment gates (Stripe, Apple Pay), and one-click purchase flows."
      },
      {
        title: "Optimized Product Pages",
        desc: "Media-rich galleries, instant variant updates, and fast page speeds for better indexing."
      }
    ],
    stat: "Sub-second load times, higher checkout conversions"
  },
  "recruitment": {
    title: "Recruitment",
    description: "Modern job boards and applicant screening portals for high-growth firms.",
    icon: <UserCheck className="w-10 h-10" />,
    bottlenecks: [
      "Clunky applicant tracking system (ATS) templates that repel candidates",
      "Difficult search and filtering functionality for job seekers",
      "High drop-off rates due to long and repetitive application forms",
      "Inability to easily track applicant progress in one clear hub",
    ],
    solutions: [
      {
        title: "Custom Job Boards",
        desc: "Beautiful, responsive search portals allowing applicants to filter and apply in seconds."
      },
      {
        title: "Candidate Dashboards",
        desc: "Private portals where candidates can upload resumes, manage profiles, and track applications."
      },
      {
        title: "Integrated Interview Booking",
        desc: "Self-serve calendar booking embedded directly into the candidate onboarding workflow."
      }
    ],
    stat: "Reduce application drop-off by 45%"
  },
  "coaches": {
    title: "Coaches & Consultants",
    description: "Bespoke e-learning platforms, member portals, and personal brand sites.",
    icon: <GraduationCap className="w-10 h-10" />,
    bottlenecks: [
      "Fragmented user experience across multiple course/booking apps",
      "Clunky course video players and member authentication portals",
      "High recurring fees paid to platforms like Kajabi or Teachable",
      "Poor mobile experience for students accessing course materials",
    ],
    solutions: [
      {
        title: "Custom Course Platforms",
        desc: "Own your content and community entirely with a fast, bespoke learning management system."
      },
      {
        title: "Consulting Landing Pages",
        desc: "Promote coaching packages and capture leads with high-converting, custom-coded layouts."
      },
      {
        title: "Student Progress Trackers",
        desc: "Interactive dashboards with module lists, bookmarking, and student engagement analytics."
      }
    ],
    stat: "Save thousands in platform subscription fees"
  }
};

export default function IndustryPage() {
  const params = useParams();
  const industrySlug = params.industry as string;
  const data = industryData[industrySlug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-6">Industry not found.</p>
          <Link href="/" className="text-[#534AB7] underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white to-[#FAFAFA] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#industries" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#534AB7] mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Industries
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-[#534AB7] mb-8">
                  {data.icon}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                  Web Development for <span className="text-[#534AB7]">{data.title}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                  {data.description}
                </p>
                <div className="flex gap-4">
                  <Link href="/#contact" className="bg-[#534AB7] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#43399b] transition-all">
                    Book Discovery Call
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-[#CECBF6] shadow-2xl shadow-purple-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#534AB7]" />
                  Why build custom for {data.title}?
                </h3>
                <ul className="space-y-4">
                  {data.bottlenecks.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-lg font-bold text-[#534AB7]">
                    Expected Result: {data.stat}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How we solve it</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Modern web platforms we build to help your {data.title} business scale.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {data.solutions.map((solution: { title: string; desc: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:border-[#CECBF6] transition-all"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#534AB7] mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#534AB7] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to launch your project?</h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Join other {data.title} businesses who have elevated their brand with Rolla.
            </p>
            <Link href="/#contact" className="bg-white text-[#534AB7] px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:scale-105 transition-all">
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
