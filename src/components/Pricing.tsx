import { motion } from "motion/react";
import { Check, Flame, Award } from "lucide-react";
import { pricingPlans } from "../data";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Decorative backing meshes */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-950/5 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24" id="pricing-headings">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            INVESTMENT TIERS
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            Premium Career Branding Capital
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Transparent, performance-driven investment modules built for elite executives commanding top compensation tiers and aggressive corporate talent initiatives.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="pricing-cards-grid">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group flex flex-col justify-between p-8 rounded-sm transition-all duration-300 relative text-left bg-zinc-950/40 ${
                plan.popular
                  ? "border-2 border-gold-400 shadow-2xl lg:scale-105 bg-zinc-950"
                  : "border border-white/10 hover:border-gold-400/40 hover:bg-zinc-900"
              }`}
            >
              <div>
                {/* Popularity Badge Floating */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-black text-[9px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md rounded-sm flex items-center gap-1.5 border border-white/10">
                    <Flame className="w-3.5 h-3.5 fill-black" /> HIGHLY RECOMMENDED
                  </div>
                )}

                {/* Platinum Tier Badge */}
                {!plan.popular && idx === 2 && (
                  <div className="absolute top-6 right-6 text-gold-400">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                )}

                {/* Card Title & Cost parameters */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-gold-400 uppercase font-bold tracking-wider block">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline mt-3">
                    <span className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono tracking-wide ml-2">
                       / {plan.billing}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-zinc-400 mt-4 leading-relaxed font-light">
                    {plan.description}
                  </p>
                </div>

                <div className="h-[1px] bg-white/10 my-6"></div>

                {/* Features checklists */}
                <ul className="space-y-4 mb-8" id={`features-list-${plan.id}`}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 p-0.5 rounded-sm bg-zinc-900 border border-white/10 text-gold-400">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-xs text-zinc-300 font-light leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action purchase selection link */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-4 text-center text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 flex justify-center items-center pointer-events-auto cursor-pointer ${
                  plan.popular
                    ? "text-black bg-gold-400 hover:bg-gold-500 shadow-md"
                    : "text-white bg-transparent border border-white/10 hover:border-gold-400/40 hover:bg-zinc-800"
                }`}
              >
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
