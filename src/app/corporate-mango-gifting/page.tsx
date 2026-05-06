import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  MiniFacts,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Corporate Mango Gift Boxes",
  description:
    "Plan corporate mango gifting with orchard-direct Valsad Kesar boxes, branded inserts, WhatsApp coordination, and seasonal dispatch support.",
  path: "/corporate-mango-gifting/",
  keywords: [
    "corporate mango gifting",
    "mango gift boxes",
    "premium mango gifting India",
    "bulk mango boxes",
  ],
});

export default function CorporateMangoGiftingPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Corporate Mango Gifting", path: "/corporate-mango-gifting/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/corporate-mango-gifting/", label: "Corporate Mango Gifting" },
        ]}
      />
      <PageHero
        eyebrow="B2B seasonal intent"
        title="Corporate mango gifting that feels premium before the box is even opened."
        description="This page captures bulk and gifting intent with clear logistics, WhatsApp-led coordination, and strong trust signals around origin, timing, and replacement support."
        image="/images/postcard.jpg"
        imageAlt="Postcard-style premium mango gifting visual"
      />

      <PageSection>
        <Container>
          <MiniFacts
            facts={[
              { label: "Best fit", value: "Clients and teams" },
              { label: "Coordination", value: "WhatsApp-first" },
              { label: "Positioning", value: "Premium seasonal gifting" },
              { label: "Core fruit", value: "Valsad Kesar" },
            ]}
          />
        </Container>
      </PageSection>

      <PageSection className="pt-4">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="What buyers need from a gifting page"
            description="Bulk buyers care about reliability, presentation, response speed, and confidence that the fruit will travel well. The content here should keep answering those concerns directly."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Choose the right box size based on relationship and budget.",
              "Confirm dispatch timing and destination city list early.",
              "Use branded inserts or simple message cards where needed.",
              "Keep one support channel open for order changes and replacements.",
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
          <CalloutCta
            title="Plan a corporate mango gifting run"
            copy="Share the quantity, recipient cities, preferred delivery week, and whether you need branded inserts. Pakaam can coordinate the gifting flow over WhatsApp."
            whatsappMessage="Hi Pakaam, I want to plan a corporate mango gifting order. Please share the bulk process, timing, and box options."
            secondaryHref="/contact/"
            secondaryLabel="Contact page"
            eventLabel="corporate_gifting_lead"
          />
        </Container>
      </PageSection>
    </main>
  );
}
