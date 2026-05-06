import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  ContactStrip,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Pakaam",
  description:
    "Contact Pakaam for mango box orders, gifting questions, harvest alerts, and delivery support through WhatsApp or email.",
  path: "/contact/",
  keywords: ["contact Pakaam", "mango order WhatsApp", "Kesar mango support"],
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/contact/", label: "Contact" },
        ]}
      />
      <PageHero
        eyebrow="Support and conversion"
        title="Contact Pakaam for orders, gifting, and delivery questions."
        description={`WhatsApp is the fastest path for live buying help. Email works well for harvest alerts, gifting coordination, and policy questions. Base location: ${siteConfig.location}.`}
        image="/images/mangoHero.jpg"
        imageAlt="Pakaam contact and support visual"
      />

      <ContactStrip />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="What to include"
            title="Message details that help us answer faster"
            description="Include your city, the box size you are considering, and whether the order is for home or gifting. That reduces back-and-forth and improves conversion speed."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Your city or delivery region",
              "Whether you want the 3 kg, 5 kg, or 10 kg box",
              "If the order is for home use, gifting, or both",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-5 text-sm leading-7 text-[#5c4a2a]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#f4ead3]">
        <Container>
          <CalloutCta
            title="Start the conversation"
            copy="If you want the fastest route to an order, send a WhatsApp message with your city and the box you are considering."
            whatsappMessage="Hi Pakaam, I want help with a mango order. My city is [city] and I am considering [box size]."
            secondaryHref={`mailto:${siteConfig.email}`}
            secondaryLabel="Email support"
            eventLabel="contact_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
