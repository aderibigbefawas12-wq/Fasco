import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleInquireService = (title: string) => {
    setSelectedSubject(title);
    scrollToSection("contact");
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedSubject(packageName);
    scrollToSection("contact");
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-100 selection:bg-gold-500 selection:text-black">
      {/* Sticky elegant glass navigation bar */}
      <Navbar onGetStarted={() => scrollToSection("contact")} />

      <main className="relative z-10" id="main-content">
        {/* Cinematic hero screen with floating grids and stats parameters */}
        <Hero
          onBookConsultation={() => scrollToSection("contact")}
          onExploreServices={() => scrollToSection("services")}
        />

        {/* Brand narrative and achievement grids */}
        <About />

        {/* Dynamic capabilities grid and collateral downloads */}
        <Services onInquire={handleInquireService} />

        {/* Strategic proof markers and focus targets */}
        <WhyChooseUs />

        {/* Verified human profile grid (featuring provided team portraits) */}
        <Team />

        {/* Tactical corporate blogs, intelligence, and news alerts */}
        <Insights />

        {/* Transparency price cards preconfigured for selection */}
        <Pricing onSelectPlan={handleSelectPackage} />

        {/* Interactive testimonial feedback cards and dot indices */}
        <Testimonials />

        {/* Expandable answers & questions list */}
        <FAQ />

        {/* Secure consultation booker scheduling sidebar */}
        <Contact prepopulatedSubject={selectedSubject} />
      </main>

      {/* Corporate footer and sitemap index */}
      <Footer />
    </div>
  );
}
