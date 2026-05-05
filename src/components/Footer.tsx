"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="bg-white border-t border-gray-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight block mb-2">
              Rolla<span className="text-[#534AB7]">.</span>
            </Link>
            </motion.div>
            <p className="text-sm text-gray-500 font-medium">
              Automate your business. No code needed.
            </p>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-[#534AB7] transition-colors">Services</Link>
            <Link href="#tools" className="text-sm font-medium text-gray-600 hover:text-[#534AB7] transition-colors">Tools</Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-[#534AB7] transition-colors">About</Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#534AB7] transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <motion.a whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.96 }} href="https://linkedin.com/in/sankulakoteswararao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#534AB7] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.96 }} href="#" className="text-gray-400 hover:text-[#534AB7] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rolla Automation Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Founded by <span className="font-semibold text-gray-700">Koteswararao Sankula</span>  and co-founded by <span className="font-semibold text-gray-700">Narendra Kumar</span></p>
        </div>
      </div>
    </motion.footer>
  );
}
