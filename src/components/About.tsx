"use client";

import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "Expertise in E-Commerce & Custom Apps",
    "Modern Tech Stack (React, Next.js, Tailwind)",
    "Scalable & Secure Architecture",
    "Fast Delivery & Ongoing Support",
  ];

  return (
    <section id="about" className="py-20 bg-[#fffdf8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div 
            className="w-full lg:w-1/2"
          >
            <div className="relative flex aspect-square flex-col justify-between overflow-hidden bg-[#1c493d] p-8 text-[#fffdf8] md:p-12">
              <div className="absolute -right-8 -top-8 h-56 w-56 border-[22px] border-[#e6aa42]" />
              <div className="relative z-10 text-xs font-bold uppercase tracking-[0.18em]">A practical partner for your next step</div>
              <div className="relative z-10 max-w-sm font-serif text-5xl font-bold leading-[0.98] md:text-6xl">Built for people. Made to last.</div>
              <div className="relative z-10 flex items-end justify-between border-t border-white/40 pt-4 text-sm">
                <span>Strategy · Design · Development</span><span className="text-3xl text-[#e6aa42]">✳</span>
              </div>
            </div>
          </div>

          <div 
            className="w-full lg:w-1/2"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-600">Who we are</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.04em] text-brand-900 mb-6">
              Empowering Businesses with Cutting-Edge Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At DevSolutions, we don&apos;t just write code; we build digital experiences that drive growth. 
              Whether you need a high-converting e-commerce platform, a custom web application, or a 
              stunning corporate portfolio, our team delivers reliable solutions with fast turnaround times.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <CheckCircle className="text-brand-600 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-brand-50 rounded-xl border border-brand-100">
              <p className="text-brand-900 font-medium italic">
                &ldquo;Our mission is to bridge the gap between your business goals and the technology needed to achieve them.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
