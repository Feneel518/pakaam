import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
} from "@/components/site/marketing";
import { generalFaqs } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pakaam FAQ",
  description:
    "Read Pakaam's answers on Valsad Kesar origin, natural ripening, firm arrivals, gifting, and damage replacement support.",
  path: "/faq/",
  keywords: ["Pakaam FAQ", "Kesar mango FAQ", "online mango buying questions"],
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq/" },
        ])}
      />
      <JsonLd data={faqJsonLd(generalFaqs)} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/faq/", label: "FAQ" },
        ]}
      />
      <PageHero
        eyebrow="Support content"
        title="Frequently asked questions about buying Kesar mangoes from Pakaam."
        description="This page centralizes the questions that matter most for searchers and buyers, and keeps the answers visible enough to support both conversion and structured data."
      />

      <PageSection>
        <Container>
          <div className="paper-shadow rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)] p-6 sm:p-8">
            <FaqList faqs={generalFaqs} />
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
