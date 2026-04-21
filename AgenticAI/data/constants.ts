import { NavLink, SocialLink, EventDetail, ChecklistItem, ExploreCategory } from "@/types"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Agenda", href: "/agenda" },
  { label: "Speakers", href: "/speakers" },
  { label: "Sponsors", href: "/sponsors" },
  // { label: "Exhibitors", href: "#exhibitors" },
  { label: "About", href: "/about" },
]

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  // { label: "Pricing", href: "#pricing" },
  // { label: "Download", href: "#download" },
  { label: "About", href: "/about" },
  { label: "Service", href: "#service" },
]

export const SUPPORT_LINKS: NavLink[] = [
  // { label: "FAQ", href: "#faq" },
  // { label: "How it", href: "#how-it" },
  // { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
  // { label: "Reporting", href: "#reporting" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "linkedin", href: "https://www.linkedin.com/company/technical-agility-conference/", icon: "Linkedin" },
  { platform: "telegram", href: "#", icon: "Send" },
  { platform: "X", href: "#", icon: "X" },
]

export const HERO_EVENT_DETAILS: EventDetail[] = [
  { icon: "Calendar", text: "2 Days" },
  { icon: "Users", text: "40+ Speakers" },
  { icon: "MapPin", text: "Bangalore, India" },
]

export const CONFERENCE_CHECKLIST: ChecklistItem[] = [
  { text: "Enterprise Adoption" },
  { text: "Multi-Agent Systems" },
  { text: "Governance & Security" },
]

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  {
    title: "Foundations",
    description: "Llms To Autonomous Agents",
    icon: "Building2",
  },
  {
    title: "Healthcare",
    description: "Clinical Workflows & Patient...",
    icon: "Code2",
  },
  {
    title: "Fintech",
    description: "Risk, Fraud & Autonomous Finance",
    icon: "Microscope",
  },
  {
    title: "Legal",
    description: "Compliance & Accountability",
    icon: "Factory",
  },
  {
    title: "Security",
    description: "Guardrails & Red Teaming",
    icon: "Server",
  },
  {
    title: "Human-In-Loop",
    description: "Augmented Teams & Delivery",
    icon: "Shield",
  },
  {
    title: "Retail",
    description: "Personalization & Supply Chain",
    icon: "Shield",
  },
]

export const SPONSORS = [
  { name: "OpenAI", tier: "platinum" },
  { name: "Anthropic", tier: "platinum" },
  { name: "Google DeepMind", tier: "gold" },
  { name: "Microsoft", tier: "gold" },
  { name: "Meta AI", tier: "silver" },
  { name: "Amazon", tier: "silver" },
]
