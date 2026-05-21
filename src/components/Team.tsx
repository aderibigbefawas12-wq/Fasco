import { motion } from "motion/react";
import { Linkedin, Twitter, Sparkles, Mail } from "lucide-react";
import { teamMembers } from "../data";

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Decorative gradient glowing backing for luxury element */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-950/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gold-900/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24" id="team-headings">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            THE STRATEGISTS
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            Elite Corporate Sourcing Officers & Career Brands
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Meet the architectural minds behind our placement frameworks, resume engineering formulas, and executive search operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="team-cards-grid">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-sm bg-zinc-950/40 border border-white/10 hover:border-gold-400/40 p-4 transition-all duration-300 shadow-xl hover:bg-zinc-900 text-left"
            >
              <div>
                {/* Premium Image Frame */}
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                  {/* Top-Right Sparkle Emblem on Founder Card only */}
                  {idx === 0 && (
                    <div className="absolute top-3 right-3 bg-zinc-950 border border-gold-400/50 p-1.5 rounded-sm shadow shadow-black">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                    </div>
                  )}
                </div>

                {/* Team Info block */}
                <div className="mt-5 px-1">
                  <h3 className="font-sans text-base font-bold text-white tracking-normal group-hover:text-gold-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="block text-[10px] font-mono text-gold-400 uppercase font-semibold mt-1 tracking-wider leading-none">
                    {member.role}
                  </span>
                  <p className="font-sans text-xs text-zinc-400 font-light mt-4 leading-relaxed line-clamp-4">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Social Media footer rail */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10 px-1">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black text-zinc-400 border border-white/10 hover:border-gold-400 transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black text-zinc-400 border border-white/10 hover:border-gold-400 transition-all duration-300"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="p-2 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black text-zinc-400 border border-white/10 hover:border-gold-400 transition-all duration-300 ml-auto"
                  aria-label={`Get and contact ${member.name}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
