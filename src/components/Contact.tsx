"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Loader2, Clock, Zap, TrendingUp, Send } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const inputClass =
  "w-full bg-[#FAF7F2] border border-black/[0.1] text-[#0F1014] text-sm px-4 py-3.5 rounded-xl focus:border-[#2554F6]/50 focus:outline-none focus:ring-2 focus:ring-[#2554F6]/10 transition-all duration-200 placeholder-[#686C78] font-sans";

const labelClass =
  "block font-mono text-[0.68rem] uppercase tracking-widest text-[#33363F] mb-2 font-semibold";

const steps = [
  {
    title: "Discovery Scope",
    desc: "Clarify user flows, security posture, and database schema needs.",
    icon: Clock,
    code: "STEP-01",
    color: "#2554F6",
  },
  {
    title: "Custom Architecture",
    desc: "Receive comprehensive stack diagrams and benchmark projections.",
    icon: Zap,
    code: "STEP-02",
    color: "#6366F1",
  },
  {
    title: "Rapid Deployment",
    desc: "Production delivery with zero fluff, live QA links, and 100% code ownership.",
    icon: TrendingUp,
    code: "STEP-03",
    color: "#059669",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2554F6]/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6366F1]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {/* Left — Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <SpotlightCard
              className="bg-white rounded-[26px] border border-black/[0.07] p-8 md:p-10 shadow-[0_10px_40px_rgba(15,16,20,0.07)] h-full flex flex-col justify-between"
              spotlightColor="rgba(37,84,246,0.06)"
            >
              <div>
                <div className="bento-pill mb-6">↳ Direct Engagement Channel</div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#0F1014] mb-5 leading-tight">
                  Ready to deploy your{" "}
                  <span className="font-serif italic font-normal text-[#2554F6]">
                    digital future?
                  </span>
                </h2>
                <p className="text-[#686C78] text-sm leading-relaxed mb-8">
                  Book a free 30-minute scoping session with our lead architects. We evaluate requirements, estimate milestone phases, and provide technical feedback.
                </p>

                <div className="space-y-5 mb-8">
                  {steps.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3.5 group cursor-default">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                          style={{ backgroundColor: `${item.color}12` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-mono text-[0.6rem] uppercase tracking-widest font-semibold mb-0.5" style={{ color: item.color }}>
                            {item.code}
                          </div>
                          <h4 className="text-sm font-bold text-[#0F1014] mb-0.5">{item.title}</h4>
                          <p className="text-xs text-[#686C78] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct email box */}
              <div className="rounded-2xl bg-[#F4EFE6] border border-black/[0.06] p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Mail className="w-4 h-4 text-[#2554F6]" strokeWidth={2} />
                  <span className="font-mono text-[0.6rem] text-[#686C78] uppercase tracking-widest font-semibold">
                    Instant Dispatch
                  </span>
                </div>
                <a
                  href="mailto:rolla.aiagency@gmail.com"
                  className="text-sm font-bold text-[#0F1014] hover:text-[#2554F6] transition-colors"
                >
                  rolla.aiagency@gmail.com
                </a>
                <p className="font-mono text-[0.6rem] text-[#059669] mt-1.5 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#059669] rounded-full animate-pulse inline-block" />
                  Engineering Response &lt; 12 Hours
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-7"
          >
            <SpotlightCard
              className="bg-white rounded-[26px] border border-black/[0.07] p-8 md:p-12 shadow-[0_10px_40px_rgba(15,16,20,0.07)] h-full flex flex-col justify-between"
              spotlightColor="rgba(99,102,241,0.05)"
            >
              <div>
                <div className="bento-pill mb-5">↳ Project Requirements Intake</div>
                <p className="text-sm text-[#686C78] mb-8 leading-relaxed">
                  Submit your project requirements below. We review specs and respond with architectural scope proposals within 24 hours.
                </p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col items-center justify-center text-center space-y-4 py-16 rounded-2xl bg-[#FAF7F2] border border-black/[0.06]"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      >
                        <CheckCircle2 className="w-14 h-14 text-[#059669]" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#0F1014]">Transmission Received</h3>
                      <p className="text-sm text-[#686C78] max-w-sm leading-relaxed">
                        Thank you. Your project brief has been delivered to lead engineering. Expect a reply within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-secondary text-xs mt-2"
                      >
                        ↳ Send Another Brief
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      {status === "error" && (
                        <div className="rounded-xl bg-red-50 border border-red-100 text-red-800 p-4 flex items-center text-sm">
                          <AlertCircle className="w-4 h-4 mr-3 text-red-500 shrink-0" />
                          Submission failed. Please email rolla.aiagency@gmail.com directly.
                        </div>
                      )}

                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                          placeholder="e.g. Alexander Vance"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className={labelClass}>
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          placeholder="alexander@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-business" className={labelClass}>
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          id="contact-business"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className={inputClass}
                          placeholder="Acme Technologies Corp"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className={labelClass}>
                          Project Scope & Target Objectives *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`${inputClass} resize-none`}
                          placeholder="Describe the system to build, key capabilities, target timeline, and existing tech stack..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={status === "loading" ? undefined : { scale: 1.02 }}
                        whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                        className="w-full btn-primary text-center justify-center py-4 cursor-pointer"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Transmitting Specifications...
                          </>
                        ) : (
                          <>
                            Transmit Brief to Engineering
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
