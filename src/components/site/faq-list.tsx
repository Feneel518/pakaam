"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

type FaqListProps = {
  faqs: Array<{ question: string; answer: string }>;
};

export function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="w-full">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group border-b border-[#1f4d2a]/12 py-5"
          onToggle={(event) => {
            if ((event.currentTarget as HTMLDetailsElement).open) {
              window.gtag?.("event", "faq_expand", {
                event_category: "engagement",
                event_label: faq.question,
              });
            }
          }}
        >
          <summary className="cursor-pointer list-none pr-8 text-base font-medium text-[#143018] marker:hidden">
            <span>{faq.question}</span>
            <span className="ml-2 inline-block text-[#b85b0e] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="pt-4 text-sm leading-7 text-[#5c4a2a]">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
