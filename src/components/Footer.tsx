import { Briefcase, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { navigationItems } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-8 overflow-hidden text-left" id="footer">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        
        {/* Brand identity column */}
        <div className="md:col-span-4" id="footer-col-1">
          <a href="#home" className="flex items-center gap-3 group mb-6 inline-block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <div className="w-8 h-8 bg-gold-400 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white text-black font-bold text-lg">
              F
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-base leading-none tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors">
                FASCO <span className="text-gold-400 text-xs tracking-widest font-light font-mono pl-1">TALENT</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </a>
          <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-6 pr-4">
            Helping standard-setters and scaling enterprises recruit top talent, compile high-conversion resumes, and dominate search optimization networks globally.
          </p>
          
          {/* Social Icons inside Footer */}
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black border border-white/10 text-zinc-400 transition-all duration-300" aria-label="LinkedIn Profile link">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black border border-white/10 text-zinc-400 transition-all duration-300" aria-label="Twitter Profile link">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-sm bg-zinc-900 hover:bg-gold-400 hover:text-black border border-white/10 text-zinc-400 transition-all duration-300" aria-label="Instagram Profile link">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links block */}
        <div className="md:col-span-3 md:col-start-6" id="footer-col-2">
          <h4 className="font-sans font-bold text-xs text-white tracking-[0.2em] uppercase mb-6 border-b border-white/10 pb-2 inline-block">
            CORPORATE DIRECTORY
          </h4>
          <ul className="space-y-3 font-sans text-xs text-zinc-400 font-light" id="footer-links-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-gold-400 hover:pl-1 transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services mapping quick block */}
        <div className="md:col-span-3" id="footer-col-3">
          <h4 className="font-sans font-bold text-xs text-white tracking-[0.2em] uppercase mb-6 border-b border-white/10 pb-2 inline-block">
            TACTICAL SOLUTIONS
          </h4>
          <ul className="space-y-3 font-sans text-xs text-zinc-400 font-light" id="footer-srv-links">
            <li>
              <a href="#services" className="hover:text-gold-400 hover:pl-1 transition-all">Resume Writing Portfolio</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-400 hover:pl-1 transition-all">Reverse Recruiting Sprints</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-400 hover:pl-1 transition-all">Senior Candidate Sourcing</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-400 hover:pl-1 transition-all">LinkedIn SEO Optimization</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-400 hover:pl-1 transition-all">Enterprise Recruiting Consult</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Corporate copyright and back to CITADEL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="h-[1px] bg-white/10 my-4"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center mt-6">
          <p className="font-sans text-[11px] text-zinc-500 font-light">
            © 2026 Fasco Talent Solution. All rights reserved. Devised as an elite executive recruitment & career placement agency.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-zinc-900 border border-white/10 text-zinc-400 hover:text-black hover:bg-gold-400 text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 pointer-events-auto cursor-pointer"
            id="footer-scroll-top-btn"
          >
            <span>BACK TO CITADEL</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
