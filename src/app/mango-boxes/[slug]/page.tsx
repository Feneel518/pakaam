import Image from "next/image";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  CalloutCta,
  Container,
  MiniFacts,
  PageHero,
  PageSection,
  SecondaryAction,
  SectionHeading,
} from "@/components/site/marketing";
import { getProductBySlug, products } from "@/lib/site";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  productJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: `${product.shortName} | Orchard-Direct from Valsad`,
    description: product.metaDescription,
    path: `/mango-boxes/${product.slug}/`,
    image: product.image,
    keywords: [
      product.primaryKeyword,
      "buy kesar mango online",
      "Valsad Kesar mangoes",
      "naturally ripened mangoes",
    ],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/mango-boxes/", label: "Mango Boxes" },
    { href: `/mango-boxes/${product.slug}/`, label: product.shortName },
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mango Boxes", path: "/mango-boxes/" },
          { name: product.shortName, path: `/mango-boxes/${product.slug}/` },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: product.name,
          description: product.description,
          image: product.image,
          sku: product.sku,
          price: product.price,
          path: `/mango-boxes/${product.slug}/`,
        })}
      />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={product.primaryKeyword}
        title={product.name}
        description={`${product.description} Price: ${product.price}. Shipping reference: ${product.shippedPrice}. Best for: ${product.dispatchWindow}.`}
        image={product.image}
        imageAlt={product.imageAlt}
        actions={
          <>
            <SecondaryAction href="/valsad-kesar-mangoes/">About Valsad origin</SecondaryAction>
            <SecondaryAction href="/naturally-ripened-mangoes/">Ripening guide</SecondaryAction>
          </>
        }
      />

      <PageSection>
        <Container>
          <MiniFacts
            facts={[
              { label: "Price", value: product.price },
              { label: "Shipping reference", value: product.shippedPrice },
              { label: "Weight", value: product.weight },
              { label: "Typical count", value: product.mangoCount },
            ]}
          />
        </Container>
      </PageSection>

      <PageSection className="pt-4">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Why choose this box"
                title={`Who the ${product.shortName} is best for`}
                description="Each product page focuses on one commercial intent to avoid keyword cannibalization and to make conversion easier."
              />
              <div className="space-y-4">
                {product.idealFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#1f4d2a]/12 bg-[#fffcf4] px-5 py-4 text-sm leading-7 text-[#5c4a2a]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="paper-shadow overflow-hidden rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-heading text-3xl text-[#143018]">What to expect</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[#5c4a2a]">
                  {product.specs.map((spec) => (
                    <p key={spec.label}>
                      <strong className="text-[#143018]">{spec.label}:</strong> {spec.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#f4ead3]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Pre-purchase questions for this specific box"
            description="Visible answers support buyers and make this page eligible for FAQ structured data because the content is present on-page."
          />
          <div className="paper-shadow rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)] p-6 sm:p-8">
            <FaqList faqs={product.faqs} />
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <CalloutCta
            title={`Reserve the ${product.shortName} on WhatsApp`}
            copy="Ask for current availability, dispatch timing, and city coverage. Pakaam keeps the conversion flow human, fast, and easy to understand."
            whatsappMessage={product.whatsappMessage}
            secondaryHref="/delivery/india/"
            secondaryLabel="See delivery details"
            eventLabel={product.slug}
          />
        </Container>
      </PageSection>
    </main>
  );
}
