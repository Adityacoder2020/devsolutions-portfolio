"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-4 md:bottom-8 md:right-8">
      {isOpen && (
        <section
          id="floating-contact-panel"
          aria-labelledby="floating-contact-title"
          className="w-[min(21rem,calc(100vw-2.5rem))] border-2 border-brand-900 bg-[#fffdf8] shadow-[6px_6px_0_#263f38]"
        >
          <div className="flex items-start justify-between bg-brand-900 px-5 py-4 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e6aa42]">DevSolutions</p>
              <h2 id="floating-contact-title" className="mt-1 text-xl font-bold">Contact with us</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact options"
              className="p-1 text-white hover:text-[#e6aa42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <a
              href="https://wa.me/919874770088"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#248b55] px-4 py-3 text-[#176b3e] hover:bg-[#e8f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#248b55]"
            >
              <MessageCircle size={22} />
              <span>
                <span className="block font-bold">WhatsApp</span>
                <span className="block text-sm">+91 98747 70088</span>
              </span>
            </a>
            <a
              href="tel:+919874770088"
              className="flex items-center gap-3 border border-brand-900 px-4 py-3 text-brand-900 hover:bg-[#f6f0e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <Phone size={22} />
              <span>
                <span className="block font-bold">Call us</span>
                <span className="block text-sm">+91 98747 70088</span>
              </span>
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="floating-contact-panel"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className="inline-flex items-center gap-3 border-2 border-brand-900 bg-[#248b55] px-4 py-3 font-bold text-white shadow-[4px_4px_0_#263f38] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#e6aa42]"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} strokeWidth={2.5} />}
        <span className="hidden sm:inline">{isOpen ? "Close" : "Chat with us"}</span>
      </button>
    </div>
  );
}
