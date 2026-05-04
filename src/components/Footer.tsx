import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight block mb-2">
              Rolla<span className="text-[#534AB7]">.</span>
            </Link>
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
            <a href="https://linkedin.com/in/sankulakoteswararao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#534AB7] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#534AB7] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rolla Automation Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Founded by <span className="font-semibold text-gray-700">Koteswararao Sankula</span></p>
        </div>
      </div>
    </footer>
  );
}
