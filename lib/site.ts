// Single source of truth for site-wide config: brand, contact, navigation.
// Update any contact details, social links, or nav structure here.

export const site = {
  name: "Green ForesTree",
  tagline: "Independent Consulting Arboriculture",
  slogan: "Where Tree Health & Sustainability Take Root",
  description:
    "Independent, science based consulting arborist services for South Florida. Tree risk assessment, health diagnosis, construction consulting, and appraisal reports.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenforestree.com",
  contact: {
    phone: "305.763.5159",
    phoneHref: "tel:+13057635159",
    email: "info@greenforestree.com",
    emailHref: "mailto:info@greenforestree.com",
    serviceArea: "Miami Dade, Broward, and Palm Beach Counties",
    hours: "By appointment, Monday through Saturday",
  },
  principal: {
    name: "Quatisha Oguntoyinbo-Rashad",
    title: "Principal Consulting Arborist",
    isaNumber: "ISA Certified Arborist",
    experienceYears: 16,
    credentials: [
      { short: "ISA Certified Arborist", long: "ISA Certified Arborist" },
      { short: "ISA Certified Urban Forest Professional", long: "ISA Certified Urban Forest Professional" },
      { short: "ISA TRAQ", long: "ISA Tree Risk Assessment Qualified (TRAQ)" },
      { short: "ISA Prescription Pruning Qualified", long: "ISA Prescription Pruning Qualified" },
      { short: "LIAF Certified Landscape Inspector", long: "LIAF Certified Landscape Inspector" },
    ],
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;
