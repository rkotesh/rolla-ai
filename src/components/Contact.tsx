"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Loader2, Clock, Zap, TrendingUp } from "lucide-react";

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to build your digital <span className="text-[#534AB7]">future?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Pick a time for a free 30-minute discovery call, or send us a message about your project requirements.
            </p>

            <div className="space-y-10 mb-12">
              {[
                { 
                  title: "Discovery Call", 
                  desc: "We'll discuss your goals, target audience, and the features you need for your website or web app.",
                  icon: <Clock className="w-5 h-5" />
                },
                { 
                  title: "Custom Blueprint", 
                  desc: "Receive a high-level technical blueprint and architectural recommendations for your project.",
                  icon: <Zap className="w-5 h-5" />
                },
                { 
                  title: "High-Performance Code", 
                  desc: "We build for speed, clean UX, and search engine optimization (SEO) from day one.",
                  icon: <TrendingUp className="w-5 h-5" />
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#534AB7] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 max-w-sm">
              <div className="flex items-center gap-3 mb-4 text-[#534AB7]">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Email Support</span>
              </div>
              <a href="mailto:rolla.aiagency@gmail.com" className="text-lg font-bold text-gray-900 hover:text-[#534AB7] transition-colors">
                rolla.aiagency@gmail.com
              </a>
              <p className="text-xs text-gray-400 mt-2">Response time: Usually &lt; 12 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl shadow-purple-100 border border-purple-50"
          >
            <div className="mb-10">
              <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Book a Discovery Call</h3>
                <p className="text-sm text-gray-500 mb-6">Pick a time that works for you — no obligation.</p>
                
                <div className="w-full h-[600px] overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <iframe 
                    src="https://cal.com/rolla/30min" 
                    className="w-full h-full border-none"
                    title="Book a discovery call with Rolla"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10 px-4">
              <div className="h-px bg-gray-100 flex-grow"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">or send a quick message</span>
              <div className="h-px bg-gray-100 flex-grow"></div>
            </div>

            <div className="px-4 pb-4">

            <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Message sent!</h3>
                <p className="text-gray-600">Thanks for reaching out. We&apos;ll get back to you within 24 hours to discuss your project requirements.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[#534AB7] font-medium hover:underline"
                >
                  Send another message
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
                className="space-y-6"
              >
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#534AB7] focus:border-transparent transition-all outline-none bg-white"
                    placeholder="Jane Doe"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#534AB7] focus:border-transparent transition-all outline-none bg-white"
                    placeholder="jane@company.com"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">Business / Company Name</label>
                  <input
                    type="text"
                    id="business"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#534AB7] focus:border-transparent transition-all outline-none bg-white"
                    placeholder="Acme Corp"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project requirements</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#534AB7] focus:border-transparent transition-all outline-none bg-white resize-none"
                    placeholder="Describe what you want to build, key features, target timeline..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status === "loading" ? undefined : { y: -2, scale: 1.01 }}
                  whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                  className="w-full bg-[#534AB7] hover:bg-[#43399b] text-white py-3.5 rounded-lg font-medium transition-all shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </motion.button>
              </motion.form>
            )}
            </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
