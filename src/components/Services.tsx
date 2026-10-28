"use client";

import { agenticAIServices, services } from "../data/services";

export default function Services() {
  const renderServiceGrid = (items: typeof services) => (
    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
      {items.map((service, index) => {
        const Icon = service.icon;
        
        // Assign distinct, crafted colors to each card
        const cardColors = [
          "text-blue-600 bg-blue-50 border-blue-100 hover:border-blue-300",
          "text-emerald-600 bg-emerald-50 border-emerald-100 hover:border-emerald-300",
          "text-amber-600 bg-amber-50 border-amber-100 hover:border-amber-300",
          "text-purple-600 bg-purple-50 border-purple-100 hover:border-purple-300",
          "text-rose-600 bg-rose-50 border-rose-100 hover:border-rose-300",
          "text-cyan-600 bg-cyan-50 border-cyan-100 hover:border-cyan-300",
        ];
        
        const colorClass = cardColors[index % cardColors.length];
        const [textColor, bgColor] = colorClass.split(' ');

        return (
          <div
            key={`${service.title}-${index}`}
            className={`group flex gap-5 border-t-2 border-brand-900/25 py-7 transition-colors hover:border-brand-600`}
          >
            <div className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center ${bgColor} ${textColor}`}>
              <Icon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">{service.title}</h3>
              <p className="text-[#4f5750] leading-relaxed">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="services" className="py-20 bg-[#e9efe8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-600">What we do</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-brand-900 mb-4">Good ideas, made real.</h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions tailored to elevate your business in the modern digital landscape.
          </p>
        </div>

        {renderServiceGrid(services)}

        <div id="agentic-ai" className="mt-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-600">Agentic AI services</p>
            <h3 className="text-3xl md:text-4xl font-black tracking-[-0.04em] text-brand-900 mb-4">Automations that work like teammates.</h3>
            <p className="text-lg text-gray-600">
              Purpose-built AI agents for calls, chats, and business workflows that reduce manual effort while keeping your team in control.
            </p>
          </div>
          {renderServiceGrid(agenticAIServices)}
        </div>
      </div>
    </section>
  );
}
