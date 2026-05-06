import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { orchardNotes, siteConfig, testimonials } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Pakaam",
  description:
    "Learn about Pakaam's orchard-direct Valsad Kesar positioning, harvest-season story, and the trust signals behind the brand.",
  path: "/about/",
  keywords: ["about Pakaam", "Valsad mango brand", "orchard direct mangoes"],
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/about/", label: "About" },
        ]}
      />
      <PageHero
        eyebrow="Brand trust page"
        title="Pakaam is building a cleaner way to buy Valsad Kesar mangoes online."
        description="The brand story matters because SEO for premium food products depends on trust, specificity, and visible signals that the seller understands the product deeply."
        image="/images/farm1.jpg"
        imageAlt="Pakaam orchard story visual"
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="What the brand stands for"
            title="A direct, seasonal, trust-led mango brand"
            description={`Pakaam is based around ${siteConfig.location} and uses a WhatsApp-first buying flow to stay responsive during mango season.`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {orchardNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.25rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-5 text-sm leading-7 text-[#5c4a2a]"
              >
                {note}
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#f4ead3]">
        <Container>
          <SectionHeading
            eyebrow="Proof layers"
            title="Trust grows when the page feels specific"
            description="Keep expanding this page with founder notes, packing-room context, harvest photos, testimonials, and dispatch details."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[1.25rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-5 text-sm leading-7 text-[#5c4a2a]"
              >
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[#b85b0e]">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
