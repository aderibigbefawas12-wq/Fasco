import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const startTimer = () => {
    clearTimer();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000); // 6s interval for luxury scroller
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const handlePrev = () => {
    clearTimer();
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    startTimer();
  };

  const handleNext = () => {
    clearTimer();
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    startTimer();
  };

  const handleSelect = (idx: number) => {
    clearTimer();
    setActiveIndex(idx);
    startTimer();
  };

  const current = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#060606] overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-950/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20" id="testimonials-headings">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            TESTIMONIALS
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
            What Corporate Leaders Say
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-5"></div>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
            Consistently delivering high-impact brand portfolios that capture attention and securing rare passive candidates that solve immediate staffing blockages.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-4xl relative min-h-[380px] md:min-h-[300px] flex items-center justify-center">
          
          {/* Main Slide Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-zinc-950/40 border border-white/10 rounded-sm p-8 md:p-12 shadow-2xl shadow-black/90 backdrop-blur-md relative flex flex-col md:flex-row gap-8 items-center md:items-start text-left"
              id="active-testimonial-card"
            >
              {/* Giant gold quote icon */}
              <div className="absolute top-6 right-8 text-gold-500/10 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              {/* User Rating and metadata */}
              <div className="flex flex-col items-center md:items-start md:w-3/4">
                <div className="flex items-center gap-1 text-gold-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <blockquote className="font-sans text-lg md:text-xl text-zinc-200 font-light leading-relaxed italic">
                  “{current.quote}”
                </blockquote>

                <div className="mt-8">
                  <cite className="not-italic font-sans text-base font-bold text-white tracking-wide block">
                    {current.author}
                  </cite>
                  <span className="text-xs font-mono text-gold-400 uppercase font-semibold mt-1 inline-block tracking-wide">
                    {current.role}
                    {current.company && <span className="text-zinc-500 font-sans"> at {current.company}</span>}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls floating inside the row */}
          <div className="absolute -bottom-16 md:bottom-auto md:right-4 flex items-center gap-2 z-20">
            <button
              onClick={handlePrev}
              className="p-3 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-black rounded-sm hover:bg-gold-400 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
              id="testimonial-control-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-black rounded-sm hover:bg-gold-400 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
              id="testimonial-control-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Indicator dots */}
        <div className="flex items-center justify-center gap-3 mt-12 md:mt-8" id="testimonial-indicators">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`h-1 transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-gold-400" : "w-2 bg-zinc-800 hover:bg-zinc-650"
              }`}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
