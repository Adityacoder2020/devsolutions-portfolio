"use client";

import { MessageCircle, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919874770088";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-[#fffdf8] overflow-hidden flex flex-col lg:flex-row border-2 border-brand-900">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-brand-900 text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk</h2>
              <p className="text-brand-100 mb-10">
                Ready to start your next project? Reach out to us for a free consultation and quote.
              </p>

              <div className="space-y-6">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 hover:text-green-400 transition-colors"
                >
                  <div className="w-12 h-12 border border-white/40 flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-100">WhatsApp Us</p>
                    <p className="font-semibold text-lg">+91 98747 70088</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-white/40 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-100">Email Us</p>
                    <p className="font-semibold">hello@devsolutions.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-white/40 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-100">Location</p>
                    <p className="font-semibold">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-brand-900 mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Project Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all" placeholder="E-commerce Website Setup" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-600 focus:border-brand-600 outline-none transition-all resize-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className="bg-brand-600 text-white px-8 py-4 font-bold hover:bg-brand-800 transition-colors w-full flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
