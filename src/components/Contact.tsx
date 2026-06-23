"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Loader2, Clock, Zap, TrendingUp } from "lucide-react";

const inputClass =
  "w-full bg-[#0D0E12] border border-[#1e2028] text-white text-sm px-4 py-3 focus:border-[#6366F1] focus:outline-none transition-colors duration-200 placeholder-[#3A3D4E] font-sans";

const labelClass =
  "block font-mono text-[0.6rem] uppercase tracking-widest text-[#C4C9D4] mb-2";

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
    <section id="contact" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-px bg-[#1e2028]">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0D0E12] p-8 md:p-12"
          >
            <div className="sys-label mb-6">↳ Initiate Engagement</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build your{" "}
              <span className="font-serif italic text-[#A5B4FC]">digital future?</span>
            </h2>
            <p className="text-[#C4C9D4] text-sm mb-12 leading-relaxed max-w-md">
              Pick a time for a free 30-minute discovery call, or send us a message about your project requirements. No obligation, no jargon.
            </p>

            <div className="space-y-8 mb-12">
              {[
                {
                  title: "Discovery Call",
                  desc: "We discuss your goals, target audience, and the features you need.",
                  icon: Clock,
                  code: "STEP-01",
                },
                {
                  title: "Custom Blueprint",
                  desc: "Receive a high-level technical blueprint and architectural recommendations.",
                  icon: Zap,
                  code: "STEP-02",
                },
                {
                  title: "High-Performance Code",
                  desc: "We build for speed, clean UX, and search engine optimization from day one.",
                  icon: TrendingUp,
                  code: "STEP-03",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-[#1e2028] flex items-center justify-center shrink-0 bg-[#0D0E12]">
                      <Icon className="w-3.5 h-3.5 text-[#6366F1]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[0.55rem] text-[#818CF8] uppercase tracking-widest">
                          {item.code}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-[#C4C9D4] leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email block */}
            <div className="border border-[#1e2028] p-5 bg-[#08090C]/40">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-3.5 h-3.5 text-[#6366F1]" strokeWidth={1.5} />
                <span className="font-mono text-[0.55rem] text-[#818CF8] uppercase tracking-widest">
                  Direct Channel
                </span>
              </div>
              <a
                href="mailto:rolla.aiagency@gmail.com"
                className="text-sm font-bold text-white hover:text-[#A5B4FC] transition-colors"
              >
                rolla.aiagency@gmail.com
              </a>
              <p className="font-mono text-[0.55rem] text-[#8a91a0] mt-2 uppercase tracking-wider">
                Response time: Usually &lt; 12 hours
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0D0E12] p-8 md:p-12"
          >
            <div className="sys-label mb-6">↳ Project Inquiry Form</div>
            <p className="text-xs text-[#C4C9D4] mb-8">
              Submit your project details below and our team will get back to you with a custom blueprint within 24 hours.
            </p>

            {/* Form */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-12 border border-[#1e2028] p-8 bg-[#0D0E12]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-[#4ADE80]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Message Transmitted</h3>
                  <p className="text-xs text-[#C4C9D4] leading-relaxed">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-mono text-[0.6rem] text-[#818CF8] hover:text-[#A5B4FC] uppercase tracking-widest transition-colors"
                  >
                    ↳ Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border border-red-400/30 text-red-400 p-3 flex items-center text-xs font-mono"
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      ERROR: Transmission failed. Please try again or email us directly.
                    </motion.div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business" className={labelClass}>
                      Business / Company Name
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className={inputClass}
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Project Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe what you want to build, key features, target timeline..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status === "loading" ? undefined : { scale: 1.01 }}
                    whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      "Send Message ↳"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
