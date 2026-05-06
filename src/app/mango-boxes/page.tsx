import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  PageHero,
  PageSection,
  ProductCard,
  SecondaryAction,
  SectionHeading,
} from "@/components/site/marketing";
import { createWhatsAppLink, products } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kesar Mango Boxes",
  description:
    "Browse 3 kg, 5 kg, and 10 kg orchard-direct Valsad Kesar mango boxes from Pakaam with WhatsApp ordering and natural ripening guidance.",
  path: "/mango-boxes/",
  keywords: [
    "kesar mango box",
    "buy kesar mango online",
    "orchard direct mangoes",
    "3 kg kesar mango box",
    "5 kg kesar mango box",
    "10 kg kesar mango box",
  ],
});

export default function MangoBoxesPage() {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/mango-boxes/", label: "Mango Boxes" },
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mango Boxes", path: "/mango-boxes/" },
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Commercial hub"
        title="Compare Pakaam Kesar mango boxes by size, value, and use case."
        description="This page targets broad shopping intent, while each product page goes deeper on weight, ripening, gifting fit, and WhatsApp conversion."
        image="/images/5.jpg"
        imageAlt="Pakaam Kesar mango box close-up"
        actions={
          <>
            <SecondaryAction href="/valsad-kesar-mangoes/">Why Valsad Kesar matters</SecondaryAction>
            <SecondaryAction href="/delivery/india/">Delivery coverage</SecondaryAction>
          </>
        }
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="All boxes"
            title="Pick by household size and buying confidence."
            description="The 3 kg box is lower-risk, the 5 kg box is the most balanced family pick, and the 10 kg box wins on per-kilo value."
          />
          <div className="grid gap-7 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#f4ead3]">
        <Container>
          <CalloutCta
            title="Want help choosing the best mango box?"
            copy="Message us with your city, number of people, and whether the order is for home or gifting. We will guide you to the right box and dispatch window."
            whatsappMessage="Hi Pakaam, I need help choosing between the 3 kg, 5 kg, and 10 kg Kesar mango boxes."
            secondaryHref={createWhatsAppLink(
              "Hi Pakaam, I want to ask about box availability before ordering.",
            )}
            secondaryLabel="Open WhatsApp"
            eventLabel="mango_boxes_page"
          />
        </Container>
      </PageSection>
    </main>
  );
}
