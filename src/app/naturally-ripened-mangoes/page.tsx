import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { generalFaqs } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

const ripeningFaqs = generalFaqs.filter(
  (faq) =>
    faq.question.includes("firm") ||
    faq.question.includes("ripened") ||
    faq.question.includes("mangoes"),
);

export const metadata = buildMetadata({
  title: "Naturally Ripened Mangoes",
  description:
    "Understand how Pakaam positions naturally ripened mangoes, why shipped fruit can arrive firm, and how to finish ripening Kesar mangoes at home.",
  path: "/naturally-ripened-mangoes/",
  keywords: [
    "naturally ripened mangoes",
    "how to ripen kesar mangoes naturally",
    "why are shipped mangoes firm",
  ],
});

export default function NaturallyRipenedMangoesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Naturally Ripened Mangoes", path: "/naturally-ripened-mangoes/" },
        ])}
      />
      <JsonLd data={faqJsonLd(ripeningFaqs)} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/naturally-ripened-mangoes/", label: "Naturally Ripened Mangoes" },
        ]}
      />
      <PageHero
        eyebrow="Trust and education"
        title="Naturally ripened mangoes need explanation, not just a claim."
        description="This page explains how Pakaam talks about natural ripening, why transit-friendly firmness is normal, and how buyers should handle Kesar mangoes after delivery."
        image="/images/postcard.jpg"
        imageAlt="Naturally ripened Kesar mangoes prepared for eating"
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Buyer questions"
            title="What this page should keep clarifying"
            description="Searchers often worry that firm fruit means poor quality. The better explanation is that timing and ripening control protect eating quality in transit."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Firm arrival is often intentional for better transit safety.",
              "Room-temperature ripening is usually better than early refrigeration.",
              "Visible guidance reduces anxiety and improves review quality after purchase.",
            ].map((point) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-5 text-sm leading-7 text-[#5c4a2a]"
              >
                {point}
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#f4ead3]">
        <Container>
          <SectionHeading
            eyebrow="Simple home method"
            title="A practical at-home ripening flow"
            description="Keep fruit ventilated, let aroma and softness guide the eating window, and move ripe fruit to the fridge only once it is ready."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Day 1 to 2: Keep the fruit out at room temperature with airflow.",
              "Day 3 to 4: Check for aroma at the stem and slight softness.",
              "Day 5 onward: Use the softest fruit first for slicing, aamras, or dessert.",
            ].map((step) => (
              <div
                key={step}
                className="rounded-[1.25rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-5 text-sm leading-7 text-[#5c4a2a]"
              >
                {step}
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <CalloutCta
            title="Want a box that is easy to manage at home?"
            copy="Start with the 3 kg or 5 kg Kesar mango box if you want a gentler learning curve on ripening, storage, and timing."
            whatsappMessage="Hi Pakaam, I want a Kesar mango box that is easy to ripen and manage at home. Please recommend one."
            secondaryHref="/mango-boxes/"
            secondaryLabel="See product pages"
            eventLabel="natural_ripening_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
