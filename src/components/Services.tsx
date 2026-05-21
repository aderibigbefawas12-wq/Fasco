import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { servicesData } from "../data";

interface ServicesProps {
  onInquire: (serviceTitle: string) => void;
}

export default function Services({ onInquire }: ServicesProps) {
  // Utility to grab any Lucide icon matching our registry keywords dynamically
  const renderIcon = (iconName: string) => {
    // Falls back to Briefcase if there's any typo or missing name
    const LucideIcon = (Icons as Record<string, any>)[iconName] || Icons.Briefcase;
    return <LucideIcon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-305" />;
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#070707] overflow-hidden"
    >
      {/* Background radial accent to give section premium depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-950/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24" id="services-headings">
          <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-gold-400">
            OUR CAPABILITIES
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            Premium Career & Strategy Architecture
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Deploying sophisticated branding systems for global applicants and rigorous, high-velocity candidate sourcing filters for expanding enterprises.
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
          {servicesData.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 rounded-sm border border-white/10 bg-zinc-950/40 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/40 hover:bg-zinc-900"
            >
              <div className="text-left">
                {/* Animated icon holder */}
                <div className="inline-flex items-center justify-center p-3.5 bg-zinc-900 rounded-sm border border-white/10 mb-5 group-hover:bg-gold-500/10 group-hover:border-gold-400/30 transition-all duration-300">
                  {renderIcon(srv.iconName)}
                </div>

                <h3 className="font-sans text-base font-bold text-white tracking-normal group-hover:text-gold-400 transition-colors duration-300">
                  {srv.title}
                </h3>

                <p className="font-sans text-xs text-zinc-400 mt-4 leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* Micro Accordion Details: Key Deliverables */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4af37] uppercase block mb-2.5">
                    KEY DELIVERABLES
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-zinc-400 font-light font-sans">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-gold-400 mt-1 block">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action/Inquire Button integrated on card */}
              <button
                onClick={() => onInquire(srv.title)}
                className="mt-6 w-full py-2.5 text-center text-[10px] tracking-widest uppercase font-mono font-bold text-zinc-400 group-hover:text-black border border-white/10 hover:border-gold-400 hover:bg-gold-400 transition-all duration-300 rounded-sm cursor-pointer"
              >
                Inquire Service
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
