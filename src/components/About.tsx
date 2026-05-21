import { motion } from "motion/react";
import { ShieldCheck, Award, FileSpreadsheet, Zap } from "lucide-react";
import { aboutAchievements } from "../data";

export default function About() {
  // Mapping achievement cards to fitting gold corporate icons
  const getIcon = (id: string) => {
    switch (id) {
      case "ach-1":
        return <Award className="w-6 h-6 text-gold-400" />;
      case "ach-2":
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case "ach-3":
        return <FileSpreadsheet className="w-6 h-6 text-gold-400" />;
      case "ach-4":
        return <Zap className="w-6 h-6 text-gold-400" />;
      default:
        return <Award className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-900/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gold-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Asymmetrical layered image collage */}
        <div className="lg:col-span-5 relative" id="about-collage-container">
          {/* Background offset grid frame */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-white/15"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-white/15"></div>
          
          <div className="relative">
            {/* Primary Portrait in Collage: Fawas Aderibigbe in action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-sm overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl shadow-black/80 group"
              id="about-image-primary"
            >
              <img
                src="/src/assets/images/regenerated_image_1779364252651.jpg"
                alt="Fasco Lead Executive Talent Specialist"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-750"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] uppercase tracking-widest font-mono text-gold-400">Founded with Purpose</span>
                <h3 className="text-white text-base font-medium mt-0.5">Corporate Headquarters</h3>
              </div>
            </motion.div>

            {/* Overlapping secondary image card (Younger profile representation) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-6 md:-right-10 w-44 md:w-56 overflow-hidden rounded-sm border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-black group hidden sm:block"
              id="about-image-overlay-1"
            >
              <div className="relative w-full h-full">
                <img
                  src="/src/assets/images/input_file_0.png"
                  alt="Talent assessment session"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[9px] font-mono text-gold-300">Client Strategy Co.</span>
                </div>
              </div>
            </motion.div>

            {/* Small floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-4 bg-zinc-950 border border-white/10 p-4 rounded-sm shadow-xl backdrop-blur-md hidden md:block"
              id="about-achievement-stat-badge"
            >
              <p className="font-display font-bold text-3xl text-gold-400 leading-none">95%</p>
              <p className="text-[10px] tracking-widest uppercase font-mono text-zinc-400 mt-1">Direct Placement</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Professional text explanation & achievements layout */}
        <div className="lg:col-span-7 flex flex-col justify-center" id="about-info-panel">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-gold-400">
              WHO WE ARE
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight mt-3">
              Elite Strategy For Career Landmarks & Dynamic Hiring
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-6"></div>
            
            <p className="font-sans text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              Fasco Talent Solution is a modern recruitment and career solutions firm focused on helping businesses secure exceptional talent while empowering job seekers to stand out in competitive markets. We specialize in strategic talent acquisition, resume writing, reverse recruiting, LinkedIn optimization, interview preparation, and candidate sourcing.
            </p>
          </motion.div>

          {/* Achievement cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10" id="about-achievements-cards-grid">
            {aboutAchievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-5 rounded-sm border border-white/10 bg-zinc-950/40 hover:border-gold-400/35 transition-all duration-300 shadow-md group text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-900 border border-white/10 rounded-sm group-hover:bg-gold-400/10 transition-colors duration-300">
                    {getIcon(ach.id)}
                  </div>
                  <h4 className="font-sans text-sm font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                    {ach.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mt-3 pl-1">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
