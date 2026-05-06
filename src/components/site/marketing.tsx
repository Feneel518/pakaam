import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  createWhatsAppLink,
  footerNav,
  siteConfig,
  topNav,
  trustSignals,
  type Product,
} from "@/lib/site";
import { TrackedLink } from "@/components/site/tracked-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1f4d2a]/10 bg-[#fbf5e9]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/pakaam-logo.png"
            alt="Pakaam logo"
            width={164}
            height={64}
            className="h-auto w-auto max-h-[58px]"
            priority={false}
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1b1404] lg:flex">
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--kesar-deep)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedLink
          href={createWhatsAppLink(
            "Hi Pakaam, I want to order Valsad Kesar mangoes. Please share today's options.",
          )}
          target="_blank"
          rel="noreferrer"
          eventName="whatsapp_click"
          eventParams={{
            event_category: "conversion",
            event_label: "site_header",
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full bg-[#143018] px-5 text-[#fffcf4] hover:bg-[#1f4d2a]",
          )}
        >
          Order on WhatsApp
        </TrackedLink>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#143018] px-4 py-16 text-[#e9ddb5] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(3,.9fr)]">
          <div>
            <Image
              src="/images/pakaam-logo.png"
              alt="Pakaam logo"
              width={220}
              height={80}
              className="h-auto w-auto rounded-2xl bg-[#fbf5e9] px-3 py-2"
            />
            <p className="mt-5 max-w-md text-lg leading-8 text-[#fbf5e9]">
              Orchard-direct Valsad Kesar mango boxes with natural ripening, WhatsApp ordering,
              and support that stays human.
            </p>
          </div>

          <FooterColumn title="Shop" items={topNav.slice(0, 4)} />
          <FooterColumn title="Trust" items={footerNav} />
          <div>
            <div className="font-heading text-xl text-[#fbf5e9]">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-[#e9ddb5]/85">
              <li>{siteConfig.location}</li>
              <li>
                <TrackedLink
                  href={`mailto:${siteConfig.email}`}
                  eventName="email_click"
                  eventParams={{
                    event_category: "conversion",
                    event_label: "footer_email",
                  }}
                  className="hover:text-[#fbf5e9] hover:underline"
                >
                  {siteConfig.email}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={createWhatsAppLink(
                    "Hi Pakaam, I want help choosing a Kesar mango box.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  eventName="whatsapp_click"
                  eventParams={{
                    event_category: "conversion",
                    event_label: "footer_whatsapp",
                  }}
                  className="hover:text-[#fbf5e9] hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#e9ddb5]/15" />

        <div className="flex flex-col gap-3 text-sm text-[#e9ddb5]/75 lg:flex-row lg:items-center lg:justify-between">
          <div>
            Copyright 2026 {siteConfig.name} | {siteConfig.location}
          </div>
          <div>Natural ripening | Orchard-direct sourcing | Seasonal India delivery</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <div className="font-heading text-xl text-[#fbf5e9]">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-[#e9ddb5]/80">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition hover:text-[#fbf5e9] hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StickyOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-[#1f4d2a]/15 bg-[#fffcf4]/95 px-4 py-3 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b85b0e]">
            First harvest now booking
          </p>
          <p className="truncate text-sm text-[#143018]">
            Order orchard-direct Valsad Kesar boxes on WhatsApp.
          </p>
        </div>
        <TrackedLink
          href={createWhatsAppLink(
            "Hi Pakaam, I want to reserve a Kesar mango box. Please share today's availability.",
          )}
          target="_blank"
          rel="noreferrer"
          eventName="whatsapp_click"
          eventParams={{
            event_category: "conversion",
            event_label: "sticky_bar",
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "shrink-0 rounded-full bg-[#143018] px-4 text-[#fffcf4] hover:bg-[#1f4d2a]",
          )}
        >
          Reserve Now
        </TrackedLink>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="hero-wash overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Badge
            variant="outline"
            className="rounded-full border-[#1f4d2a]/15 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#1f4d2a]"
          >
            {eyebrow}
          </Badge>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.04em] text-[#143018] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5c4a2a] sm:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {image ? (
          <div className="paper-shadow relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-[#143018]">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#143018]/65 via-transparent to-transparent" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[#5c4a2a]">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index === items.length - 1 ? (
              <span className="font-medium text-[#143018]">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#b85b0e] hover:underline">
                {item.label}
              </Link>
            )}
            {index < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b85b0e]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-4xl text-[#143018] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-[#5c4a2a]">{description}</p> : null}
    </div>
  );
}

export function TrustGrid() {
  return (
    <section className="bg-[#143018] px-4 py-10 text-[#e9ddb5] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-5">
        {trustSignals.map((signal) => (
          <div
            key={signal}
            className="rounded-2xl border border-[#e9ddb5]/12 bg-[#1b4020] px-5 py-5 text-sm leading-6"
          >
            {signal}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="paper-shadow overflow-hidden rounded-[1.2rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4ead3]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <Badge className="absolute left-4 top-4 rounded-full bg-[#143018] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--mango)]">
          {product.badge}
        </Badge>
      </div>
      <CardHeader className="space-y-3 px-6 pt-6">
        <div className="text-[11px] uppercase tracking-[0.16em] text-[#5c4a2a]">
          {product.sku} | {product.mangoCount}
        </div>
        <CardTitle className="font-heading text-[1.9rem] text-[#143018]">
          {product.shortName}
        </CardTitle>
        <p className="text-sm leading-7 text-[#5c4a2a]">{product.description}</p>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="grid gap-2 border-y border-dashed border-[#1f4d2a]/12 py-4 text-sm text-[#5c4a2a]">
          <div>
            <strong className="text-[#143018]">Price:</strong> {product.price}
          </div>
          <div>
            <strong className="text-[#143018]">Shipping:</strong> {product.shippedPrice}
          </div>
          <div>
            <strong className="text-[#143018]">Dispatch:</strong> {product.dispatchWindow}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/mango-boxes/${product.slug}/`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-[#1f4d2a]/15 bg-transparent px-4 text-[#143018] hover:bg-[#f4ead3]",
            )}
          >
            View details
          </Link>
          <TrackedLink
            href={createWhatsAppLink(product.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            eventName="product_interest"
            eventParams={{
              event_category: "conversion",
              event_label: product.slug,
            }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-[var(--kesar)] px-4 text-white hover:bg-[var(--kesar-deep)]",
            )}
          >
            Reserve on WhatsApp <ArrowRight className="size-4" />
          </TrackedLink>
        </div>
      </CardContent>
    </Card>
  );
}

export function InfoCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="paper-shadow rounded-[1.2rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
      <CardContent className="p-6">
        <h3 className="font-heading text-2xl text-[#143018]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b85b0e] hover:underline"
        >
          Read more <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function CalloutCta({
  title,
  copy,
  whatsappLabel = "Order on WhatsApp",
  whatsappMessage,
  secondaryHref,
  secondaryLabel,
  eventLabel,
}: {
  title: string;
  copy: string;
  whatsappLabel?: string;
  whatsappMessage: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  eventLabel: string;
}) {
  return (
    <Card className="rounded-[1.5rem] border-none bg-[#143018] py-0 text-[#fbf5e9]">
      <CardContent className="p-8 sm:p-10">
        <h2 className="font-heading text-4xl text-[#fbf5e9] sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#e9ddb5]/85">{copy}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <TrackedLink
            href={createWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            eventName="whatsapp_click"
            eventParams={{
              event_category: "conversion",
              event_label: eventLabel,
            }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-[var(--kesar)] px-5 text-white hover:bg-[var(--kesar-deep)]",
            )}
          >
            {whatsappLabel} <MessageCircleMore className="size-4" />
          </TrackedLink>
          {secondaryHref && secondaryLabel ? (
            <TrackedLink
              href={secondaryHref}
              eventName="email_click"
              eventParams={{
                event_category: "lead",
                event_label: `${eventLabel}_secondary`,
              }}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-[#e9ddb5]/25 bg-transparent px-5 text-[#fbf5e9] hover:bg-[#1f4d2a]",
              )}
            >
              {secondaryLabel}
            </TrackedLink>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export function ContactStrip() {
  return (
    <section className="bg-[#f4ead3] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        <ContactCard
          icon={<PhoneCall className="size-4" />}
          label="WhatsApp"
          title={siteConfig.phoneDisplay}
          copy="Fastest path for orders and dispatch questions."
        />
        <ContactCard
          icon={<Mail className="size-4" />}
          label="Email"
          title={siteConfig.email}
          copy="Useful for gifting coordination and harvest alerts."
        />
        <ContactCard
          icon={<MapPin className="size-4" />}
          label="Base"
          title="Valsad, Gujarat"
          copy="Trust position anchored in South Gujarat orchard sourcing."
        />
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  title,
  copy,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <Card className="paper-shadow rounded-[1.2rem] border border-[#1f4d2a]/12 bg-[var(--paper)] py-0">
      <CardContent className="p-6">
        <div className="mb-4 grid size-10 place-items-center rounded-full border border-[#1f4d2a]/12 bg-[#fbf5e9] text-[#143018]">
          {icon}
        </div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-[#5c4a2a]">{label}</div>
        <div className="mt-2 font-heading text-2xl text-[#143018]">{title}</div>
        <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">{copy}</p>
      </CardContent>
    </Card>
  );
}

export function HarvestAlertCard() {
  return (
    <Card className="paper-shadow rounded-[1.5rem] border border-[#1f4d2a]/12 bg-[var(--paper)] py-0">
      <CardContent className="p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b85b0e]">
          Softer lead capture
        </p>
        <h3 className="mt-4 font-heading text-3xl text-[#143018]">Get harvest alerts by email</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5c4a2a]">
          Not ready to order today? Ask for a harvest alert and product availability summary when
          the next dispatch opens.
        </p>
        <TrackedLink
          href={`mailto:${siteConfig.email}?subject=Harvest%20alerts%20for%20Pakaam`}
          eventName="email_click"
          eventParams={{
            event_category: "lead",
            event_label: "harvest_alert",
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 rounded-full bg-[#143018] px-5 text-[#fffcf4] hover:bg-[#1f4d2a]",
          )}
        >
          Email for alerts
        </TrackedLink>
      </CardContent>
    </Card>
  );
}

export function PageSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>{children}</section>;
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}

export function PrimaryAction({
  href,
  children,
  eventLabel,
}: {
  href: string;
  children: React.ReactNode;
  eventLabel: string;
}) {
  return (
    <TrackedLink
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      eventName="whatsapp_click"
      eventParams={{
        event_category: "conversion",
        event_label: eventLabel,
      }}
      className={cn(
        buttonVariants({ size: "lg" }),
        "rounded-full bg-[#143018] px-5 text-[#fffcf4] hover:bg-[#1f4d2a]",
      )}
    >
      {children}
    </TrackedLink>
  );
}

export function SecondaryAction({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "rounded-full border-[#1f4d2a]/15 bg-transparent px-5 text-[#143018] hover:bg-[#f4ead3]",
      )}
    >
      {children}
    </Link>
  );
}

export function MiniFacts({
  facts,
}: {
  facts: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-2xl border border-[#1f4d2a]/12 bg-[#fffcf4] px-5 py-4"
        >
          <div className="font-heading text-2xl text-[#143018]">{fact.value}</div>
          <div className="mt-1 text-sm text-[#5c4a2a]">{fact.label}</div>
        </div>
      ))}
    </div>
  );
}
