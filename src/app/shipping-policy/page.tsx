import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shipping Policy",
  description:
    "Review Pakaam's shipping policy for dispatch timing, transit expectations, and why Kesar mango boxes may arrive slightly firm.",
  path: "/shipping-policy/",
  keywords: ["shipping policy", "mango delivery policy", "Kesar mango shipping"],
});

export default function ShippingPolicyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shipping Policy", path: "/shipping-policy/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/shipping-policy/", label: "Shipping Policy" },
        ]}
      />
      <PageHero
        eyebrow="Policy trust page"
        title="Shipping policy for seasonal Kesar mango deliveries."
        description="This page explains how Pakaam approaches dispatch timing, transit risk, and what buyers should expect from mangoes shipped across Gujarat and India."
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Policy overview"
            title="What buyers should expect"
            description="The policy language should stay practical and easy to understand so it reduces support load rather than creating more confusion."
          />
          <div className="space-y-5 text-sm leading-8 text-[#5c4a2a]">
            <p>
              Pakaam dispatches seasonal mango orders according to harvest timing and delivery
              feasibility rather than promising instant shipment every day.
            </p>
            <p>
              Boxes may arrive slightly firm because fruit that is too soft can lose quality in
              transit. This is a quality-protection decision, not a defect.
            </p>
            <p>
              Delivery timing varies by city and courier flow. Buyers should use WhatsApp to confirm
              the best dispatch window if the order is time-sensitive or intended for gifting.
            </p>
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
