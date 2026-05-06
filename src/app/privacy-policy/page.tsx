import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Pakaam privacy policy for how basic enquiry details, analytics events, and WhatsApp-led order information are handled.",
  path: "/privacy-policy/",
  keywords: ["privacy policy", "Pakaam privacy", "website analytics privacy"],
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/privacy-policy/", label: "Privacy Policy" },
        ]}
      />
      <PageHero
        eyebrow="Compliance and trust"
        title="Privacy policy for Pakaam website visitors and enquiries."
        description="This page explains the limited data the site may collect for analytics, enquiries, and buyer communication during mango season."
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Privacy overview"
            title="What data the site may use"
            description="Keep the policy grounded in actual site behavior: analytics, click tracking, and buyer contact details shared intentionally through WhatsApp or email."
          />
          <div className="space-y-5 text-sm leading-8 text-[#5c4a2a]">
            <p>
              The website may collect basic analytics information such as page visits and click events
              to understand which pages help buyers most.
            </p>
            <p>
              If you contact {siteConfig.name} by email or WhatsApp, the information you share is used
              only to answer your enquiry, support an order, or coordinate gifting and delivery.
            </p>
            <p>
              The site should not promise practices it does not actually follow. Update this page if
              forms, newsletters, or new analytics tools are added later.
            </p>
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
