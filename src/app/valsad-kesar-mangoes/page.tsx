import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { orchardNotes } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Valsad Kesar Mangoes",
  description:
    "Learn what makes Valsad Kesar mangoes different and how Pakaam uses orchard-direct trust signals to support mango buying online.",
  path: "/valsad-kesar-mangoes/",
  keywords: [
    "valsad kesar mango",
    "valsadi kesar mango online",
    "what makes valsad kesar different",
  ],
});

export default function ValsadKesarMangoesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Valsad Kesar Mangoes", path: "/valsad-kesar-mangoes/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/valsad-kesar-mangoes/", label: "Valsad Kesar Mangoes" },
        ]}
      />
      <PageHero
        eyebrow="Origin trust page"
        title="Why Valsad Kesar matters to buyers searching for mangoes online."
        description="Origin is one of the strongest trust signals in mango SEO. This page turns Pakaam's Valsad positioning into something useful for both searchers and shoppers."
        image="/images/farm1.jpg"
        imageAlt="Valsad orchard landscape for Kesar mango sourcing"
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Origin signals"
            title="Use origin to answer quality questions early."
            description="Searchers comparing Kesar mango sellers often want clues about sweetness, aroma, ripening behavior, and whether the seller is reselling generic stock or speaking from direct sourcing experience."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {orchardNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.3rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-6 text-sm leading-7 text-[#5c4a2a]"
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
            eyebrow="Conversion impact"
            title="Why this matters for SEO and sales"
            description="Origin pages help you rank for broader trust queries while strengthening the internal-link path into product and gifting pages."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.35rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-6 text-sm leading-7 text-[#5c4a2a]">
              Use this page to explain what buyers should expect from Valsad Kesar in flavor, ripening,
              and dispatch timing. Then link directly to the product pages so the intent chain stays
              clear.
            </div>
            <div className="rounded-[1.35rem] border border-[#1f4d2a]/12 bg-[#fffcf4] p-6 text-sm leading-7 text-[#5c4a2a]">
              Keep expanding this page with orchard photos, grower notes, harvest calendars, and
              packing-room context. Those are the signals generic competitors usually do not have.
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <CalloutCta
            title="Ready to order Valsad Kesar mangoes?"
            copy="The product pages show exact box sizes, dispatch fit, and WhatsApp conversion paths. Start with the family box if you want the easiest all-rounder."
            whatsappMessage="Hi Pakaam, I want to order Valsad Kesar mangoes. Please help me choose the right box."
            secondaryHref="/mango-boxes/"
            secondaryLabel="Browse boxes"
            eventLabel="valsad_origin_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
