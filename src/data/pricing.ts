import type { ComparisonFeature, FAQItem, Plan } from "../types/pricing";

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "For individuals and small teams getting started.",
    monthlyPrice: 9,
    features: [
      "Up to 3 seats",
      "5 GB file storage",
      "Unlimited boards",
      "200+ templates",
      "iOS & Android apps",
    ],
    ctaLabel: "Try for free",
  },
  {
    id: "standard",
    name: "Standard",
    description: "For growing teams that need more power and visibility.",
    monthlyPrice: 12,
    features: [
      "Everything in Basic",
      "Timeline & Gantt views",
      "Guest access",
      "Automations (250/mo)",
      "Integrations",
    ],
    highlighted: true,
    ctaLabel: "Try for free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams running complex workflows at scale.",
    monthlyPrice: 19,
    features: [
      "Everything in Standard",
      "Private boards",
      "Time tracking",
      "Formula columns",
      "Automations (25K/mo)",
    ],
    ctaLabel: "Try for free",
  },
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  { name: "Seats", basic: "Up to 3", standard: "Unlimited", pro: "Unlimited" },
  { name: "Storage", basic: "5 GB", standard: "20 GB", pro: "100 GB" },
  { name: "Boards", basic: true, standard: true, pro: true },
  { name: "Timeline view", basic: false, standard: true, pro: true },
  { name: "Gantt charts", basic: false, standard: true, pro: true },
  { name: "Automations", basic: false, standard: "250/mo", pro: "25K/mo" },
  { name: "Guest access", basic: false, standard: true, pro: true },
  { name: "Integrations", basic: false, standard: true, pro: true },
  { name: "Private boards", basic: false, standard: false, pro: true },
  { name: "Time tracking", basic: false, standard: false, pro: true },
  { name: "Formula columns", basic: false, standard: false, pro: true },
  { name: "Priority support", basic: false, standard: false, pro: true },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan includes a 14-day free trial with full access to features. No credit card required to get started.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated.",
  },
  {
    question: "How does yearly billing work?",
    answer:
      "With yearly billing you save 20% compared to paying monthly. You are billed once per year for the full annual amount.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and wire transfer for Enterprise accounts. Invoices are available on Standard and Pro plans.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular third-party security audits to protect your data.",
  },
];
