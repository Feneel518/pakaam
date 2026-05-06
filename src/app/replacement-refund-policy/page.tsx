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
  title: "Replacement and Refund Policy",
  description:
    "Review Pakaam's replacement and refund policy for genuine transit damage, support timing, and post-delivery issue handling.",
  path: "/replacement-refund-policy/",
  keywords: ["refund policy", "replacement policy", "damaged mango box support"],
});

export default function ReplacementRefundPolicyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Replacement and Refund Policy",
            path: "/replacement-refund-policy/",
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          {
            href: "/replacement-refund-policy/",
            label: "Replacement and Refund Policy",
          },
        ]}
      />
      <PageHero
        eyebrow="Policy trust page"
        title="Replacement and refund support for genuine transit problems."
        description="This page exists to reduce buyer risk and show that the brand has a clear process if a mango box arrives with real transit damage."
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Policy overview"
            title="How issue handling works"
            description="Be specific enough that buyers feel safe ordering, but practical enough that the process remains manageable during harvest season."
          />
          <div className="space-y-5 text-sm leading-8 text-[#5c4a2a]">
            <p>
              If a box arrives with genuine transit damage, buyers should share a photo or video as
              quickly as possible after delivery so the issue can be assessed fairly.
            </p>
            <p>
              Pakaam may resolve eligible cases through replacement, partial credit, or refund based
              on severity and courier context.
            </p>
            <p>
              Natural ripening, minor cosmetic variation, or normal firmness at arrival should not be
              treated as defects when they match the product and shipping guidance already shown on the
              site.
            </p>
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
