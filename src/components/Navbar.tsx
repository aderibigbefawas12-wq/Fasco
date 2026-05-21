import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Briefcase } from "lucide-react";
import { navigationItems } from "../data";

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Track scroll status for glassmorphism background and active anchor
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = navigationItems.map((item) => {
        const id = item.href.slice(1);
        return document.getElementById(id);
      });

      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveHash(navigationItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveHash(href);
    const targetElement = document.getElementById(href.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      id="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070707]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Emblem Logo to match Clean Minimalism */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-8 h-8 bg-gold-400 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white text-black font-bold text-lg">
            F
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-bold text-base leading-none tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors">
              FASCO <span className="text-gold-400 text-xs tracking-widest font-light font-mono pl-1">TALENT</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-bold mt-0.5">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop Links with Clean spacing and flat styling */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 link-glow ${
                activeHash === item.href ? "text-gold-400" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Get Started Button - Clean Minimalism style */}
        <div className="hidden lg:flex items-center" id="nav-cta-wrapper">
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-gold-400 text-black font-bold rounded-sm text-xs tracking-wider uppercase hover:bg-gold-500 transition-all duration-300 pointer-events-auto cursor-pointer"
            id="nav-get-started-btn"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-gold-400 p-2 transition-colors duration-200"
          aria-label="Toggle mobile menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`text-xs uppercase font-bold tracking-widest py-1.5 transition-colors ${
                    activeHash === item.href ? "text-gold-400 pl-2 border-l border-gold-400" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="mt-2 w-full py-2.5 text-center text-xs tracking-widest uppercase font-bold text-black bg-gold-400 rounded-sm"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
