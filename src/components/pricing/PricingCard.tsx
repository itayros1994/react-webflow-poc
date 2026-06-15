import type { BillingPeriod, Plan } from "../../types/pricing";

interface PricingCardProps {
  plan: Plan;
  billingPeriod: BillingPeriod;
}

function formatPrice(monthlyPrice: number, billingPeriod: BillingPeriod): string {
  const price =
    billingPeriod === "yearly" ? monthlyPrice * 0.8 : monthlyPrice;
  return price % 1 === 0 ? price.toString() : price.toFixed(2);
}

function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  const displayPrice = formatPrice(plan.monthlyPrice, billingPeriod);

  return (
    <article
      className={`pricing-card${
        plan.highlighted ? " pricing-card--highlighted" : ""
      }`}
    >
      {plan.highlighted && (
        <span className="pricing-card__badge">Most popular</span>
      )}

      <h3 className="pricing-card__name">{plan.name}</h3>
      <p className="pricing-card__description">{plan.description}</p>

      <div className="pricing-card__price-block">
        <span className="pricing-card__price">
          <span className="pricing-card__currency">$</span>
          {displayPrice}
        </span>
        <span className="pricing-card__period">
          / seat / {billingPeriod === "yearly" ? "mo, billed yearly" : "mo"}
        </span>
      </div>

      {billingPeriod === "yearly" && (
        <p className="pricing-card__savings">
          ${(plan.monthlyPrice * 12 * 0.8).toFixed(0)} billed annually
        </p>
      )}

      <button
        type="button"
        className={`pricing-card__cta${
          plan.highlighted ? " pricing-card__cta--primary" : ""
        }`}
      >
        {plan.ctaLabel}
      </button>

      <ul className="pricing-card__features">
        {plan.features.map((feature) => (
          <li key={feature} className="pricing-card__feature">
            <svg
              className="pricing-card__check"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PricingCard;
