import BillingToggle from "./BillingToggle";
import type { BillingPeriod } from "../../types/pricing";

interface HeroSectionProps {
  billingPeriod: BillingPeriod;
  onBillingChange: (period: BillingPeriod) => void;
}

function HeroSection({ billingPeriod, onBillingChange }: HeroSectionProps) {
  return (
    <header className="pricing-hero">
      <p className="pricing-hero__eyebrow">Pricing</p>
      <h1 className="pricing-hero__title">
        Plans that grow with your team
      </h1>
      <p className="pricing-hero__subtitle">
        Start free, then add a plan that fits your workflow. Switch or cancel
        anytime.
      </p>
      <BillingToggle
        billingPeriod={billingPeriod}
        onBillingChange={onBillingChange}
      />
    </header>
  );
}

export default HeroSection;
