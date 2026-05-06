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
  title: "Mango Delivery in India",
  description:
    "Understand India-wide Kesar mango delivery with Pakaam, including firmness expectations, dispatch communication, and city-specific WhatsApp support.",
  path: "/delivery/india/",
  keywords: [
    "mango delivery in India",
    "buy Kesar mango online India",
    "India mango shipping",
  ],
});

export default function IndiaDeliveryPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Delivery", path: "/delivery/india/" },
          { name: "India", path: "/delivery/india/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/delivery/india/", label: "Delivery in India" },
        ]}
      />
      <PageHero
        eyebrow="National shipping intent"
        title="India-wide mango delivery works best when expectations are clear."
        description="This page explains why some boxes arrive firm, how transit affects ripening, and why WhatsApp coordination matters for mango delivery outside Gujarat."
        image="/images/10.jpg"
        imageAlt="Kesar mango box prepared for India-wide delivery"
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Key expectations"
            title="What buyers should know before ordering across India"
            description="A better shipping page reduces confusion, decreases support load, and supports broader ranking intent around online mango buying."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Boxes may arrive slightly firm so the fruit finishes ripening at home.",
              "Delivery timing varies by city, so WhatsApp pre-checks remain useful.",
              "The right product choice depends on household size and how quickly the fruit will be used.",
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
            title="Need delivery guidance for your city?"
            copy="Send your city and preferred box size on WhatsApp. Pakaam can confirm coverage, timing, and whether a smaller or larger box is the better fit."
            whatsappMessage="Hi Pakaam, I want Kesar mango delivery in India. Please tell me if you deliver to my city and which box you recommend."
            secondaryHref="/mango-boxes/"
            secondaryLabel="See mango boxes"
            eventLabel="delivery_india_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
