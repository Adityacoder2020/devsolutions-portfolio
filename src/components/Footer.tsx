"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-4 block">
              Dev<span className="text-brand-500">Solutions</span>
            </Link>
            <p className="max-w-sm mb-6 text-brand-200">
              Reliable Solutions, Fast delivery. We build digital experiences that help businesses grow and scale in the modern era.
            </p>
            <div className="flex space-x-6 text-sm font-medium">
              <a href="#" className="hover:text-[#f2b65f] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#f2b65f] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#f2b65f] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#f2b65f] transition-colors">GitHub</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-brand-200">
              <li>E-Commerce Development</li>
              <li>Custom Web Apps</li>
              <li>Corporate Websites</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center text-sm text-brand-300">
          <p>&copy; {currentYear} DevSolutions. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
