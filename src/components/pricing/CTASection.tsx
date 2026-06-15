function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__inner">
        <h2 className="cta-section__title">
          Ready to transform how your team works?
        </h2>
        <p className="cta-section__subtitle">
          Join 225,000+ teams who run their work on WorkOS. Start your free
          trial today — no credit card required.
        </p>
        <div className="cta-section__actions">
          <button type="button" className="cta-section__btn cta-section__btn--primary">
            Get started free
          </button>
          <button type="button" className="cta-section__btn cta-section__btn--secondary">
            Contact sales
          </button>
        </div>
        <p className="cta-section__footnote">
          14-day free trial · Cancel anytime · SOC 2 compliant
        </p>
      </div>
    </section>
  );
}

export default CTASection;
