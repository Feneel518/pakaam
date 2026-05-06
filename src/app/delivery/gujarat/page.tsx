import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mango Delivery in Gujarat",
  description:
    "Learn how Pakaam handles Kesar mango delivery in Gujarat with shorter transit expectations, WhatsApp coordination, and clearer dispatch communication.",
  path: "/delivery/gujarat/",
  keywords: [
    "mango delivery in Gujarat",
    "Kesar mango delivery Gujarat",
    "Valsad mango delivery Gujarat",
  ],
});

export default function GujaratDeliveryPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Delivery", path: "/delivery/gujarat/" },
          { name: "Gujarat", path: "/delivery/gujarat/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/delivery/gujarat/", label: "Delivery in Gujarat" },
        ]}
      />
      <PageHero
        eyebrow="Local-intent support page"
        title="Kesar mango delivery in Gujarat should feel faster, clearer, and lower risk."
        description="This page exists for Gujarat-flavored delivery queries and gives buyers a cleaner answer on timing, firmness expectations, and WhatsApp support."
        image="/images/farm3.jpg"
        imageAlt="Packed mangoes ready for dispatch from Gujarat"
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="What Gujarat buyers care about"
            title="Local proximity changes the buying conversation."
            description="Shorter transit often means less stress around ripening, easier support, and stronger trust in local sourcing language."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Expect faster support and clearer dispatch timing.",
              "Use WhatsApp to confirm city coverage and best delivery window.",
              "If you are gifting inside Gujarat, coordinate dates early.",
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
            title="Ordering inside Gujarat?"
            copy="Message your city and preferred delivery week. Pakaam can guide you on the best box and the right dispatch timing."
            whatsappMessage="Hi Pakaam, I want Kesar mango delivery in Gujarat. Please tell me if you cover my city and what the dispatch window is."
            secondaryHref="/contact/"
            secondaryLabel="Contact page"
            eventLabel="delivery_gujarat_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
