import type { BillingPeriod } from "../../types/pricing";

interface BillingToggleProps {
  billingPeriod: BillingPeriod;
  onBillingChange: (period: BillingPeriod) => void;
}

function BillingToggle({ billingPeriod, onBillingChange }: BillingToggleProps) {
  return (
    <div className="billing-toggle" role="group" aria-label="Billing period">
      <button
        type="button"
        className={`billing-toggle__option${
          billingPeriod === "monthly" ? " billing-toggle__option--active" : ""
        }`}
        aria-pressed={billingPeriod === "monthly"}
        onClick={() => onBillingChange("monthly")}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`billing-toggle__option${
          billingPeriod === "yearly" ? " billing-toggle__option--active" : ""
        }`}
        aria-pressed={billingPeriod === "yearly"}
        onClick={() => onBillingChange("yearly")}
      >
        Yearly
        <span className="billing-toggle__badge">Save 20%</span>
      </button>
    </div>
  );
}

export default BillingToggle;
