import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";

interface ContactProps {
  prepopulatedSubject?: string;
}

export default function Contact({ prepopulatedSubject = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "select",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync prop changes (when client selects a specific package or service)
  useEffect(() => {
    if (prepopulatedSubject) {
      setFormData((prev) => ({ ...prev, subject: prepopulatedSubject }));
      // Smoothly scroll to contact if trigger has run
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prepopulatedSubject]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address.";
    }
    if (formData.subject === "select") tempErrors.subject = "Please select a service or package of interest.";
    if (!formData.message.trim() || formData.message.length < 10) {
      tempErrors.message = "Please tell us a bit more about your goals (min 10 characters).";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mimic API post delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "select",
        message: ""
      });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-950/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-gold-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left panel: Info cards & Interactive Map Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-panel">
            <div className="text-left">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
                GET IN TOUCH
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mt-3">
                Ready To Elevate Your Career Or Hiring Strategy?
              </h2>
              <div className="w-16 h-[1px] bg-gold-400 mt-4 mb-6"></div>
              
              <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Reach out to schedule your confidential corporate talent review or executive career alignment checkpoint. Let us craft the path to your next milestone.
              </p>

              {/* Direct Info list item blocks */}
              <div className="space-y-6 mt-10">
                {/* Mail Item */}
                <div className="flex gap-4 items-start group">
                  <div className="p-3 bg-zinc-900 border border-white/10 text-gold-400 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-zinc-400 mt-0.5 tracking-wider uppercase">CONFIDENTIAL CLIENT INBOX</h4>
                    <a href="mailto:fascotalentsolution@gmail.com" className="font-mono text-xs text-gold-400 hover:text-white block mt-1 transition-colors">
                      fascotalentsolution@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex gap-4 items-start group">
                  <div className="p-3 bg-zinc-900 border border-white/10 text-gold-400 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-zinc-400 mt-0.5 tracking-wider uppercase">EXECUTIVE CALL CENTRE</h4>
                    <a href="tel:09035862939" className="font-mono text-xs text-gold-400 hover:text-white block mt-1 transition-colors">
                      09035862939
                    </a>
                  </div>
                </div>

                {/* Operations Hours */}
                <div className="flex gap-4 items-start group">
                  <div className="p-3 bg-zinc-900 border border-white/10 text-gold-400 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-zinc-400 mt-0.5 tracking-wider uppercase">OPERATIVE CO-HOURS</h4>
                    <span className="font-mono text-xs text-gold-400 block mt-1">
                      Monday – Friday: 08:00 AM – 06:00 PM (GMT+1)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Visual Card */}
            <div className="mt-12 group rounded-sm bg-zinc-950/40 border border-white/10 p-6 shadow-xl relative overflow-hidden text-left" id="contact-map-card">
              <div className="absolute inset-0 bg-[radial-gradient(#201c10_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-gold-400">
                  <MapPin className="w-4 h-4" />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">GLOBAL COORDINATES</span>
                </div>
                <h4 className="font-sans font-bold text-white tracking-wide text-sm">Abuja, Nigeria & Worldwide</h4>
                <p className="font-sans text-xs text-zinc-400 mt-2 font-light max-w-sm">
                  Strategic placement, ATS updates & remote headhunting support provided globally across UK, US, Canada, Europe, and GCC regions.
                </p>

                {/* Vector map representation */}
                <div className="h-20 bg-zinc-950 border border-white/10 rounded-sm mt-5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gold-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-gold-400 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                  <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                  <svg className="w-full h-full stroke-gold-900/40 fill-none" viewBox="0 0 400 100">
                    <path d="M10,20 Q60,80 120,40 T220,10 T320,80 T400,20" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M40,90 Q90,30 180,60 T280,30 T380,80" strokeWidth="1.5" strokeDasharray="4,4" />
                  </svg>
                  <span className="absolute bottom-2 right-3 text-[9px] font-mono text-zinc-500">Live Global Sourcing Mesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern Luxury Form */}
          <div className="lg:col-span-7" id="contact-form-layout">
            <div className="h-full bg-zinc-950/40 border border-white/10 rounded-sm p-8 md:p-10 shadow-2xl relative text-left">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form-entry"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Card */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alexander Sterling"
                          className={`w-full bg-zinc-900 border px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-sm focus:outline-none transition-all duration-300 ${
                            errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-400"
                          }`}
                        />
                        {errors.name && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-sans font-light">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email Card */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alexander@sterling.co"
                          className={`w-full bg-zinc-900 border px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-sm focus:outline-none transition-all duration-300 ${
                            errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-400"
                          }`}
                        />
                        {errors.email && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-sans font-light">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Code Card */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +234 80 0000 0000"
                          className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 rounded-sm focus:outline-none focus:border-gold-400 transition-colors duration-300"
                        />
                      </div>

                      {/* Topic Selector Card */}
                      <div className="flex flex-col">
                        <label htmlFor="subject" className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-2">
                          Core Service / package interest *
                        </label>
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full bg-zinc-900 border px-4 py-3 text-sm text-white rounded-sm appearance-none focus:outline-none transition-all duration-300 ${
                              errors.subject ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-400"
                            }`}
                          >
                            <option value="select">Select Topic...</option>
                            <option value="Resume Writing">Resume Writing Portfolio Case</option>
                            <option value="Reverse Recruiting">Reverse Recruiting Campaign</option>
                            <option value="LinkedIn Optimization">LinkedIn Optimization</option>
                            <option value="Interview Preparation">Interview Prep Intensive</option>
                            <option value="Talent Acquisition">Talent Sourcing & Enterprise Support</option>
                            <option value="Starter Package">Starter Package Package ($499)</option>
                            <option value="Professional Package">Professional Package ($999)</option>
                            <option value="Executive Service">Executive Package ($2,499)</option>
                            <option value="General Conversation">General Career / Hiring Inquiry</option>
                          </select>
                          {/* Chevron Indicator */}
                          <div className="absolute inset-y-0 right-4 flex items-center justify-center pointer-events-none text-gold-400">
                            ▼
                          </div>
                        </div>
                        {errors.subject && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-sans font-light">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Card */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-2">
                        Message & Core Project Goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Define your career targets, current blockages, or details of your corporate role vacancy requirements..."
                        className={`w-full bg-zinc-900 border px-4 py-3 text-sm text-white placeholder-zinc-700 rounded-sm focus:outline-none transition-all duration-300 resize-none ${
                          errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-400"
                        }`}
                      />
                      {errors.message ? (
                        <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-sans font-light">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </span>
                      ) : (
                        <span className="text-[10px] text-zinc-500 font-mono mt-1.5 block pr-1">
                          Min 10 characters descriptive summary
                        </span>
                      )}
                    </div>

                    {/* Submit Indicator */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4 rounded-sm font-bold tracking-widest uppercase text-xs text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300 flex justify-center items-center gap-2 pointer-events-auto cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>VALIDATING REQUISITIONS...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT CONSULTATION REQUEST</span>
                          <Send className="w-3.5 h-3.5 text-black" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col justify-center items-center text-center py-12"
                  >
                    <div className="p-4 bg-gold-400/15 border border-gold-400/40 text-gold-400 rounded-sm mb-6">
                      <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                    </div>
                    <h3 className="font-sans font-bold text-2xl text-white tracking-tight">
                      Consultation Request Registered
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed max-w-sm font-light">
                      Fasco Talent Solution has registered your secure parameters. Our Lead Strategist (Fawas Aderibigbe) or Sourcing Officer will review your assets and follow up via email within 12 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 px-6 py-2.5 text-xs tracking-widest uppercase font-bold text-gold-400 hover:text-black border border-white/10 hover:bg-gold-400 rounded-sm transition-all duration-200 pointer-events-auto cursor-pointer"
                    >
                      SUBMIT ANOTHER RECORD
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
