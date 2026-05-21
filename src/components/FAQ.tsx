import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqsData } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first FAQ item

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#060606] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-950/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20" id="faq-headings">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            Demystifying Executive Hiring
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Everything you need to know about our sourcing pipelines, resume writing strategies, and our unique reverse-recruiting campaigns.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 text-left" id="faq-accordions-list">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-950 border-white/20"
                    : "bg-zinc-950/40 border-white/10 hover:border-gold-400/30"
                }`}
              >
                {/* Header Toggle bar */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 text-left transition-colors duration-200 pointer-events-auto cursor-pointer"
                  id={`faq-toggle-btn-${idx}`}
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-white hover:text-gold-400 transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-sm bg-zinc-900 border border-white/10 text-zinc-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-black bg-gold-400 border-gold-400" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated expandable body height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-white/10 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support footer */}
        <div className="mt-12 text-center" id="faq-direct-prompt">
          <p className="font-sans text-xs text-gray-500">
            Have a different question about candidate placement or career development?{" "}
            <a href="#contact" className="text-gold-400 hover:text-gold-300 underline font-medium underline-offset-4 pl-1">
              Connect directly with our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
