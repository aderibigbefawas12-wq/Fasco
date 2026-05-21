import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, User, ArrowRight, X, Calendar, ChevronRight } from "lucide-react";
import { insightsArticles } from "../data";
import { InsightArticle } from "../types";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ["All", "Career Advice", "Hiring Trends", "Company News"];

  const filteredArticles = selectedCategory === "All"
    ? insightsArticles
    : insightsArticles.filter(art => art.category === selectedCategory);

  // Esc key closes active modal article reader
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveArticle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="insights"
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glowing radial effects */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold-950/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gold-900/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20" id="insights-headings">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            TACTICAL INTELLIGENCE
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            Fasco Career & Sourcing Insights
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Stay ahead of hiring markets with comprehensive system updates, ATS diagnostics, and recruitment strategy briefings from our primary analysts.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="insights-category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 pointer-events-auto cursor-pointer border ${
                selectedCategory === category
                  ? "bg-gold-400 text-black border-gold-400 shadow-md"
                  : "bg-zinc-950/40 text-zinc-400 border-white/10 hover:text-white hover:border-gold-400/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="insights-articles-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, idx) => (
              <motion.div
                layout
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-sm bg-zinc-950/40 border border-white/10 hover:border-gold-400/40 transition-all duration-300 p-4 shadow-xl hover:bg-zinc-900 text-left cursor-pointer"
                onClick={() => setActiveArticle(article)}
              >
                <div>
                  {/* Aspect Locked Photo banner */}
                  <div className="relative aspect-[16/10] bg-zinc-900 rounded-sm overflow-hidden border border-white/5 mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 group-hover:brightness-100 transition-all duration-750"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-zinc-950/90 text-[9px] font-mono tracking-wider font-bold text-gold-400 border border-white/10 px-2 py-1 rounded-sm uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Metadata labels */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-gold-400" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-gold-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Headline & Abstract Excerpt */}
                  <div className="px-1">
                    <h3 className="font-sans text-base font-bold text-white group-hover:text-gold-400 transition-colors duration-300 tracking-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 font-light mt-3 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Foot Action Anchor */}
                <div className="flex items-center gap-1.5 text-xs text-gold-400 font-bold tracking-widest uppercase mt-6 pt-4 border-t border-white/10 px-1 group-hover:text-white transition-colors">
                  <span>READ ANALYSIS</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Embedded Slide-Over Modal Reader for Single Page Perfection */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop glass blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
            />

            {/* Slide-out reading board panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-[#0a0a0a] border-l border-white/10 overflow-y-auto shadow-2xl z-10 p-6 md:p-10 text-left pointer-events-auto flex flex-col justify-between"
              id="insights-active-modal"
            >
              <div>
                {/* Header controls bar */}
                <div className="flex justify-between items-center pb-6 border-b border-light/10 mb-8 mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono border border-gold-400/40 text-gold-400 rounded-sm px-2py-1 uppercase font-bold tracking-widest px-2.5 py-1 text-xs">
                      {activeArticle.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 border border-white/15 rounded-sm hover:border-gold-400 text-zinc-400 hover:text-gold-400 transition-all pointer-events-auto cursor-pointer"
                    aria-label="Close reading pane"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Hero Header Photo */}
                <div className="relative w-full aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden border border-white/5 mb-8">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>

                {/* Date & Author labels */}
                <div className="flex flex-wrap gap-6 items-center text-xs font-mono text-zinc-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gold-400" />
                    <span>Written by {activeArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{activeArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Large responsive core article headline */}
                <h1 className="font-sans font-bold text-2xl md:text-3.5xl text-white tracking-tight leading-tight mt-2 mb-6">
                  {activeArticle.title}
                </h1>

                {/* Content parsing loop */}
                <div className="prose prose-invert max-w-none text-zinc-300 font-sans text-sm md:text-base leading-relaxed space-y-6 font-light">
                  {activeArticle.content.split("\n\n").map((para, pIdx) => {
                    if (para.startsWith("### ")) {
                      return (
                        <h3 key={pIdx} className="font-sans font-bold text-lg text-white mt-8 tracking-wide uppercase text-gold-400/95">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (para.startsWith("* ") || para.startsWith("1. ")) {
                      const items = para.split("\n");
                      return (
                        <ul key={pIdx} className="space-y-3 pl-5 list-disc marker:text-gold-400">
                          {items.map((it, iIdx) => (
                            <li key={iIdx} className="text-zinc-300 font-light text-sm md:text-base">
                              {it.replace(/^\* |^\d+\.\s+/, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-zinc-300 font-light">
                        {para}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Close controls block */}
              <div className="border-t border-white/10 mt-12 pt-6 flex justify-between items-center text-xs text-zinc-500 font-mono">
                <span>© 2026 Fasco Intelligence Reports</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="flex items-center gap-1.5 hover:text-gold-400 transition-colors pointer-events-auto cursor-pointer font-bold tracking-widest uppercase"
                >
                  <span>CLOSE ANALYSIS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
