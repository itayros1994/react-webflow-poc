export type BillingPeriod = "monthly" | "yearly";

export type PlanId = "basic" | "standard" | "pro";

export interface Plan {
  id: PlanId;
  name: string;
  description: string;
  monthlyPrice: number;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  standard: boolean | string;
  pro: boolean | string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
