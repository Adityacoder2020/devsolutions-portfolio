"use client";

import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#f6f0e5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-600">A few things we have made</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-brand-900 mb-4">Selected work.</h2>
          <p className="text-lg text-gray-600">
            Explore some of the recent websites and applications we&apos;ve built for our clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t-2 border-brand-900">
          {projects.map((project) => {
            
            return (
            <div
              key={project.id}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 border-b-2 border-brand-900/25 py-7 transition-colors hover:bg-[#fffdf8] md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-x-8"
            >
              <span className="row-span-2 font-serif text-2xl font-bold text-brand-600">0{project.id}</span>
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{project.industry}</span>
                <h3 className="mt-1 text-2xl font-bold text-brand-900 md:text-3xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-[#4f5750]">{project.description}</p>
              </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-start-2 mt-4 inline-flex items-center font-bold text-brand-900 hover:text-brand-600 transition-colors md:col-start-auto md:mt-0"
                >
                  Visit Live Site <ExternalLink size={16} className="ml-2" />
                </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
