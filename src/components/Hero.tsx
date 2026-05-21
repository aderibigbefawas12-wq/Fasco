import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle, Quote } from "lucide-react";
import { heroStats } from "../data";

interface HeroProps {
  onBookConsultation: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onBookConsultation, onExploreServices }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#0d0d0d]"
    >
      {/* Clean Minimalism Ambient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400 opacity-[0.07] blur-[120px] rounded-full -mr-48 -mt-36 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400 opacity-[0.03] blur-[100px] rounded-full -ml-24 -mb-24 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
        {/* Left column: Text Information */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-text-block">
          {/* Subtle upper tag with Clean Minimalism stroke & spacing */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-gold-400"></div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
              EXECUTIVE CAREER ARCHITECTURE
            </span>
          </motion.div>

          {/* Core high-end headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]"
          >
            Connecting{" "}
            <span className="text-gold-400">
              Exceptional
            </span>{" "}
            Talent With Meaningful Opportunities
          </motion.h1>

          {/* Executive Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl"
          >
            Fasco Talent Solution helps professionals and companies succeed through elite
            talent acquisition, reverse recruiting, and strategic career branding for modern leaders.
          </motion.p>

          {/* Featured Article Spotlight Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            onClick={() => {
              const element = document.getElementById("insights");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-zinc-950/60 border border-white/10 hover:border-gold-400/30 p-4 rounded-sm max-w-xl group cursor-pointer transition-all duration-300 shadow-xl"
            id="hero-featured-article-block"
          >
            <div className="flex items-center gap-2">
              <span className="bg-gold-400 text-black text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-sm">
                FEATURED
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">INSIGHTS</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-sans text-zinc-300 group-hover:text-gold-400 transition-colors font-bold truncate line-clamp-1">
                How AI and ATS Algorithms Filter 85% of Executive Resumes
              </h4>
              <p className="text-[10px] font-sans text-zinc-500 font-light mt-0.5 group-hover:text-zinc-400 transition-colors">
                Bypass traditional gatekeepers with custom optimization architectures.
              </p>
            </div>
            <div className="text-zinc-500 group-hover:text-gold-400 transition-colors text-xs font-mono self-end sm:self-center">
              READ &rarr;
            </div>
          </motion.div>

          {/* Action buttons with Clean Minimalism sharp rounded-sm borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
            id="hero-buttons"
          >
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase text-black bg-gold-400 hover:bg-gold-300 shadow-md hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer"
              id="hero-cta-main"
            >
              Book Consultation
            </button>
            <button
              onClick={onExploreServices}
              className="px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase text-gold-400 hover:text-white bg-transparent border border-gold-400 hover:bg-gold-400/10 transition-all duration-300 pointer-events-auto cursor-pointer"
              id="hero-cta-sec"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Subtle Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 flex items-center gap-2 group text-xs font-mono text-gray-400"
          >
            <CheckCircle className="w-4 h-4 text-gold-500" />
            <span>Trusted partner for executive search & placement worldwide.</span>
          </motion.div>
        </div>

        {/* Right column: Beautiful collage of the 4 team members */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative mt-8 lg:mt-0"
          id="hero-image-block"
        >
          {/* Decorative frame rings - elegant minimal sharp borders */}
          <div className="absolute -inset-4 border border-white/5 rounded-sm pointer-events-none scale-102"></div>

          {/* Interactive Bento Portrait Showcase Grid */}
          <div className="relative grid grid-cols-2 gap-3 bg-zinc-950/40 backdrop-blur-md p-4 rounded-sm border border-white/10 shadow-2xl shadow-black/90">
            {/* Cell 1: Fawas Aderibigbe (Lead Portrait) */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group hover:border-gold-400/40 transition-colors duration-500">
              <img
                src="/src/assets/images/regenerated_image_1779364252651.jpg"
                alt="Fawas Aderibigbe - Founder"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="block text-[11px] font-bold tracking-tight text-white uppercase leading-none">
                  Fawas A.
                </span>
                <span className="block text-[8px] font-mono text-gold-400 uppercase mt-0.5 tracking-wider font-semibold">
                  Founder & Lead Strategist
                </span>
              </div>
            </div>

            {/* Cell 2: CPRW Specialist */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group hover:border-gold-400/40 transition-colors duration-500">
              <img
                src="/src/assets/images/input_file_1.png"
                alt="CPRW and Corporate Resume Writer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="block text-[11px] font-bold tracking-tight text-white uppercase leading-none">
                  Certified Writer
                </span>
                <span className="block text-[8px] font-mono text-gold-400 uppercase mt-0.5 tracking-wider font-semibold">
                  ATS & Career Specialist
                </span>
              </div>
            </div>

            {/* Cell 3: Talent Sourcer */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group hover:border-gold-400/40 transition-colors duration-500">
              <img
                src="/src/assets/images/regenerated_image_1779364256519.jpg"
                alt="Talent Acquisition Lead"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="block text-[11px] font-bold tracking-tight text-white uppercase leading-none">
                  TA Specialist
                </span>
                <span className="block text-[8px] font-mono text-gold-400 uppercase mt-0.5 tracking-wider font-semibold">
                  Sourcing & Sift Lead
                </span>
              </div>
            </div>

            {/* Cell 4: Executive Coaching / Advisor */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group hover:border-gold-400/40 transition-colors duration-500">
              <img
                src="/src/assets/images/input_file_0.png"
                alt="Consolidated Consulting Team"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="block text-[11px] font-bold tracking-tight text-white uppercase leading-none">
                  Strategic Advisor
                </span>
                <span className="block text-[8px] font-mono text-gold-400 uppercase mt-0.5 tracking-wider font-semibold">
                  Reverse Sourcing Expert
                </span>
              </div>
            </div>

            {/* Float Badge inside Grid */}
            <div className="absolute -top-4 -right-4 bg-gold-400 text-black font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 shadow-lg shadow-black/70 rounded-sm flex items-center gap-1.5 border border-white/10">
              <Quote className="w-2.5 h-2.5 text-black" /> ATS Certified
            </div>
          </div>
        </motion.div>
      </div>

      {/* Under-Hero statistics section styled luxury-bento */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 mt-16 md:mt-24" id="hero-stats-panel">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 text-center">
          {heroStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col items-center p-4 rounded-xl hover:bg-gold-950/10 transition-colors duration-300"
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-gold-400 tracking-tight block group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold tracking-wider text-white uppercase mt-2">
                {stat.label}
              </span>
              <span className="font-sans text-[11px] text-gray-400 font-light mt-1 hidden md:block max-w-[200px]">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
