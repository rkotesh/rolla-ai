"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

function RollaLogoMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="2.2" />
      <line x1="12" y1="12" x2="12" y2="32" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="12" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="26" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="24" y1="22" x2="38" y2="38" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

const footerCols = [
  {
    title: "Platforms",
    links: [
      { name: "Custom Web Apps", href: "/#services" },
      { name: "E-Commerce Solutions", href: "/#services" },
      { name: "API Integrations", href: "/#services" },
      { name: "UI/UX Design Systems", href: "/#services" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { name: "MERN Stack", href: "/#tools" },
      { name: "Java & Spring Boot", href: "/#tools" },
      { name: "Performance Engineering", href: "/#services" },
      { name: "Technical SEO Setup", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Founder & Team", href: "/#about" },
      { name: "Client Case Studies", href: "/#results" },
      { name: "Engineering Process", href: "/#how-it-works" },
      { name: "Pricing Infrastructure", href: "/#pricing" },
    ],
  },
  {
    title: "Engage",
    links: [
      { name: "Schedule Call", href: "/#contact" },
      { name: "Inquiry Form", href: "/#contact" },
      { name: "Target Industries", href: "/#industries" },
      { name: "srkotesh23@gmail.com", href: "mailto:srkotesh23@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F4EFE6]/80 border-t border-black/[0.07] pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="text-[#0F1014] group-hover:text-[#2554F6] transition-colors duration-200">
                <RollaLogoMark className="w-[30px] h-[30px]" />
              </div>
              <span className="text-[#0F1014] font-bold text-xl tracking-tight leading-none select-none">
                Rolla<span className="text-[#2554F6]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#686C78] leading-relaxed mb-6 max-w-[220px]">
              Custom web applications and enterprise software built for exponential scale.
            </p>
            <div className="flex gap-2.5 mb-5">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/sankulakoteswararao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white border border-black/[0.08] text-[#33363F] hover:text-[#2554F6] hover:border-[#2554F6]/30 flex items-center justify-center transition-all duration-200 shadow-[0_2px_8px_rgba(15,16,20,0.06)]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rkotesh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white border border-black/[0.08] text-[#33363F] hover:text-[#0F1014] hover:border-black/20 flex items-center justify-center transition-all duration-200 shadow-[0_2px_8px_rgba(15,16,20,0.06)]"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="tel:+919182015717"
                className="flex items-center gap-2 text-xs text-[#686C78] hover:text-[#0F1014] transition-colors group"
              >
                <span className="w-6 h-6 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#2554F6]/30 transition-colors">
                  📞
                </span>
                <span className="font-mono">+91 91820 15717</span>
              </a>
              <a
                href="mailto:srkotesh23@gmail.com"
                className="flex items-center gap-2 text-xs text-[#686C78] hover:text-[#0F1014] transition-colors group"
              >
                <span className="w-6 h-6 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#2554F6]/30 transition-colors">
                  ✉️
                </span>
                <span className="font-mono">srkotesh23@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[0.65rem] text-[#2554F6] uppercase tracking-widest mb-4 font-semibold">
                ↳ {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-[#686C78] hover:text-[#0F1014] hover:translate-x-0.5 transition-all duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-black/[0.07] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[#686C78] uppercase tracking-wider">
            © {new Date().getFullYear()} Rolla Software Solutions. All Rights Reserved.
          </p>
          <p className="font-mono text-xs text-[#686C78] uppercase tracking-wider">
            Built by{" "}
            <span className="text-[#0F1014] font-semibold">Koteswararao Sankula</span>
            {" "}·{" "}
            Co-founded by{" "}
            <span className="text-[#0F1014] font-semibold">Narendra Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
