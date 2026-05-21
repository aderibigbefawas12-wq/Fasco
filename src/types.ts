export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface AchievementCard {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  deliverables: string[];
}

export interface StrategyItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Career Advice" | "Hiring Trends" | "Company News";
  date: string;
  author: string;
  readTime: string;
  image: string;
}
