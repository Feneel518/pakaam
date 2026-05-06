import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/site/json-ld";
import {
  Breadcrumbs,
  Container,
  PageHero,
  PageSection,
  SectionHeading,
} from "@/components/site/marketing";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug, getProductBySlug } from "@/lib/site";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | Pakaam Journal`,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.image,
    keywords: [post.primaryKeyword, "Pakaam journal", "Kesar mango guide"],
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedProduct = getProductBySlug(post.relatedProductSlug);

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          image: post.image,
          path: `/blog/${post.slug}/`,
          publishedAt: post.publishedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "Journal" },
          { href: `/blog/${post.slug}/`, label: post.title },
        ]}
      />
      <PageHero
        eyebrow={post.primaryKeyword}
        title={post.title}
        description={post.description}
        image={post.image}
        imageAlt={post.imageAlt}
      />

      <PageSection>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <article className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <SectionHeading eyebrow="Article section" title={section.heading} />
                  <div className="space-y-5 text-base leading-8 text-[#5c4a2a]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>

            {relatedProduct ? (
              <aside className="paper-shadow overflow-hidden rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#b85b0e]">
                    Related product
                  </p>
                  <h2 className="mt-3 font-heading text-3xl text-[#143018]">
                    {relatedProduct.shortName}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">
                    {relatedProduct.description}
                  </p>
                  <Link
                    href={`/mango-boxes/${relatedProduct.slug}/`}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-5 rounded-full bg-[#143018] px-4 text-[#fffcf4] hover:bg-[#1f4d2a]",
                    )}
                  >
                    View product page
                  </Link>
                </div>
              </aside>
            ) : null}
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
