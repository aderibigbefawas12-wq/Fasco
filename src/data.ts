import { NavItem, StatItem, AchievementCard, TeamMember, ServiceItem, StrategyItem, TestimonialItem, PricingPlan, FAQItem, InsightArticle } from "./types";

export const navigationItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Insights", href: "#insights" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const heroStats: StatItem[] = [
  { id: "stat-1", value: "500+", label: "Resumes Optimized", description: "ATS-compliant resumes written for multi-sector professionals." },
  { id: "stat-2", value: "200+", label: "Professionals Assisted", description: "Job-seekers landed in target enterprise roles." },
  { id: "stat-3", value: "95%", label: "Client Satisfaction", description: "Consistently rated 5-star for branding and response times." },
  { id: "stat-4", value: "Elite", label: "Recruitment Support", description: "Sourcing and end-to-end recruitment with bespoke strategist attention." }
];

export const aboutAchievements: AchievementCard[] = [
  { id: "ach-1", title: "Recruitment Excellence", description: "Connecting top brands with top-tier industry executives." },
  { id: "ach-2", title: "Executive Career Branding", description: "Cultivating high-converting executive digital personas." },
  { id: "ach-3", title: "Professional Resume Writing", description: "Bespoke ATS-engineered formatting with striking layout aesthetics." },
  { id: "ach-4", title: "Talent Strategy Solutions", description: "Custom market research and placement algorithms for enterprises." }
];

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Fawas Aderibigbe",
    role: "Founder & Lead Talent Strategist",
    image: "/src/assets/images/regenerated_image_1779364252651.jpg",
    description: "Vision-driven recruitment professional specializing in talent acquisition, executive sourcing, reverse recruiting, and strategic career positioning.",
    linkedin: "https://linkedin.com/in/fawas-aderibigbe",
    twitter: "https://twitter.com/fawas_talent"
  },
  {
    id: "team-2",
    name: "Certified Specialist",
    role: "Lead CPRW & Career Specialist",
    image: "/src/assets/images/input_file_1.png",
    description: "Specialized in ATS-optimized resumes, LinkedIn optimization, career branding, and interview preparation for professionals across industries.",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    id: "team-3",
    name: "Sourcing & Strategy Analyst",
    role: "Talent Acquisition Specialist",
    image: "/src/assets/images/regenerated_image_1779364256519.jpg",
    description: "Focused on candidate sourcing, recruitment strategy, employer branding, and connecting companies with qualified professionals.",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    id: "team-4",
    name: "Consulting Lead",
    role: "Reverse Recruiting Consultant",
    image: "/src/assets/images/input_file_0.png",
    description: "Specialist in proactive outreach campaigns, recruiter communication bypass, and customized placement pathways for global consultants.",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Resume Writing",
    description: "Premium ATS-engineered and human-polished professional resumes. Structured to emphasize achievements, metrics, leaderboards, and key competencies.",
    iconName: "FileText",
    deliverables: ["ATS-optimized Master Resume", "Targeted cover letter template", "Custom editable layout in DOCX", "SEO-keyword diagnostic card"]
  },
  {
    id: "srv-2",
    title: "Reverse Recruiting",
    description: "We apply for you. Our recruitment researchers search, filter, bypass the queue, and directly message high-intent decision-makers on your behalf.",
    iconName: "Compass",
    deliverables: ["100+ applications submitted monthly", "Direct-to-recruiter email sequencing", "Custom target list dashboard", "Direct inbox synchronization"]
  },
  {
    id: "srv-3",
    title: "Talent Acquisition",
    description: "Full-lifecycle solutions for enterprises. We find, screen, qualify, and handle initial negotiations for executive status applicants.",
    iconName: "Briefcase",
    deliverables: ["Custom candidate pipeline curation", "Preliminary screening & interviews", "Skill & cultural fit diagnostics", "Salary negotiation facilitation"]
  },
  {
    id: "srv-4",
    title: "LinkedIn Optimization",
    description: "Complete rebuild of your LinkedIn profile. Designed to trigger recruiter algorithms, maximize passive inquiries, and display elite authority.",
    iconName: "Linkedin",
    deliverables: ["SEO-optimized headline structure", "Compelling story-form summary", "Experience section key-phasing", "Social proof and engagement checklist"]
  },
  {
    id: "srv-5",
    title: "Candidate Sourcing",
    description: "Hyper-focused research strategies outlining profiles of active and passive talent, ensuring the perfect roster for difficult vacancies.",
    iconName: "Users",
    deliverables: ["Pre-qualified candidate rosters", "Validated email & coordinate cards", "Initial touch engagement strategy", "Continuous market mapping data"]
  },
  {
    id: "srv-6",
    title: "Interview Preparation",
    description: "Strategic coaching from recruitment insiders. Master STAR frameworks, difficult cross-examinations, and modern salary negotiations.",
    iconName: "UserCheck",
    deliverables: ["1-on-1 video simulation feedback", "Industry-specific question blueprints", "Confidential compensation playbooks", "Body language and vocal training"]
  },
  {
    id: "srv-7",
    title: "Career Consulting",
    description: "Diagnostic assessment of your career goals, market value tracking, and transition planning when shifting verticals or industries.",
    iconName: "TrendingUp",
    deliverables: ["Comprehensive custom career audit", "Target market expansion model", "Vertical-shift skills translation", "12-month career growth schedule"]
  },
  {
    id: "srv-8",
    title: "Recruitment Support",
    description: "Bespoke support for scaling businesses: composing high-converting job designs, evaluating internal systems, and establishing robust screening templates.",
    iconName: "Settings",
    deliverables: ["High-conversion job descriptors", "Custom scoring rubric spreadsheets", "ATS process flow diagnosis", "Third-party recruitment auditing"]
  }
];

export const reasonsData: StrategyItem[] = [
  { id: "reason-1", title: "Personalized Recruitment Strategy", description: "No templates or generic checklists. We craft highly individualized tactical campaigns based on your precise goals." },
  { id: "reason-2", title: "ATS-Friendly Resume Expertise", description: "We understand the precise parse mechanics of major software like Workday, Taleo, and Greenhouse so you never get black-holed." },
  { id: "reason-3", title: "Professional Career Branding", description: "We position our clients as rare top-1% leaders, upgrading language, layout, and visual flow to match the C-suite." },
  { id: "reason-4", title: "High-Quality Candidate Sourcing", description: "Our extensive internal databases and direct headhunting networks connect companies to exceptional passive candidates." },
  { id: "reason-5", title: "Executive-Level Support", description: "You gain access to direct advisors with pedigree who deliver white-glove consulting and high-privacy counsel." },
  { id: "reason-6", title: "Fast & Reliable Communication", description: "Updates within hours, persistent progress reports, and a dedicated Slack/WhatsApp link for absolute responsiveness." }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Fasco Talent Solution transformed my resume and LinkedIn profile completely. I started getting interview invitations from premier tech firms within weeks. The investment paid for itself ten times over.",
    author: "Elena Vasquez",
    role: "Lead Marketing Director",
    company: "Apex Global Group",
    rating: 5
  },
  {
    id: "test-2",
    quote: "Their reverse recruiting strategy helped me secure better opportunities faster than I expected. They bypassed standard application portals and got me interviews with hiring managers directly.",
    author: "David Adebayor",
    role: "Senior Project Manager",
    company: "NextGen Construction",
    rating: 5
  },
  {
    id: "test-3",
    quote: "Professional, responsive, and highly skilled in talent sourcing and recruitment support. Fasco represents the gold standard in recruitment consultancy. Their team understands tech hiring inside out.",
    author: "Marcus Chen",
    role: "HR Director",
    company: "Innovate Fintech Inc.",
    rating: 5
  },
  {
    id: "test-4",
    quote: "Working with Fawas was a masterclass in career positioning. He dissected my career milestones, refined my executive voice, and rebuilt my profile so cleanly that recruiters began finding me passively daily.",
    author: "Samantha Sterling",
    role: "Chief Operations Officer",
    company: "Horizon Energy Group",
    rating: 5
  },
  {
    id: "test-5",
    quote: "As an enterprise client, we've sourced three critical engineering leads through Fasco's strategic sourcing services. The speed and quality of candidates delivered was exceptional.",
    author: "Benjamin Thorne",
    role: "VP of Engineering",
    company: "Cipher Technologies",
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "pkg-1",
    name: "Mid-Senior Level",
    price: "$499",
    billing: "One-Time Investment",
    description: "Engineered for high-performing mid-level managers, tech leads, and rising senior specialists scaling towards top management tiers.",
    features: [
      "ATS-Engineered Professional Resume",
      "High-Conversion Custom Cover Letter Blueprint",
      "Comprehensive LinkedIn Search-Keyword Injection",
      "Optimized Profile Bio and Headline Alignment",
      "7-Day Post-Delivery Revision Window",
      "Strategic Interview Answer Preparation Guideline"
    ],
    popular: false,
    ctaText: "Initiate Mid-Senior Edge"
  },
  {
    id: "pkg-2",
    name: "Executive Director Level",
    price: "$1,250",
    billing: "One-Time Investment",
    description: "Our highly sought-after tier. Full hands-on strategic positioning and career coaching for VPs, Managing Directors, and Business Leaders.",
    features: [
      "Everything in the Mid-Senior level",
      "Certified CPRW Executive Talent Writer Assignment",
      "Complete Done-For-You LinkedIn Profile Setup",
      "Executive Bio & Global Core Competencies Matrix",
      "60-Min 1-on-1 Interview Tactical Strategy Run",
      "Priority Queue Delivery (3-5 Business Days)"
    ],
    popular: true,
    ctaText: "Command Directory Presence"
  },
  {
    id: "pkg-3",
    name: "CEO & Board Level",
    price: "$2,950",
    billing: "One-Time / Full Concierge",
    description: "Elite bespoke campaign for Chief Officers, founders, and boardroom members seeking discrete Placement and high-stakes package negotiation coaching.",
    features: [
      "Everything in the Executive Director level",
      "Bespoke Chief-Suite Positioning Blueprint",
      "Proactive Reverse Sourcing Campaign (120+ applications)",
      "Confidential Gatekeeper-Bypass Recruiter Outreach",
      "High-Stakes Salary & Executive Benefit Negotiation Advisory",
      "Direct WhatsApp / Signal Access with Lead Talent Sourcing Strategist",
      "Continuous placement support until first-month contract is active"
    ],
    popular: false,
    ctaText: "Secure Boardroom Package"
  },
  {
    id: "pkg-4",
    name: "Others & Enterprise",
    price: "Custom",
    billing: "Retainer Structure",
    description: "Custom sourcing programs, passive talent mapping networks, and cross-border placement workflows engineered for corporate entities.",
    features: [
      "Coordinated Passive Candidates Pipeline Mapping",
      "Interactive Recruiter Sourcing Team Dispatch",
      "Localized ATS Blueprints (UK, US, Canada, Europe, GCC)",
      "Verified Integration with Corporate Inhouse ATS",
      "Strategic Employer Branding Representation",
      "Flexible retainer sizes matching organizational targets"
    ],
    popular: false,
    ctaText: "Contact Partnership Team"
  }
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is reverse recruiting?",
    answer: "Reverse recruiting is where we flip the job application process entirely. Instead of you spending hours scrolling through boards and filling out redundant profiles, Fasco Talent Solution does it for you. We research positions, tailor your documents, submit applications on your behalf, and execute direct outreach to key recruiters and target hiring decision-makers to land interviews."
  },
  {
    id: "faq-2",
    question: "How long does the resume writing process take?",
    answer: "Our standard premium turnaround is 5 to 7 business days, allowing our certified writers to research your specific industry niche and engineer a customized layout. For clients purchasing our Professional or Executive tiers, priority turnaround is available (3 to 5 business days)."
  },
  {
    id: "faq-3",
    question: "Do you optimize our actual LinkedIn profiles?",
    answer: "Yes, absolutely! On our Professional and Executive tiers, we provide a complete rewrite of your headline, executive summary, feature entries, keywords, and job description blocks. We provide you with a polished, copy-pasteable blueprint or directly configure the account if you securely specify permission, transforming it into a passive recruiter magnet."
  },
  {
    id: "faq-4",
    question: "Can you help with preparation for high-stakes interviews?",
    answer: "We offer realistic, high-fidelity interview training. You'll run simulator sessions with former recruitment heads, get feedback on body language and answer flow, and receive a customized 'Combat Blueprint' covering response strategies for tough or high-difficulty industry questions."
  },
  {
    id: "faq-5",
    question: "Do you recruit and source directly for scaling companies?",
    answer: "Indeed. Out of our Talent Acquisition branch, we partner with enterprise firms globally. We design roles, locate exceptional active and passive talent, screen they meet strict capabilities benchmarks, coordinate initial calendars, and hand off ideal candidate matches for late-stage assessment."
  },
  {
    id: "faq-6",
    question: "What specific industries do you support?",
    answer: "While we have optimized talent pathways for Finance, Healthcare, Construction, Cybersecurity, Marketing, and Operations, our strategies are built upon universal recruiting principles, ATS structures, and personal brand rules that translate flawlessly to any highly-skilled professional industry role."
  }
];

export const insightsArticles: InsightArticle[] = [
  {
    id: "insight-1",
    title: "How AI and ATS Algorithms Filter 85% of Executive Resumes",
    excerpt: "Understand the underlying search mechanisms of modern Application Tracking Systems (Greenhouse, Workday, Taleo) and how elite professionals scale past keyword walls.",
    content: `Application Tracking Systems (ATS) are no longer simple search directories; they are AI-driven filters designed to protect high-intent corporate inboxes. Major companies receive thousands of resumes weekly, and a massive 85% of applicants are sifted out by the initial ATS parses before a human ever lays eyes on them.

### Demystifying the Parser
Modern systems like Workday and Greenhouse parse your document to build a structured JSON map of your target skills, chronological advancements, and key deliverables. If your resume features graphical timelines, multi-column tables, or complex CSS layouts, it will fail the text sifting stage, leading to corrupted data values and an automatic 'unqualified' ranking.

### How to Scale Past the Keyword Wall:
1. **Structural Purity**: Always present your career chronologically using single-column, standard layouts. Avoid placing vital text (like your email or target skills) inside un-parsable headers or footer blocks.
2. **Context-Rich Keywords**: Sifting programs do not merely search for words like "Marketing"; they look for semantic pairs like "growth acquisition, ROI modeling, or brand scalability." Match the phrasing of your target vacancy description precisely.
3. **Leading with Metrics**: Recruiter tools weigh numeric achievements (e.g. "scaled revenue by 42% y-o-y") twice as heavily as passive phrases. Make metrics the focal point of every role description.`,
    category: "Career Advice",
    date: "May 15, 2026",
    author: "Fawas Aderibigbe",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-2",
    title: "The Rise of Passive Sourcing in Global Tech Companies",
    excerpt: "An expert deep-dive into how scaling enterprise companies are bypassing organic job postings to build dedicated, high-intent passive sourcing networks for vital roles.",
    content: `Organic job boards are slowly becoming recruitment's secondary choice. Leading enterprise companies across the US, UK, and Europe are investing heavily in aggressive headhunting campaigns, seeking out passive talent instead of relying on active applicants.

### Why Direct Sourcing Takes Precedence
Active applicants are often in transition, while passive candidates—those who are already succeeding in stable roles elsewhere—represent a highly sought-after tier of ready execution. Scaling companies hire specialized Sourcing Analysts whose sole focus is to map global networks and build direct pipelines of passive experts.

### Key Takeaways for Today's Leaders:
* **The Sourcing Cycle**: Recruitment teams start tracking people 6 to 12 months before an opening even goes public. By the time a corporate vacancy is online, a shortlist of pre-qualified passive candidates already exists.
* **Recruiter Trigger Optimizations**: Ensure your public digital footprints (LinkedIn profiles and portfolio listings) trigger automated sourcing scrapers. This requires highly strategic keyword indexing, professional imagery, and visible project credentials.
* **The Network Benefit**: Establishing strong, ongoing, passive relationships with recruiters prepares you to step into elite opportunities at a moment's notice, giving you immense leverage in later-stage compensation reviews.`,
    category: "Hiring Trends",
    date: "May 10, 2026",
    author: "Fasco Hiring Team",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-3",
    title: "Fasco Talent Solution Expands Global Direct-Contact Infrastructure",
    excerpt: "We are introducing direct inbox placement and targeted executive search coordination across UK, Canada, and GCC markets to accelerate mid-market transitions.",
    content: `As part of our commitment to delivering premier recruitment and placement systems, Fasco Talent Solution is officially launching expanded virtual support structures in London, Toronto, and Dubai. These new nodes will directly manage corporate candidate mapping and fast-track reverse recruiting operations globally.

### Overcoming Cross-Border Barriers
Global executive placements often stall due to region-specific compliance layers and unaligned networking pathways. By placing strategic sourcing agents directly in target hubs, Fasco ensures local recruiters are engaged via proven, localized business etiquette.

### What This Means For Our Clients:
1. **Direct UK, CA, and GCC Outreach**: Our reverse-recruiting pipelines now have verified access to internal directories in premier tech, financial, and logistical organizations across EMEA and North America.
2. **Around-the-Clock Sourcing**: Our distributed remote model means Sourcing Officers can engage and follow up with recruiters across different timezones, minimizing friction.
3. **Localized ATS Blueprints**: Tailored formatting rules matching specific regional market expectations—such as UK single-page CV rules or Middle-East executive criteria.`,
    category: "Company News",
    date: "May 08, 2026",
    author: "Fawas Aderibigbe",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-4",
    title: "Behind the Bypassed Recruiter Queue: The Reverse Sourcing Formula",
    excerpt: "Learn the high-converting email sequences and direct profile positioning needed to bypass gatekeepers and lock down interviews directly with hiring managers.",
    content: `Standard job applications represent a highly saturated marketplace. When hundreds of candidates submit applications to a single listing, your odds of standing out are statistically low. Outperforming the average applicant requires a structural bypass: Enter the Reverse Sourcing Formula.

### The Power of Direct Positioning
Recruiters and hiring managers face immense pressure to close empty roles quickly. If you can present yourself directly, cleanly, and with a compelling value thesis directly to their inbox, you remove their struggle—positioning you as the perfect, proactive solution.

### Implementing the Bypass:
* **The Decision-Maker Target**: Do not reach out to generic 'HR' or info accounts. Use professional networks to locate the specific leader responsible for your vertical (e.g. VP of Product, Engineering Directory).
* **The Short-and-Sweet Value Blueprint**: Keep your initial correspondence under 150 words. Respect their time. State who you are, summarize exactly two massive metrics of success matching their sphere, and offer an ultra-low-friction next step (e.g., 'Do you have 5 minutes next Thursday for a brief chat?').
* **The Systematic Follow-Up**: Direct emails are easily missed. A single, polite, professional follow-up thread placed 4 business days later will often double your response rate without causing friction.`,
    category: "Career Advice",
    date: "May 01, 2026",
    author: "Fasco Career Specialist",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "insight-5",
    title: "The Shift Towards Skills-First Architecture and Salary Transparency",
    excerpt: "How scaling international companies and regional transparency acts are restructuring compensation grids and hiring qualifications.",
    content: `A massive shift is occurring in modern recruitment. Driven by legislative acts (particularly in the US and Europe) and the need for agile delivery, elite corporate employers are transitioning from traditional pedigree-based checks to skills-first assessments.

### Dismantling Degree Requirements
Traditional markers of talent—like degrees from specific institutions—are being reassessed. In active talent pools, practical and verified coding outputs, portfolio projects, and documented system transformations are evaluated with higher relevance than educational background.

### Implications for Modern Talent:
1. **The Skills Inventory**: Modern resumes should focus on high-fidelity, real-world skill competencies rather than a listing of duties. Ensure your competencies section matches in-demand industry standards.
2. **Managing Transparency**: In markets enforcing active salary disclosure, job seekers can evaluate financial compensation brackets upfront, allowing you to prepare value-focused responses when coordinating target rates.
3. **Pre-Qualified Portfolios**: Candidates who proactively back their claims with verifiable case studies or project repositories (e.g., live web apps, documented system designs) secure hiring confidence faster, leading to quicker offer cycles.`,
    category: "Hiring Trends",
    date: "April 25, 2026",
    author: "Fasco Hiring Analyst",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80"
  }
];
