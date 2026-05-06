import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pakaam Journal",
  description:
    "Read Pakaam's mango journal for Valsad Kesar buying guides, ripening help, gifting advice, and practical seasonal education.",
  path: "/blog/",
  keywords: [
    "Pakaam journal",
    "Valsad Kesar guide",
    "how to ripen mangoes naturally",
    "best mango box for gifting",
  ],
});

export default function BlogIndexPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "Journal" },
        ]}
      />
      <PageHero
        eyebrow="Topical authority"
        title="The Pakaam Journal: practical writing for people buying mangoes online."
        description="Every article should be specific enough to help a real buyer and strong enough to support internal linking back into the commercial pages."
      />

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Articles"
            title="Starter content for rankings and conversion support"
            description="These articles are written to answer specific search intent, not to fill the blog with generic fruit content."
          />
          <div className="grid gap-7 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="paper-shadow overflow-hidden rounded-[1.4rem] border border-[#1f4d2a]/12 bg-[var(--paper)]"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#b85b0e]">
                    {post.readingTime}
                  </p>
                  <h2 className="mt-3 font-heading text-3xl text-[#143018]">{post.title}</h2>
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
                </div>
              </article>
            ))}
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
