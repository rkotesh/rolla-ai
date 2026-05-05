"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Make", color: "#6B6EFF", letter: "M", desc: "Visual automation platform", ai: false },
  { name: "Zapier", color: "#FF4A00", letter: "Z", desc: "Connect 6,000+ apps", ai: false },
  { name: "n8n", color: "#EA4B71", letter: "n", desc: "Open-source workflows", ai: false },
  { name: "Airtable", color: "#FCB400", letter: "A", desc: "Smart database + forms", ai: false },
  { name: "Notion", color: "#1A1A1A", letter: "N", desc: "Docs + project management", ai: false },
  { name: "Google Workspace", color: "#0F9D58", letter: "G", desc: "Sheets, Gmail, Drive, Docs", ai: false },
  { name: "Slack", color: "#4A154B", letter: "S", desc: "Team communication hub", ai: false },
  { name: "Webhooks & APIs", color: "#534AB7", letter: "W", desc: "Custom integrations", ai: false },
  { name: "OpenAI / GPT-4 / Claude", color: "#10A37F", letter: "AI", desc: "Text, data & decision AI", ai: true },
  { name: "Google Gemini", color: "#4285F4", letter: "G", desc: "Multimodal AI by Google", ai: true },
  { name: "Custom AI Agents", color: "#7C3AED", letter: "✦", desc: "Bespoke intelligent agents", ai: true },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powered by the world&apos;s best no-code <span className="text-[#534AB7]">& AI</span> tools
          </h2>
          <p className="text-gray-500 mb-14 max-w-2xl mx-auto text-lg">
            We choose the right tool for your workflow — and now bring AI intelligence directly into your automations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -7, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`group border rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-lg cursor-default ${tool.ai
                  ? "bg-purple-50/60 border-purple-100 hover:border-[#534AB7] hover:bg-white"
                  : "bg-gray-50 hover:bg-white border-gray-100 hover:border-[#CECBF6]"
                }`}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: tool.color }}
                animate={tool.ai ? { boxShadow: ["0 8px 20px rgba(83, 74, 183, 0.12)", "0 12px 28px rgba(83, 74, 183, 0.28)", "0 8px 20px rgba(83, 74, 183, 0.12)"] } : undefined}
                transition={tool.ai ? { duration: 2.4, repeat: Infinity, delay: idx * 0.15 } : undefined}
              >
                {tool.letter}
              </motion.div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">
                  {tool.name}
                  {tool.ai && (
                    <span className="ml-1 text-[9px] bg-[#534AB7] text-white px-1.5 py-0.5 rounded-full font-bold align-middle">AI</span>
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 leading-tight">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
