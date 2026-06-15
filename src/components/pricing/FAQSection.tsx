import { useState } from "react";
import type { FAQItem } from "../../types/pricing";

interface FAQSectionProps {
  items: FAQItem[];
}

function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <h2 className="faq-section__title">Frequently asked questions</h2>

      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className={`faq-item${isOpen ? " faq-item--open" : ""}`}
            >
              <button
                type="button"
                className="faq-item__question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <svg
                  className="faq-item__chevron"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="faq-item__answer">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;
