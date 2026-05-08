"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Clock, Users, BarChart3, Mail, MessageSquare, ShoppingCart, Search, UserCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const industryData: Record<string, any> = {
  "real-estate": {
    title: "Real Estate",
    description: "Automate your lead-to-closing pipeline and stop chasing spreadsheets.",
    icon: <Users className="w-10 h-10" />,
    bottlenecks: [
      "Manual entry from Facebook/Zillow ads into CRM",
      "Slow follow-up with new inquiries",
      "Manual document preparation and signing reminders",
      "Tracking viewings and feedback in disparate tools",
    ],
    solutions: [
      {
        title: "Instant Lead Capture",
        desc: "Auto-sync leads from all platforms (Zillow, FB, Website) directly into your CRM with zero delay."
      },
      {
        title: "AI-Powered Nurture",
        desc: "GPT-4 powered email/SMS responses that qualify leads and book viewings while you sleep."
      },
      {
        title: "Transaction Automation",
        desc: "Auto-generate contracts and trigger signing sequences via DocuSign or PandaDoc."
      }
    ],
    stat: "Save 15+ hours/week per agent"
  },
  "marketing-agencies": {
    title: "Marketing Agencies",
    description: "Scale your client operations without increasing your headcount.",
    icon: <BarChart3 className="w-10 h-10" />,
    bottlenecks: [
      "Manual client reporting across multiple ad platforms",
      "Onboarding new clients via long email chains",
      "Content approval bottlenecks",
      "Manual invoice generation and tracking",
    ],
    solutions: [
      {
        title: "Automated Reporting",
        desc: "Pull data from Meta, Google, and LinkedIn into beautiful PDF reports sent automatically every Monday."
      },
      {
        title: "Client Onboarding",
        desc: "One form triggers Slack channel creation, Folder setup, and Welcome emails automatically."
      },
      {
        title: "Approval Workflows",
        desc: "Automated Slack/Email triggers when content is ready for review, with auto-reminders."
      }
    ],
    stat: "Reduce reporting time by 90%"
  },
  "ecommerce": {
    title: "E-commerce",
    description: "Focus on your product, let us handle the order-to-fulfillment logic.",
    icon: <ShoppingCart className="w-10 h-10" />,
    bottlenecks: [
      "Inventory sync issues across multiple channels",
      "Manual updates to shipping trackers",
      "Slow response to customer support tickets",
      "Managing returns and refunds manually",
    ],
    solutions: [
      {
        title: "Omni-channel Sync",
        desc: "Real-time inventory and order sync between Shopify, Amazon, and your warehouse."
      },
      {
        title: "Automated Logistics",
        desc: "Trigger shipping labels and tracking updates the moment an order is marked ready."
      },
      {
        title: "Review Automation",
        desc: "Smart follow-ups after delivery to capture 5-star reviews and handle negative feedback privately."
      }
    ],
    stat: "Zero missed orders, 100% accurate tracking"
  },
  "recruitment": {
    title: "Recruitment",
    description: "Hire faster by automating the repetitive screening and scheduling tasks.",
    icon: <UserCheck className="w-10 h-10" />,
    bottlenecks: [
      "Sifting through hundreds of unqualified resumes",
      "Back-and-forth scheduling for interviews",
      "Manual candidate status updates in ATS",
      "Collecting feedback from hiring managers",
    ],
    solutions: [
      {
        title: "AI Resume Screening",
        desc: "Automated GPT-4 screening that scores candidates based on your specific job criteria."
      },
      {
        title: "Self-Serve Scheduling",
        desc: "Qualified candidates get an instant link to book interviews on your team's calendar."
      },
      {
        title: "Feedback Loops",
        desc: "Automatic Slack reminders to interviewers to submit their ratings within 2 hours of the call."
      }
    ],
    stat: "Reduce Time-to-Hire by 40%"
  },
  "coaches": {
    title: "Coaches & Consultants",
    description: "Automate your backend so you can focus on your clients and content.",
    icon: <GraduationCap className="w-10 h-10" />,
    bottlenecks: [
      "Managing student/client onboarding manually",
      "Chasing late payments and expiring subscriptions",
      "Manual community management (Discord/Slack)",
      "Tracking course progress and completions",
    ],
    solutions: [
      {
        title: "Student Onboarding",
        desc: "Payment triggers course access, community invite, and a personalized 'Start Here' sequence."
      },
      {
        title: "Payment Recovery",
        desc: "Automated, polite reminders for failed payments that actually convert."
      },
      {
        title: "Insightful Tracking",
        desc: "Weekly reports on student engagement so you know who needs extra help."
      }
    ],
    stat: "Handle 3x more clients without extra admin"
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
                  Automation for <span className="text-[#534AB7]">{data.title}</span>
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
                  Why automate {data.title}?
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specific workflows we build to put your {data.title} business on autopilot.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {data.solutions.map((solution: any, index: number) => (
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
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to reclaim your time?</h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Join other {data.title} businesses who have automated their backend with Rolla.
            </p>
            <Link href="/#contact" className="bg-white text-[#534AB7] px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:scale-105 transition-all">
              Schedule Your Free Audit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
