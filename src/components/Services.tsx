"use client";

import { motion } from "framer-motion";
import { Settings, Plug, Filter, BellRing, Globe, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Workflow Automation",
      description: "We map your current process end-to-end and build a fully automated version that runs without human input.",
      icon: <Settings className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.1,
      badge: null,
    },
    {
      title: "App Integrations",
      description: "Connect your CRM, email, spreadsheets, calendar, and messaging tools so they all talk to each other seamlessly.",
      icon: <Plug className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.2,
      badge: null,
    },
    {
      title: "Lead & CRM Flows",
      description: "Auto-capture leads from your forms and ads, send them to your CRM, trigger follow-up sequences — all automatically.",
      icon: <Filter className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.3,
      badge: null,
    },
    {
      title: "Notification Systems",
      description: "Get instant alerts for the things that matter — new orders, missed payments, form submissions, or any custom trigger.",
      icon: <BellRing className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.4,
      badge: null,
    },
    {
      title: "AI-Powered Automation",
      description: "Not just automation — we build intelligent systems powered by AI. Integrate GPT-4, Gemini, and custom AI models directly into your workflows for smart decision-making, content generation, and data analysis.",
      icon: <Sparkles className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.5,
      badge: "NEW",
    },
    {
      title: "Web Application Development",
      description: "Need a custom dashboard, client portal, or internal tool to power your automation? We build fast, modern web apps that seamlessly connect to your automated workflows.",
      icon: <Globe className="w-6 h-6 text-[#534AB7]" />,
      delay: 0.6,
      badge: "NEW",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What we build for you
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple integrations to AI-powered systems and custom web apps — we cover every layer of your automation stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className={`bg-white rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${
                service.badge
                  ? "border-[#CECBF6] shadow-md"
                  : "border-gray-100 hover:border-[#CECBF6]"
              }`}
            >
              {/* NEW badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 bg-[#534AB7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                  {service.badge}
                </span>
              )}

              {/* AI card glow effect */}
              {service.title === "AI-Powered Automation" && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
