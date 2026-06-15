import type { BillingPeriod, ComparisonFeature, PlanId } from "../../types/pricing";

interface FeatureComparisonTableProps {
  features: ComparisonFeature[];
  billingPeriod: BillingPeriod;
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="comparison-table__text">{value}</span>;
  }

  return value ? (
    <svg
      className="comparison-table__icon comparison-table__icon--yes"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-label="Included"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      className="comparison-table__icon comparison-table__icon--no"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-label="Not included"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const PLAN_HEADERS: { id: PlanId; label: string }[] = [
  { id: "basic", label: "Basic" },
  { id: "standard", label: "Standard" },
  { id: "pro", label: "Pro" },
];

function FeatureComparisonTable({
  features,
  billingPeriod,
}: FeatureComparisonTableProps) {
  return (
    <section className="comparison-section">
      <h2 className="comparison-section__title">Compare all features</h2>
      <p className="comparison-section__subtitle">
        Billed {billingPeriod === "yearly" ? "yearly" : "monthly"} — prices
        shown per seat
      </p>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col" className="comparison-table__feature-col">
                Feature
              </th>
              {PLAN_HEADERS.map((plan) => (
                <th key={plan.id} scope="col" className="comparison-table__plan-col">
                  {plan.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.name}>
                <th scope="row" className="comparison-table__feature-name">
                  {feature.name}
                </th>
                <td>
                  <CellValue value={feature.basic} />
                </td>
                <td>
                  <CellValue value={feature.standard} />
                </td>
                <td>
                  <CellValue value={feature.pro} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FeatureComparisonTable;
