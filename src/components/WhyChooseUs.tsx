import { motion } from "motion/react";
import { Target, FileCheck, Crown, Eye, Shield, MessageSquare } from "lucide-react";
import { reasonsData } from "../data";

export default function WhyChooseUs() {
  // Mapping custom indicators
  const getIcon = (id: string) => {
    switch (id) {
      case "reason-1":
        return <Target className="w-6 h-6 text-gold-400" />;
      case "reason-2":
        return <FileCheck className="w-6 h-6 text-gold-400" />;
      case "reason-3":
        return <Crown className="w-6 h-6 text-gold-400" />;
      case "reason-4":
        return <Eye className="w-6 h-6 text-gold-400" />;
      case "reason-5":
        return <Shield className="w-6 h-6 text-gold-400" />;
      case "reason-6":
        return <MessageSquare className="w-6 h-6 text-gold-400" />;
      default:
        return <Target className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-24 md:py-32 bg-[#060606] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-950/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 text-left" id="why-headings">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
              OUR STRATEGY
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
              Why Elite Innovators Partners With Fasco Talent Solution
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mt-4"></div>
          </div>
          <div className="lg:col-span-4 text-left" id="why-para">
            <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
              We operate at the nexus of expert data insights and high-end personal branding, ensuring job-seekers command premium salaries and business lines recruit top candidates.
            </p>
          </div>
        </div>

        {/* Reasons Grid Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-cards-grid">
          {reasonsData.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-8 rounded-sm border border-white/10 bg-zinc-950/40 hover:border-gold-400/40 hover:bg-zinc-900 group transition-all duration-300 relative overflow-hidden text-left"
            >
              {/* Number tag top right */}
              <span className="absolute top-6 right-8 font-mono text-[10px] text-zinc-600 group-hover:text-gold-400/50 transition-colors">
                0{idx + 1}
              </span>

              {/* Icon Box */}
              <div className="inline-flex p-3 bg-zinc-900 border border-white/10 rounded-sm group-hover:bg-gold-500/10 group-hover:border-gold-400/30 transition-all duration-300 mb-6">
                {getIcon(reason.id)}
              </div>

              {/* Core Text */}
              <h4 className="font-sans text-base font-bold text-white tracking-normal group-hover:text-gold-400 transition-colors duration-300">
                {reason.title}
              </h4>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mt-3">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
