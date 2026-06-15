import { useState } from "react";
import HeroSection from "./components/pricing/HeroSection";
import PricingGrid from "./components/pricing/PricingGrid";
import FeatureComparisonTable from "./components/pricing/FeatureComparisonTable";
import FAQSection from "./components/pricing/FAQSection";
import CTASection from "./components/pricing/CTASection";
import { PLANS, COMPARISON_FEATURES, FAQ_ITEMS } from "./data/pricing";
import type { BillingPeriod } from "./types/pricing";
import "./pricing.css";

function App() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <div className="pricing-page">
      <div className="pricing-page__container">
        <HeroSection
          billingPeriod={billingPeriod}
          onBillingChange={setBillingPeriod}
        />
        <PricingGrid plans={PLANS} billingPeriod={billingPeriod} />
        <FeatureComparisonTable
          features={COMPARISON_FEATURES}
          billingPeriod={billingPeriod}
        />
        <FAQSection items={FAQ_ITEMS} />
        <CTASection />
      </div>
    </div>
  );
}

export default App;
