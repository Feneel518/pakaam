import Link from "next/link";

import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/site/json-ld";
import {
  CalloutCta,
  ContactStrip,
  Container,
  HarvestAlertCard,
  InfoCard,
  MiniFacts,
  PageHero,
  PageSection,
  PrimaryAction,
  ProductCard,
  SecondaryAction,
  SectionHeading,
  TrustGrid,
} from "@/components/site/marketing";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts, createWhatsAppLink, generalFaqs, products, testimonials } from "@/lib/site";
import {
  buildMetadata,
  faqJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pakaam | Orchard-Direct Valsad Kesar Mangoes",
  description:
    "Order orchard-direct Valsad Kesar mango boxes from Pakaam with natural ripening, WhatsApp support, and India-wide seasonal delivery.",
  path: "/",
  keywords: [
    "Valsad Kesar mangoes",
    "buy kesar mango online",
    "orchard direct mangoes",
    "naturally ripened mangoes",
    "mango delivery in India",
  ],
});

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(generalFaqs)} />

      <PageHero
        eyebrow="First harvest 2026 | Now booking"
        title="Orchard-direct Valsad Kesar mangoes for homes, gifting, and mango season loyalists."
        description="Pakaam helps you buy Kesar mangoes online with a clearer promise: Valsad trust signals, natural ripening, WhatsApp-first ordering, and product pages that explain what will actually arrive at your door."
        image="/images/mangoHero.jpg"
        imageAlt="Kesar mangoes hanging on a Valsad orchard tree"
        actions={
          <>
            <PrimaryAction
              href={createWhatsAppLink(
                "Hi Pakaam, I want to order Valsad Kesar mangoes. Please share today's boxes.",
              )}
              eventLabel="homepage_hero"
            >
              Order on WhatsApp
            </PrimaryAction>
            <SecondaryAction href="/mango-boxes/">Browse mango boxes</SecondaryAction>
          </>
        }
      />

      <TrustGrid />

      <PageSection>
        <Container>
          <MiniFacts
            facts={[
              { label: "Primary focus", value: "Valsad Kesar" },
              { label: "Order flow", value: "WhatsApp-first" },
              { label: "Ripening approach", value: "Natural, hay-based" },
              { label: "Shipping reach", value: "Gujarat + India" },
            ]}
          />
        </Container>
      </PageSection>

      <PageSection className="pt-4">
        <Container>
          <SectionHeading
            eyebrow="Shop the season"
            title="Choose the right Kesar mango box for your home."
            description="Each product page targets a specific buying intent instead of repeating the same generic sales copy. That makes the catalog clearer for shoppers and stronger for Google."
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
          <SectionHeading
            eyebrow="Trust and intent"
            title="Build confidence before the first order."
            description="Pakaam now has dedicated pages for origin, natural ripening, delivery, corporate gifting, and policies so buyers can answer their questions without leaving the site."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              href="/valsad-kesar-mangoes/"
              title="Valsad Kesar origin"
              description="Explain why Valsad origin matters and how the brand uses orchard context to build trust."
            />
            <InfoCard
              href="/naturally-ripened-mangoes/"
              title="Natural ripening guide"
              description="Answer the most common buyer hesitation around firm arrivals, ripening, and storage."
            />
            <InfoCard
              href="/delivery/india/"
              title="India delivery"
              description="Clarify dispatch windows, coverage, and what buyers should expect when shipping outside Gujarat."
            />
            <InfoCard
              href="/corporate-mango-gifting/"
              title="Corporate gifting"
              description="Capture bulk intent with a page built for office gifting, clients, and branded inserts."
            />
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Journal"
            title="Helpful content that supports both ranking and conversion."
            description="These starter articles answer the questions real buyers search before they order mangoes online."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="paper-shadow rounded-[1.35rem] border border-[#1f4d2a]/12 bg-[var(--paper)] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#b85b0e]">
                  {post.readingTime}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-[#143018]">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mt-5 rounded-full border-[#1f4d2a]/15 bg-transparent px-4 text-[#143018] hover:bg-[#f4ead3]",
                  )}
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection className="bg-[#143018] text-[#fbf5e9]">
        <Container>
          <SectionHeading
            eyebrow="Social proof direction"
            title="Seasonal proof should feel human, not generic."
            description="These review-style snippets create space for future real buyer feedback, UGC, and post-delivery testimonials."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[1.3rem] border border-[#e9ddb5]/14 bg-[#1b4020] p-6"
              >
                <p className="text-base leading-8 text-[#fbf5e9]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--mango)]">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Answering objections is part of SEO."
                description="Clear FAQ content helps buyers and supports structured data eligibility when it matches visible page content."
              />
              <div className="paper-shadow rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)] p-6 sm:p-8">
                <FaqList faqs={generalFaqs} />
              </div>
            </div>
            <div className="space-y-6">
              <HarvestAlertCard />
              <CalloutCta
                title="Need a recommendation fast?"
                copy="Tell us how many people you are buying for and whether the box is for home, gifting, or both. We will point you to the right Kesar mango box."
                whatsappMessage="Hi Pakaam, I need help choosing the right mango box. Please recommend one based on family size and delivery city."
                secondaryHref="/contact/"
                secondaryLabel="View contact options"
                eventLabel="homepage_recommendation"
              />
            </div>
          </div>
        </Container>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
