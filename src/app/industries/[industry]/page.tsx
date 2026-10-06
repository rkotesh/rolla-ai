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
  accent: string;
}

const industryData: Record<string, IndustryDetails> = {
  "real-estate": {
    title: "Real Estate",
    description: "High-performance websites and MLS search portals to capture buyers and show listings.",
    icon: <Users className="w-7 h-7" />,
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
        desc: "Convert visitors with custom inquiry forms and integrated call scheduling & booking systems."
      }
    ],
    stat: "40% increase in mobile inquiries",
    accent: "#2554F6",
  },
  "marketing-agencies": {
    title: "Marketing Agencies",
    description: "Bespoke marketing websites and client portals that showcase your brand and results.",
    icon: <BarChart3 className="w-7 h-7" />,
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
    stat: "100% custom-designed to match your brand",
    accent: "#6366F1",
  },
  "ecommerce": {
    title: "E-commerce",
    description: "Headless storefronts and custom e-commerce web applications built for speed.",
    icon: <ShoppingCart className="w-7 h-7" />,
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
    stat: "Sub-second load times, higher checkout conversions",
    accent: "#059669",
  },
  "recruitment": {
    title: "Recruitment",
    description: "Modern job boards and applicant screening portals for high-growth firms.",
    icon: <UserCheck className="w-7 h-7" />,
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
    stat: "Reduce application drop-off by 45%",
    accent: "#DC2626",
  },
  "coaches": {
    title: "Coaches & Consultants",
    description: "Bespoke e-learning platforms, member portals, and personal brand sites.",
    icon: <GraduationCap className="w-7 h-7" />,
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
    stat: "Save thousands in platform subscription fees",
    accent: "#D97706",
  }
};

export default function IndustryPage() {
  const params = useParams();
  const industrySlug = params.industry as string;
  const data = industryData[industrySlug];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-[26px] border border-black/[0.07] shadow-[0_16px_40px_rgba(15,16,20,0.06)] max-w-sm mx-auto">
          <h1 className="text-5xl font-bold mb-3 text-[#0F1014]">404</h1>
          <p className="mb-6 text-[#686C78]">Industry not found.</p>
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-[#2554F6] hover:underline font-semibold">
            Back to home ↳
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#0F1014]">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
          {/* Ambient blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[100px]" style={{ backgroundColor: `${data.accent}08` }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[80px]" style={{ backgroundColor: `${data.accent}06` }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/#industries"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#686C78] hover:text-[#2554F6] mb-10 transition-colors uppercase tracking-widest font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Industries
            </Link>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
                  style={{ backgroundColor: `${data.accent}12`, color: data.accent }}
                >
                  {data.icon}
                </div>

                <div className="bento-pill mb-5">↳ Industry Solutions</div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1014] mb-5 tracking-tight leading-[1.08]">
                  Web Development for{" "}
                  <span className="font-serif italic font-normal" style={{ color: data.accent }}>
                    {data.title}
                  </span>
                </h1>
                <p className="text-lg text-[#686C78] mb-10 leading-relaxed max-w-xl">
                  {data.description}
                </p>
                <Link href="/#contact" className="btn-primary">
                  Book Discovery Call ↳
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[26px] border border-black/[0.07] p-8 shadow-[0_16px_48px_rgba(15,16,20,0.07)]"
              >
                <h3 className="text-base font-bold text-[#0F1014] mb-6 flex items-center gap-2.5">
                  <Zap className="w-5 h-5" style={{ color: data.accent }} />
                  Why build custom for {data.title}?
                </h3>
                <ul className="space-y-4">
                  {data.bottlenecks.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#686C78]">
                      <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-6 border-t border-black/[0.06]">
                  <p className="text-sm font-bold font-mono" style={{ color: data.accent }}>
                    Expected Result: {data.stat}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-[#F4EFE6]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="bento-pill mb-4 mx-auto w-fit">↳ Engineered Architecture</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1014] mb-4">
                How we solve it
              </h2>
              <p className="text-sm text-[#686C78] max-w-xl mx-auto leading-relaxed">
                Modern web platforms we build to help your {data.title} business scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {data.solutions.map((solution: { title: string; desc: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-7 bg-white rounded-[26px] border border-black/[0.07] shadow-[0_8px_28px_rgba(15,16,20,0.05)] hover:shadow-[0_16px_40px_rgba(15,16,20,0.1)] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${data.accent}12` }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: data.accent }} />
                  </div>
                  <h4 className="text-base font-bold text-[#0F1014] mb-2.5">{solution.title}</h4>
                  <p className="text-sm text-[#686C78] leading-relaxed">{solution.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#0F1014] text-white relative overflow-hidden">
          {/* Soft glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ backgroundColor: `${data.accent}15` }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to launch your project?
            </h2>
            <p className="text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Join other {data.title} businesses who have elevated their brand and scaled online with Rolla.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0F1014] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#F4EFE6] transition-all duration-200 shadow-[0_8px_24px_rgba(255,255,255,0.15)]"
            >
              Schedule Your Free Consultation ↳
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
