"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Hero() {
  const featuredProject = projects[1];
  return (
    <section className="bg-[#f6f0e5] pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <p className="mb-6 border-l-4 border-brand-600 pl-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-900">
              Independent digital studio
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-0.045em] text-brand-900 md:text-7xl">
              We make the web work <span className="font-serif font-normal italic text-brand-600">for you.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4f5750]">
              From online stores to custom websites, we help businesses turn good ideas into useful digital products.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href="#portfolio" className="inline-flex items-center gap-3 bg-brand-600 px-6 py-4 font-bold text-white transition-colors hover:bg-brand-800">
                See our work <ArrowUpRight size={18} />
              </Link>
              <Link href="#contact" className="border-b-2 border-brand-900 pb-1 font-bold text-brand-900 hover:text-brand-600">
                Talk about a project
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -left-3 -top-3 h-full w-full bg-[#e6aa42]" />
            <div className="relative border-[5px] border-brand-900 bg-[#fffdf8] p-5 md:p-7">
              <div className="flex items-center justify-between border-b-2 border-brand-900 pb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-900">
                <span>From the portfolio</span><span>02 / 06</span>
              </div>
              <div className="py-10 md:py-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-600">{featuredProject.industry}</p>
                <p className="font-serif text-5xl font-bold leading-[0.98] tracking-tight text-brand-900 md:text-6xl">{featuredProject.title}</p>
                <p className="mt-5 max-w-sm leading-7 text-[#4f5750]">{featuredProject.description}</p>
              </div>
              <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-t-2 border-brand-900 pt-4 font-bold text-brand-900 hover:text-brand-600">
                See the live project <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 border-y-2 border-brand-900 py-5 text-center md:mt-20">
          <div className="border-r border-brand-900/30"><p className="text-3xl font-black text-brand-600">6+</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-900 md:text-sm">Projects</p></div>
          <div className="border-r border-brand-900/30"><p className="text-3xl font-black text-brand-900">5+</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-900 md:text-sm">Industries</p></div>
          <div><p className="text-3xl font-black text-[#a96c12]">100%</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-900 md:text-sm">Client satisfaction</p></div>
        </div>
      </div>
    </section>
  );
}
