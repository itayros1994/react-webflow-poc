import PricingCard from "./PricingCard";
import type { BillingPeriod, Plan } from "../../types/pricing";

interface PricingGridProps {
  plans: Plan[];
  billingPeriod: BillingPeriod;
}

function PricingGrid({ plans, billingPeriod }: PricingGridProps) {
  return (
    <section className="pricing-grid" aria-label="Pricing plans">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} billingPeriod={billingPeriod} />
      ))}
    </section>
  );
}

export default PricingGrid;
