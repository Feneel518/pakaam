import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollNavbar } from "@/components/site/scroll-navbar";
import { cn } from "@/lib/utils";
import { jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buy Valsadi Kesar Mangoes in Valsad, Gujarat",
  description:
    "Pakaam offers orchard-direct Valsadi Kesar mango boxes from Valsad, Gujarat with natural ripening, hand-sorting, WhatsApp ordering, gifting, and replacement support.",
  keywords: [
    "buy Valsadi Kesar mangoes",
    "Valsad mango boxes",
    "Kesar mangoes Gujarat",
    "orchard direct mangoes Valsad",
    "mango gifting Gujarat",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Pakaam | Valsadi Kesar Mango Boxes from Valsad, Gujarat",
    description:
      "Order orchard-direct Valsadi Kesar mango boxes from Valsad, Gujarat with natural ripening, gifting options, and WhatsApp support.",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Orchard-direct Valsadi Kesar mangoes from Pakaam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakaam | Orchard-Direct Valsadi Kesar Mangoes",
    description:
      "Buy naturally ripened Valsadi Kesar mango boxes from Pakaam in Valsad, Gujarat.",
    images: [siteConfig.socialImage],
  },
};

const navItems = [
  { label: "Catalog", href: "#shop" },
  { label: "Orchards", href: "#orchard" },
  { label: "Journey", href: "#journey" },
  { label: "Gifting", href: "#gifting" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const whatsappNumber = "919099064667";
const supportEmail = "feneelp@gmail.com";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const generalWhatsAppLink = createWhatsAppLink(
  "Hi Pakaam, I want to know more about your mango boxes.",
);

const reserveWhatsAppLink = createWhatsAppLink(
  "Hi Pakaam, I want to reserve a mango box. Please share the available options.",
);

const shopFooterItems = [
  {
    label: "3 kg Trial Box",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to order the 3 kg Trial Box. Please share the details.",
    ),
  },
  {
    label: "5 kg Family Box",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to order the 5 kg Family Box. Please share the details.",
    ),
  },
  {
    label: "10 kg Value Box",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to order the 10 kg Value Box. Please share the details.",
    ),
  },
  {
    label: "Mango Season Pass",
    href: createWhatsAppLink(
      "Hi Pakaam, I am interested in the Mango Season Pass. Please share the details.",
    ),
  },
  {
    label: "Aamras & Pickle",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to order Aamras and Pickle. Please share the details.",
    ),
  },
];

const contactFooterItems = [
  {
    label: "WhatsApp · +91 90990 64667",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to know more about your mango boxes.",
    ),
  },
  { label: "feneelp@gmail.com" },
  { label: "Mon–Sat · 9 AM – 8 PM" },
  { label: "Pakaam" },
];

const contactDetailsFooterItems = [
  {
    label: "WhatsApp · +91 90990 64667",
    href: createWhatsAppLink(
      "Hi Pakaam, I want to know more about your mango boxes.",
    ),
  },
  { label: supportEmail, href: `mailto:${supportEmail}` },
  { label: "Mon-Sat · 9 AM - 8 PM" },
  { label: "Pakaam" },
];

const contactTopics = [
  "Pre-ordering a box",
  "Corporate gifting (20+ boxes)",
  "Mango season pass",
  "Replacement or damaged box",
  "Partnerships and press",
];

const trustItems = [
  { icon: ShieldCheck, title: "Naturally ripened", copy: "In hay, no carbide" },
  {
    icon: CheckCircle2,
    title: "Hand-sorted",
    copy: "Grade A only in your box",
  },
  { icon: Truck, title: "Same-day pack", copy: "Tree to box to courier" },
  {
    icon: MessageCircleMore,
    title: "WhatsApp support",
    copy: "Real human, every order",
  },
  {
    icon: HeartPulse,
    title: "Replacement",
    copy: "Damaged on arrival? Replaced.",
  },
];

const products = [
  {
    name: "Trial Box · 3 kg",
    sku: "PKM-03",
    count: "≈ 7–9 mangoes",
    price: "₹599",
    note: "local · ₹799 shipped",
    tag: "First-Timer",
    tagTone: "light",
    image: "/images/10.jpg",
    alt: "Pakaam 3 kg trial box of orchard-direct Valsadi Kesar mangoes",
    description:
      "A low-risk first taste. Hand-picked Grade A Kesar, vine-ripened then arrested for transit so they finish at your kitchen counter, not in the truck.",
    whatsappLink: createWhatsAppLink(
      "Hi Pakaam, I want to reserve the Trial Box (3 kg). Please share the details.",
    ),
    specs: [
      ["3 kg", "net weight"],
      ["Semi-ripe", "at dispatch"],
      ["4–6 days", "to perfect"],
      ["Pan-India", "shipping"],
    ],
  },
  {
    name: "Family Box · 5 kg",
    sku: "PKM-05",
    count: "≈ 12–14 mangoes",
    price: "₹999",
    note: "local · ₹1,499 shipped",
    tag: "Best Seller",
    tagTone: "dark",
    image: "/images/5.jpg",
    alt: "Pakaam 5 kg family box of naturally ripened Valsadi Kesar mangoes",
    description:
      "The box that built our reputation. Mid-season Kesar at peak sweetness, layered in mango leaves and hay, with a ripening card so every meal of the week is its own.",
    whatsappLink: createWhatsAppLink(
      "Hi Pakaam, I want to reserve the Family Box (5 kg). Please share the details.",
    ),
    specs: [
      ["5 kg", "net weight"],
      ["Mixed ripeness", "eat through week"],
      ["Free", "ripening card"],
      ["Replace", "damaged units"],
    ],
  },
  {
    name: "Value Box · 10 kg",
    sku: "PKM-10",
    count: "≈ 24–28 mangoes",
    price: "₹1,899",
    note: "local · ₹2,699 shipped",
    tag: "Best Value",
    tagTone: "light",
    image: "/images/3.jpg",
    alt: "Pakaam 10 kg value box of premium Valsadi Kesar mangoes from Gujarat",
    description:
      "For households that count the season in kilos, not days. Lower price per kilo, with the same Grade A grading and a small reserve included for any that do not survive the trip.",
    whatsappLink: createWhatsAppLink(
      "Hi Pakaam, I want to reserve the Value Box (10 kg). Please share the details.",
    ),
    specs: [
      ["10 kg", "net weight"],
      ["Best", "price per kg"],
      ["Ventilated", "twin crate"],
      ["Pulp-grade", "buffer included"],
    ],
  },
];

const orchards = [
  {
    title: "Patel Orchard",
    meta: "Pardi · Plot 4 · Est. 1962",
    image: "/images/farm1.jpg",
    alt: "Valsadi Kesar mango orchard in Valsad, Gujarat",
  },
  {
    title: "Desai Wadi",
    meta: "Atul · Plot 9 · Est. 1948",
    image: "/images/farm2.jpg",
    alt: "Kesar mangoes growing on trees in a Gujarat orchard",
  },
  {
    title: "Tandel Bagicho",
    meta: "Dharampur · Plot 2 · Est. 1971",
    image: "/images/farm3.jpg",
    alt: "Hand sorting orchard-direct mangoes for Pakaam dispatch",
  },
];

const journeySteps = [
  {
    step: "1",
    title: "Pre-book",
    copy: "You reserve a box. We do not pick a single fruit until the orders are in.",
  },
  {
    step: "2",
    title: "Hand-pick",
    copy: "Sunrise harvest at the orchard, only fruit that has shouldered.",
  },
  {
    step: "3",
    title: "Sort + grade",
    copy: "Three grades. Only A goes in your box. B goes local, C to pulp.",
  },
  {
    step: "4",
    title: "Hay-pack",
    copy: "Layered in dry rice straw and mango leaves, the way our grandmothers did.",
  },
  {
    step: "5",
    title: "Ride along",
    copy: "Lot number, ripening card, and a WhatsApp ping when it leaves the dispatch room.",
  },
];

const ripeningStages = [
  {
    day: "Stage 01 · Day 1–2",
    title: "The Quiet Mango",
    copy: "Skin is still firm. Sit them stem-down on a counter, wrapped in newspaper. Do not refrigerate because cold stalls the ripening enzymes.",
    tone: "bg-[#ecf2d7]",
  },
  {
    day: "Stage 02 · Day 3–4",
    title: "The Awakening",
    copy: "Sweet smell at the stem, slight give to the press. This is the eating window for fresh slicing before the texture softens.",
    tone: "bg-[#fff0b8]",
  },
  {
    day: "Stage 03 · Day 5–6",
    title: "The Pulp Hour",
    copy: "Saffron-gold flesh, almost dripping. Best for aamras, ice cream, or eating over the kitchen sink. Beyond day 7, freeze for off-season.",
    tone: "bg-[#ffd5ae]",
  },
];

const faqs = [
  {
    question: "Are these really from Valsad?",
    answer:
      "Yes. Every box ships with a lot number printed on the side that traces back to the specific orchard and pick date. We can also share orchard videos on WhatsApp.",
  },
  {
    question: "How are they ripened?",
    answer:
      "Naturally. Packed in dry rice straw with mango leaves, the same way South Gujarat households have done for generations. We do not use carbide or ethylene chambers in our process.",
  },
  {
    question: "What if my box arrives damaged?",
    answer:
      "Send a photo or video on WhatsApp within 12 hours of delivery. Genuine damage is replaced, store-credited, or refunded with no arguments.",
  },
  {
    question: "Why are the mangoes firm when they arrive?",
    answer:
      "Because we do not ship ripe fruit on a long journey. Long-distance boxes are dispatched semi-ripe so they finish at your home.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Not yet. We are focused on getting India right first. NRIs can still order to family addresses inside India and we will handle the rest.",
  },
  {
    question: "Corporate gifting minimum order?",
    answer:
      "20 boxes for co-branded inserts and 5 boxes for plain premium boxes. We usually need 7 working days for personalized messages.",
  },
];

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      url: `${siteConfig.domain}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": `${siteConfig.domain}/#organization`,
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.domain}/`,
      logo: `${siteConfig.domain}/images/pakaam-logo.png`,
      image: `${siteConfig.domain}${siteConfig.socialImage}`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      priceRange: "INR 599-2699",
      areaServed: [
        {
          "@type": "City",
          name: siteConfig.city,
        },
        {
          "@type": "State",
          name: siteConfig.state,
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        postalCode: siteConfig.postalCode,
        addressCountry: siteConfig.country,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          areaServed: "IN",
          availableLanguage: ["en", "hi", "gu"],
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.domain}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.domain}/#products`,
      name: "Pakaam mango boxes",
      itemListElement: products.map((product, index) => ({
        "@type": "Product",
        position: index + 1,
        name: product.name,
        sku: product.sku,
        description: product.description,
        image: `${siteConfig.domain}${product.image}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.price.replace(/[^\d.]/g, ""),
          availability: "https://schema.org/InStock",
          url: product.whatsappLink,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageJsonLd) }}
      />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <TopRibbon />
        <ScrollNavbar
          navItems={navItems}
          generalWhatsAppLink={generalWhatsAppLink}
          reserveWhatsAppLink={reserveWhatsAppLink}
        />

        <header className="hero-wash relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="paper-shadow rounded-full border-[#1f4d2a]/15 bg-white/80 px-4 py-4 text-[11px] tracking-[0.22em] uppercase text-[#1f4d2a]">
                <span className="size-2 rounded-full bg-orange-500 mr-2" />
                First Harvest · 4ay 2026 · Now Booking
              </Badge>

              <div className="space-y-5">
                <h1 className="font-heading max-w-4xl text-5xl leading-[0.9]  tracking-[-0.04em] text-[#143018] sm:text-7xl lg:text-[6.75rem]">
                  The <em className=" italic text-orange-500">Kesar</em>
                  <br />
                  of Valsad,
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5c4a2a] sm:text-lg sm:leading-8">
                  Hand-picked from family orchards along the Auranga river in
                  Valsad, Gujarat, naturally ripened in hay, and packed the same
                  day they leave the tree. No carbide. No middlemen. Just the
                  orchard-direct Valsadi Kesar mango South Gujarat has been
                  quietly hoarding for generations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={reserveWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-[#143018] px-5 h-12 text-[#fffcf4] hover:bg-[#1f4d2a]",
                  )}>
                  Reserve a Box · From ₹599
                </Link>
                <Link
                  href={generalWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full border-[#1f4d2a]/15 bg-transparent px-5 h-12 text-[#143018] hover:bg-[#f4ead3]",
                  )}>
                  Order on WhatsApp
                </Link>
              </div>

              <div className="grid gap-5 border-t border-[#1f4d2a]/15 pt-6  grid-cols-3">
                {[
                  ["3 Grades", "Hand sorted"],
                  ["48 hr", "Tree to door, local"],
                  ["100%", "Replacement guarantee"],
                ].map(([value, label]) => (
                  <div key={label} className="text-center">
                    <div className="font-heading text-3xl font-semibold text-[#143018]">
                      {value}
                    </div>
                    <div className="text-sm text-[#5c4a2a]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="paper-shadow relative aspect-[4/5]  rounded-[1.75rem] bg-black">
                <Image
                  src="/images/mangoHero.jpg"
                  alt="Fresh Valsadi Kesar mangoes hanging in a Pakaam orchard in Valsad, Gujarat"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#143018]/75" />
                <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between gap-5 text-[#fbf5e9]">
                  <div
                    aria-hidden
                    className="absolute -bottom-16 -right-4 lg:-right-16 w-36 h-36 rounded-2xl bg-orange-500/90 shadow-lg shadow-mango/20 flex flex-col items-center justify-center gap-1 rotate-3">
                    <span className="font-serif text-4xl font-bold text-leaf leading-none">
                      12+
                    </span>
                    <span className="text-xs font-semibold text-leaf/70 font-sans text-center leading-tight">
                      years of
                      <br />
                      Valsad harvest
                    </span>
                  </div>
                  <div className="max-w-[220px] text-right text-[11px] tracking-[0.18em] uppercase sm:text-xs">
                    21.5957° N · 72.9292° E
                    <span className="font-heading mt-1 block text-2xl normal-case tracking-normal">
                      Valsad, Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-[#143018] px-4 py-0 text-[#e9ddb5] sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2 xl:grid-cols-5">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-center gap-4 border-[#e9ddb5]/20 px-0 py-6 md:px-5 xl:py-7",
                    index < trustItems.length - 1 && "xl:border-r",
                  )}>
                  <div className="grid size-10 place-items-center rounded-full border border-[#e9ddb5]/30 text-orange-500">
                    <Icon className="size-4" />
                  </div>
                  <div className="text-sm">
                    <div className="font-heading text-base text-[#fbf5e9]">
                      {item.title}
                    </div>
                    <div className="text-[#e9ddb5]/80">{item.copy}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="shop" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="The Catalog · Season 2026"
              title={
                <>
                  Three boxes. One{" "}
                  <em className="italic text-orange-500">extraordinary</em>{" "}
                  mango.
                </>
              }
              copy="We do not ship varieties. We ship one, Valsadi Kesar, at three sizes for three rituals: a careful first taste, the family table, the season-long appetite."
              asideLabel="Booking now · Dispatch from"
              asideValue="May 25 → June 30"
            />

            <div className="grid gap-7 lg:grid-cols-3">
              {products.map((product) => (
                <Card
                  key={product.name}
                  className="paper-shadow overflow-hidden rounded-[1.15rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f4ead3]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={cn(
                        "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] tracking-[0.14em] uppercase",
                        product.tagTone === "dark"
                          ? "bg-[#143018] text-orange-500"
                          : "bg-[#fffcf4] text-[#143018]",
                      )}>
                      {product.tag}
                    </Badge>
                  </div>
                  <CardHeader className="space-y-3 px-6 pt-6">
                    <div className="flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-[#5c4a2a]">
                      <span>SKU · {product.sku}</span>
                      <span>{product.count}</span>
                    </div>
                    <CardTitle className="font-heading text-[1.7rem] font-semibold text-[#143018]">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-[#5c4a2a]">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-dashed border-[#1f4d2a]/15 py-4">
                      {product.specs.map(([value, label]) => (
                        <div key={`${product.name}-${value}`}>
                          <div className="font-heading text-base font-semibold text-[#143018]">
                            {value}
                          </div>
                          <div className="text-xs text-[#5c4a2a]">{label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-end justify-between gap-4 border-none bg-transparent px-6 pb-6 pt-0">
                    <div>
                      <div className="font-heading text-4xl font-semibold text-[#143018]">
                        {product.price}
                      </div>
                      <div className="text-[11px] tracking-[0.14em] uppercase text-[#5c4a2a]">
                        {product.note}
                      </div>
                    </div>
                    <Link
                      href={product.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "rounded-full bg-orange-500 px-4 text-white hover:bg-orange-400",
                      )}>
                      Reserve <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="orchard"
          className="orchard-wash px-4 py-24 text-[#e9ddb5] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow className="text-orange-500">Meet the growers</Eyebrow>
                <h2 className="font-heading mt-4 text-4xl leading-15  text-[#fbf5e9] sm:text-7xl">
                  Many families.
                  <br />
                  <span className="inline-block text-nowrap">
                    One{" "}
                    <em className="italic text-orange-500 text-nowrap">
                      forty-kilometre
                    </em>{" "}
                  </span>
                  belt.
                </h2>
              </div>
              <p className="max-w-lg ml-auto text-base leading-8 text-[#e9ddb5]/85">
                From Pardi to Dharampur, our partner orchards share one stretch
                of red-black coastal soil, the same earth that has been growing
                Valsadi Kesar for four generations. We do not own a tree. We pay
                above market, in cash, on the day. Every box you open carries
                the lot number of the orchard it came from.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {orchards.map((orchard) => (
                <div
                  key={orchard.title}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={orchard.image}
                    alt={orchard.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#143018]/90" />
                  <div className="absolute inset-x-4 bottom-4 z-10">
                    <div className="font-heading text-2xl text-[#fbf5e9]">
                      {orchard.title}
                    </div>
                    <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-orange-500">
                      {orchard.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-8 border-t border-[#e9ddb5]/20 pt-8 grid-cols-3 text-center">
              {[
                ["40 km", "Sourcing Radius"],
                ["4", "Generations Deep"],
                ["Above₹", "Market price, on the day"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-heading text-5xl leading-none font-semibold text-orange-500">
                    {value}
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.16em] uppercase text-[#e9ddb5]/70">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-orange-500 px-5 text-white hover:bg-orange-400">
              Watch the harvest
            </Button>
            <Link
              href="#journey"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-[#e9ddb5]/30 bg-transparent px-5 text-[#e9ddb5] hover:bg-white/8",
              )}>
              Meet our growers
            </Link>
          </div> */}
          </div>
        </section>

        <section
          id="journey"
          className="bg-[#f4ead3] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Tree to your table"
              title={
                <>
                  Five honest steps,
                  <br />
                  nothing skipped.
                </>
              }
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {journeySteps.map((step) => (
                <div key={step.step} className="relative pr-4 ">
                  <div className="mb-5 grid size-12 place-items-center rounded-full bg-[#143018] font-heading text-2xl text-orange-500">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-2xl text-[#143018]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#5c4a2a]">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gifting" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Souvenirs & In-box paper"
              title={
                <>
                  Every box opens like a{" "}
                  <em className="italic text-orange-500">letter</em>.
                </>
              }
              copy="Templates we tuck into every order: gift cards for the people you love, ripening guides for first-timers, branded labels and corporate stickers, plus the off-season souvenirs that keep Pakaam on your shelf till next May."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
              <SouvenirCard
                className="xl:col-span-4"
                title="Custom Gift Card"
                copy="Hand-lettered, printed on 320 gsm cotton paper. We write your message in Devanagari or English and tuck it inside the box."
                price="Free"
                meta="with every gift box">
                <div className="flex h-full flex-col justify-between bg-gradient-to-br from-[#ffe9b0] to-[#f2b339] p-6 text-[#143018]">
                  <div className="text-xs tracking-[0.22em] uppercase">
                    Pakaam · Greeting Card 01
                  </div>
                  <div className="font-heading font-devanagari max-w-[70%] text-3xl leading-tight italic">
                    Saalbhar yaad rakhne wala swaad, aapke ghar tak.
                  </div>
                  <div className="flex justify-between text-[10px] tracking-[0.18em] uppercase">
                    <div>
                      With love from
                      <div className="font-heading mt-1 text-lg normal-case tracking-normal">
                        The Pakaam Family
                      </div>
                    </div>
                    <div className="text-right">
                      Season
                      <div className="font-heading mt-1 text-lg normal-case tracking-normal">
                        2026
                      </div>
                    </div>
                  </div>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="Ripening Guide Card"
                copy="The honest mango calendar. We tape one to the lid so the box is a teacher, not a guess."
                price="Included"
                meta="standard insert">
                <div className="h-full border border-dashed rounded-t-xl border-[#1f4d2a] bg-[#fffcf4] p-5">
                  <div className="font-heading text-2xl text-[#143018]">
                    Ripening Guide
                  </div>
                  <div className="mb-4 text-[10px] tracking-[0.2em] uppercase text-orange-500">
                    Every box · Every time
                  </div>
                  {[
                    ["#5c8a2e", "Day 1–2", "Firm · keep wrapped in newspaper"],
                    [
                      "#bfd66b",
                      "Day 3",
                      "Yields slightly · counter, not fridge",
                    ],
                    ["#f2b339", "Day 4", "Sweet smell at stem · eat now"],
                    ["#e8821c", "Day 5–6", "Peak Kesar · serve chilled"],
                    ["#b85b0e", "Day 7+", "Pulp · freeze for aamras"],
                  ].map(([color, day, text]) => (
                    <div
                      key={day}
                      className="flex items-center gap-3 border-t border-[#1f4d2a]/15 py-2 first:border-t-0">
                      <span
                        className="size-3.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <div className="font-heading text-sm text-[#143018]">
                        {day}
                      </div>
                      <div className="text-xs text-[#5c4a2a]">{text}</div>
                    </div>
                  ))}
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="Lot-traced Box Label"
                copy="Every box wears its biography. Orchard, plot, pick date, printed onto the kraft, scannable QR optional."
                price="Standard"
                meta="FSSAI compliant">
                <div className="flex h-full flex-col justify-between bg-[#143018] p-6 text-[#fbf5e9]">
                  <div className="flex items-start justify-between">
                    <div className="font-heading text-3xl text-orange-500">
                      Pakaam
                    </div>
                    <div className="text-right text-[9px] tracking-[0.25em] uppercase text-[#fbf5e9]/60">
                      LOT
                      <br />
                      VLS · 26 / 048
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-orange-500">
                      Family Box · 5 kg
                    </div>
                    <div className="font-heading text-4xl text-[#fbf5e9]">
                      Valsadi Kesar
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[9px] tracking-[0.18em] uppercase text-[#fbf5e9]/70">
                    <div>
                      Orchard
                      <div className="font-heading mt-1 text-sm normal-case tracking-normal text-[#fbf5e9]">
                        Pardi · Plot 4
                      </div>
                    </div>
                    <div>
                      Picked
                      <div className="font-heading mt-1 text-sm normal-case tracking-normal text-[#fbf5e9]">
                        17 May 2026
                      </div>
                    </div>
                  </div>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-6"
                title="Corporate Co-branded Insert"
                copy="Your logo, your message, your client list, printed and slipped into a 5 kg or 10 kg premium gift box."
                price="+₹120 / box"
                meta="Setup ₹2,500">
                <div className="relative flex h-full flex-col items-center justify-center border-2 rounded-t-xl border-[#143018] bg-[#f4ead3] p-6 text-center">
                  <div className="text-[9px] tracking-[0.3em] uppercase text-orange-500">
                    Compliments of
                  </div>
                  <div className="font-heading mt-3 max-w-[70%] text-3xl leading-tight text-[#143018]">
                    To our partners, with our deepest thanks.
                  </div>
                  <div className="my-4 grid size-14 place-items-center rounded-md border border-dashed border-[#143018] bg-[#fffcf4] text-[9px] tracking-[0.18em] uppercase text-[#5c4a2a]">
                    Your Logo
                  </div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-[#5c4a2a]">
                    From
                    <div className="font-heading mt-1 text-lg normal-case tracking-normal text-[#143018]">
                      Patel & Associates · Vapi
                    </div>
                  </div>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-6"
                title="The Mango Pass · Season Subscription"
                copy="One Family Box every week for six weeks. Skip a week on WhatsApp, never re-order. Locks in early-bird pricing for the whole season."
                price="₹4,999"
                meta="save ₹995 vs single boxes">
                <div className="grid-wash relative flex h-full flex-col justify-between bg-orange-500 overflow-hidden bg-gradient-to-br from-[#143018] to-[#1f4d2a] p-6 text-[#fbf5e9]">
                  <div className="flex items-start justify-between">
                    <div className="text-[10px] tracking-[0.3em] uppercase ">
                      Season Pass
                      <div className="font-heading mt-2 text-3xl normal-case tracking-normal text-[#fbf5e9]">
                        The Pakaam Pass
                      </div>
                    </div>
                    <div className="mango-ring h-12 w-12 rounded-full bg-[radial-gradient(circle_at_35%_35%,#FFD877,#E8821C_60%,#B85B0E)]" />
                  </div>
                  <div className="font-heading max-w-[70%] text-3xl italic">
                    Six boxes. Six weeks. One steady mango.
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-[9px] tracking-[0.18em] uppercase text-[#fbf5e9]/75">
                    <div>
                      Valid
                      <div className="font-heading mt-1 text-sm normal-case tracking-normal text-[#fbf5e9]">
                        May → June ’26
                      </div>
                    </div>
                    <div>
                      Tier
                      <div className="font-heading mt-1 text-sm normal-case tracking-normal text-[#fbf5e9]">
                        Family · 5 kg
                      </div>
                    </div>
                    <div>
                      Pass No.
                      <div className="font-heading mt-1 text-sm normal-case tracking-normal text-[#fbf5e9]">
                        0042
                      </div>
                    </div>
                  </div>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="Thank-You Postcard"
                copy="Hand-signed by the orchard owner, ships in every Family and Value box. Customers tell us they keep them."
                price="Free"
                meta="signed insert">
                <div className="grid h-full grid-cols-2 border border-[#1f4d2a]/15 bg-[#fffcf4]">
                  <div className="relative">
                    <Image
                      src="/images/postcard.jpg"
                      alt="Pakaam postcard orchard scene"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4">
                    <div>
                      <div className="font-heading text-3xl italic text-[#143018]">
                        Aabhaar.
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[#5c4a2a]">
                        You bought a fruit. We grew a season. Thank you for
                        showing up for our orchards, our pickers, and our small
                        idea.
                      </p>
                    </div>
                    <div className="ml-auto w-fit border border-[#143018] px-2 py-1 text-center text-[8px] tracking-[0.15em] uppercase text-[#143018]">
                      Valsad
                      <div className="font-heading text-lg text-orange-500">
                        K
                      </div>
                      2026
                    </div>
                  </div>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="WhatsApp Dispatch Note"
                copy="The friendly heads-up your customer gets the moment the box leaves Valsad. Lot number, ripening order, replacement steps."
                price="Auto"
                meta="every order">
                <div className="flex h-full flex-col gap-3 bg-[#efe7d3] p-4">
                  <WhatsAppBubble inbound>
                    Hi! Your <b>Pakaam Family Box</b> is packed and ready. Lot{" "}
                    <b>VLS-26/048</b>, picked at sunrise from Orchard 4, Pardi.
                  </WhatsAppBubble>
                  <WhatsAppBubble>
                    Eat in this order:
                    <br />
                    • 2 ripe today
                    <br />
                    • 4 yielding by Sun
                    <br />• 6 firm wrapped in newspaper
                  </WhatsAppBubble>
                </div>
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="Aamras Jar"
                copy="Slow-pulped Grade A Kesar, frozen within 24 hr of harvest. No preservatives, no sugar. 1 kg of mango in every 500 ml jar."
                price="₹449"
                meta="500 ml · 12 mo shelf">
                <JarVisual
                  body="linear-gradient(180deg,#F2B339 0%, #E8821C 60%, #B85B0E 100%)"
                  lid="linear-gradient(180deg,#143018,#1F4D2A)"
                  title="Aamras"
                  subtitle="Valsadi Kesar · 500 ml"
                  foot="Frozen at −24°C"
                />
              </SouvenirCard>

              <SouvenirCard
                className="xl:col-span-4"
                title="Methia Keri Athanu"
                copy="Raw Valsadi Kesar, sun-cured with mustard, fenugreek and rock salt. Hand-mixed in 5 kg lots, ladled into glass with a kraft sleeve and cloth tie."
                price="₹349"
                meta="400 g · 6 mo shelf">
                <JarVisual
                  body="radial-gradient(ellipse at 30% 30%, #C8430E 0%, #8B2A07 70%)"
                  lid="linear-gradient(180deg,#8C6B2F,#5A3F12)"
                  title="Methia Keri"
                  subtitle="Sun-cured · 400 g"
                  foot="Daadi's recipe"
                  band="repeating-linear-gradient(45deg, #B85B0E 0 4px, #8B2A07 4px 8px)"
                />
              </SouvenirCard>
            </div>
          </div>
        </section>

        <section id="ripen" className="bg-[#f4ead3] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="The Ripening Guide"
              title="How to read a Pakaam box."
              copy="We dispatch most boxes semi-ripe so they finish at your house, not on the highway. Here is the three-stage rhythm we follow ourselves."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {ripeningStages.map((stage) => (
                <Card
                  key={stage.title}
                  className={cn(
                    "paper-shadow rounded-[1.4rem] border-none py-0",
                    stage.tone,
                  )}>
                  <CardContent className="space-y-4 p-8">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-full bg-white/65">
                        <Leaf className="size-5 text-[#143018]" />
                      </div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[#5c4a2a]">
                        {stage.day}
                      </div>
                    </div>
                    <h3 className="font-heading text-3xl text-[#143018]">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#5c4a2a]">
                      {stage.copy}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="From our 2025 customers"
            title={
              <>
                1,247 boxes shipped.
                <br />
                1,189 came back for more.
              </>
            }
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="paper-shadow rounded-[1.2rem] border border-[#1f4d2a]/15 bg-[var(--paper)] px-1 py-1">
                <CardContent className="space-y-5 p-7">
                  <div className="flex gap-1 text-orange-500">
                    {Array.from({ length: 5 4).map((_, index) => (
                      <Star
                        key={`${item.name}-${index}`}
                        className="size-4 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="font-heading text-[1.55rem] leading-9 text-[#143018]">
                    {item.quote}
                  </blockquote>
                  <div className="text-sm text-[#5c4a2a]">
                    <div className="font-heading text-lg text-[#143018]">
                      {item.name}
                    </div>
                    {item.meta}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

        <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Honest answers"
              title="Things customers ask before they buy."
            />
            <Card className="paper-shadow rounded-[1.4rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
              <CardContent className="p-6 sm:p-8">
                <Accordion defaultValue={["item-0"]} multiple>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`item-${index}`}
                      className="border-[#1f4d2a]/12">
                      <AccordionTrigger className="py-5 font-heading text-xl text-[#143018] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-7 text-[#5c4a2a]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#f4ead3] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Talk to us"
              title={
                <>
                  Real humans.
                  <br />
                  <em className="italic text-orange-500">Real</em> orchard.
                </>
              }
              copy="WhatsApp is the fastest way to reach us. For pre-orders, gifting quotes, replacements, or partnership questions, we usually reply the same day."
            />

            <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
              <Card className="paper-shadow rounded-[1.4rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="max-w-xl">
                      <h3 className="font-heading text-4xl lg:text-7xl text-[#143018]">
                        Send us a message
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">
                        Same team for orders, gifting, replacements, and general
                        questions. Tell us what you need and we will route it
                        quickly.
                      </p>
                    </div>
                    <Badge className="rounded-full bg-[#143018] px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-orange-500">
                      Reply within 1 hour
                    </Badge>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {contactTopics.map((topic) => (
                      <div
                        key={topic}
                        className="rounded-full border border-[#1f4d2a]/12 bg-[#fbf5e9] px-4 py-2 text-sm text-[#143018]">
                        {topic}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Link
                      href={createWhatsAppLink(
                        "Hi Pakaam, I want to ask about a mango order.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-12 rounded-full bg-[#143018] px-6 text-[#fffcf4] hover:bg-[#1f4d2a]",
                      )}>
                      WhatsApp Pakaam <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href={`mailto:${supportEmail}?subject=${encodeURIComponent("Pakaam enquiry")}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-12 rounded-full border-[#1f4d2a]/15 bg-transparent px-6 text-[#143018] hover:bg-[#fbf5e9]",
                      )}>
                      Email Support <Mail className="size-4" />
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-4 border-t border-dashed border-[#1f4d2a]/15 pt-6 sm:grid-cols-3">
                    <ContactMini
                      icon={PhoneCall}
                      label="WhatsApp"
                      value="+91 90990 64667"
                      copy="Fastest for orders"
                    />
                    <ContactMini
                      icon={Clock3}
                      label="Working hours"
                      value="Mon-Sat"
                      copy="9 AM - 8 PM IST"
                    />
                    <ContactMini
                      icon={Mail}
                      label="Support"
                      value={supportEmail}
                      copy="General help and replacements"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                <Card className="rounded-[1.4rem] border-none bg-[#143018] py-0 text-[#fbf5e9]">
                  <CardContent className="p-8">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-orange-500">
                      Fastest reply
                    </div>
                    <h3 className="font-heading mt-4 text-4xl text-[#fbf5e9]">
                      WhatsApp us
                    </h3>
                    <p className="font-heading mt-5 text-3xl text-orange-500">
                      +91 90990 64667
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e9ddb5]/80">
                      Live during the season for order confirmations, dispatch
                      updates, ripening guidance, and damage support.
                    </p>
                    <Link
                      href={createWhatsAppLink(
                        "Hi Pakaam, I want to order a box. Please share the details.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-6 rounded-full bg-orange-500 px-5 text-white hover:bg-orange-400",
                      )}>
                      Open WhatsApp <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <ContactCard
                    icon={Mail}
                    label="Email"
                    title={supportEmail}
                    copy="General support, replacements, refunds, and order questions."
                    href={`mailto:${supportEmail}`}
                  />

                  <ContactCard
                    icon={MapPin}
                    label="Visit our packing room"
                    title="Pakaam"
                    copy=" Valsad, Gujarat. Orchard and packing-room visits are available during harvest by prior WhatsApp booking."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />

        <footer className="bg-[#143018] px-4 py-16 text-[#e9ddb5] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(3,.8fr)]">
              <div>
                <Brand lockupLight />
                <p className="font-heading  font-light mt-5 max-w-md text-2xl leading-9 text-[#fbf5e9]">
                  We do not sell the cheapest mango. We sell the one your mother
                  would say tastes right.
                </p>
              </div>
              <FooterColumn title="Shop" items={shopFooterItems} />
              <FooterColumn
                title="Brand"
                items={[
                  { label: "Our Orchards" },
                  { label: "Sourcing Journey" },
                  { label: "Corporate Gifting" },
                  { label: "Press & Stories" },
                  { label: "Replacement Policy" },
                ]}
              />
              <FooterColumn
                title="Contact"
                items={
                  contactDetailsFooterItems.length > 0
                    ? contactDetailsFooterItems
                    : contactFooterItems
                }
              />
            </div>

            <Separator className="my-8 bg-[#e9ddb5]/15" />

            <div className="flex flex-col gap-3 text-sm text-[#e9ddb5]/75 lg:flex-row lg:items-center lg:justify-between">
              <div>© 2026 Pakaam · Valsad, Gujarat 396001</div>
              <div>
                Naturally ripened · Hand-sorted · Lot-traced · Refund &
                replacement policy
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-orange-500 px-4 py-24 text-[#fffcf4] sm:px-6 lg:px-8 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#fffcf4]/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#143018]/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#fff4d8]">
              <span className="size-2 rounded-full bg-[#fff4d8]" />
              Season 2026 · Limited harvest
            </div>

            <h2 className="font-heading mt-6 max-w-4xl text-4xl leading-none text-[#fffcf4] sm:text-6xl lg:text-[4.75rem]">
              Mango season is
              <br />
              <em className="italic text-[#143018]">short.</em>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#ffefcf] sm:text-lg sm:leading-8">
              Valsadi Kesar is here for only a few weeks. Once the best orchard
              lots are spoken for, the sweetness is not the same and the season
              moves on.
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={reserveWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-[52px] rounded-full bg-[#143018] px-6 text-white hover:bg-[#14301890]",
                )}>
                <MessageCircle className="size-5" />
                Reserve your box on WhatsApp
              </Link>
              <Link
                href="#shop"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-[52px] rounded-full border-white/30 bg-transparent px-6 text-[#fffcf4] hover:bg-white/10 hover:text-[#fffcf4]",
                )}>
                See box sizes
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#fff4d8]/80">
              No app needed · UPI payment · Delivery across Gujarat and major
              cities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRibbon() {
  return (
    <div className="bg-[#143018] px-4 py-2.5 text-center text-[11px] tracking-[0.18em] uppercase text-[#e9ddb5] sm:text-xs">
      First harvest 2026
      <span className="mx-3 opacity-75">•</span>
      Orchard direct from Valsad
      <span className="mx-3 opacity-75">•</span>
      Booking now open
    </div>
  );
}

function Brand({ lockupLight = false }: { lockupLight?: boolean }) {
  return (
    <div
      className={cn(
        "relative",
        lockupLight &&
          "rounded-2xl bg-[#fbf5e9]/95 flex items-center justify-center w-fit px-3 py-2 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]",
      )}>
      <Image
        src="/images/pakaam-logo.png"
        alt="Pakaam logo"
        width={lockupLight ? 230 : 200}
        height={lockupLight ? 110 : 96}
        className={cn(
          "h-auto w-auto object-contain",
          lockupLight ? "max-h-[88px]" : "max-h-[72px]",
        )}
        priority={false}
      />
    </div>
  );
}

function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[11px] font-semibold tracking-[0.22em] uppercase text-[#1f4d2a]",
        className,
      )}>
      {children}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  asideLabel,
  asideValue,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  asideLabel?: string;
  asideValue?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-heading mt-4 text-4xl xl:leading-15 text-[#143018] sm:text-7xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-8 max-w-xl text-base leadding-tight text-[#5c4a2a]">
            {copy}
          </p>
        ) : null}
      </div>
      {asideLabel && asideValue ? (
        <div className="text-sm text-[#5c4a2a] lg:text-right">
          <div>{asideLabel}</div>
          <div className="font-heading text-3xl text-[#143018]">
            {asideValue}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SouvenirCard({
  className,
  title,
  copy,
  price,
  meta,
  children,
}: {
  className?: string;
  title: string;
  copy: string;
  price: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        "paper-shadow overflow-hidden rounded-[1.15rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0 ",
        className,
      )}>
      <div className="aspect-3/2 min-h-80 overflow-hidden">{children}</div>
      <CardContent className="flex h-full flex-col p-5">
        <div className="font-heading text-2xl text-[#143018]">{title}</div>
        <p className="mt-2 flex-1 text-sm leading-6 text-[#5c4a2a]">{copy}</p>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="font-heading text-3xl text-[#143018]">{price}</div>
          <div className="text-right text-[11px] tracking-[0.12em] uppercase text-[#5c4a2a]">
            {meta}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WhatsAppBubble({
  children,
  inbound = false,
}: {
  children: React.ReactNode;
  inbound?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
        inbound
          ? "self-start rounded-bl-sm bg-[#fff7d8]"
          : "self-end rounded-br-sm bg-white",
      )}>
      {children}
      <div className="mt-1 text-[10px] text-[#5c4a2a]/70">9:42 AM</div>
    </div>
  );
}

function JarVisual({
  body,
  lid,
  title,
  subtitle,
  foot,
  band,
}: {
  body: string;
  lid: string;
  title: string;
  subtitle: string;
  foot: string;
  band?: string;
}) {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-[#fbf5e9] to-[#f4ead3] p-5">
      <div className="relative h-[88%] w-[62%]">
        <div
          className="absolute bottom-0 left-0 right-0 top-[20%] rounded-[18px_18px_24px_24px] shadow-[inset_6px_0_14px_rgba(255,255,255,.18),inset_-8px_0_16px_rgba(0,0,0,.22),0_18px_30px_-16px_rgba(31,77,42,.45)]"
          style={{ background: body }}
        />
        <div
          className="absolute left-[8%] right-[8%] top-[8%] h-[14%] rounded-[6px_6px_4px_4px] shadow-[inset_0_-3px_0_rgba(0,0,0,.25),0_4px_6px_-2px_rgba(0,0,0,.3)]"
          style={{ background: lid }}
        />
        {band ? (
          <div
            className="absolute left-[6%] right-[6%] top-[23%] h-[8%] rounded-sm"
            style={{ background: band }}
          />
        ) : (
          <div className="absolute left-[4%] right-[4%] top-[18%] h-1 bg-black/15" />
        )}
        <div className="absolute left-[8%] top-[24%] h-[55%] w-[14%] rounded-full bg-gradient-to-b from-white/35 to-white/0" />
        <div className="absolute inset-x-[10%] bottom-[14%] top-[42%] flex flex-col items-center justify-center border border-[#1f4d2a]/25 bg-[#fbf5e9] px-3 text-center">
          <div className="text-[7px] tracking-[0.28em] uppercase text-orange-500">
            Pakaam
          </div>
          <div className="font-heading my-1 text-[18px] italic text-[#143018]">
            {title}
          </div>
          <div className="text-[6px] tracking-[0.22em] uppercase text-[#5c4a2a]">
            {subtitle}
          </div>
          <div className="my-2 h-px w-5 bg-[#143018]" />
          <div className="text-[6px] tracking-[0.18em] uppercase text-[#5c4a2a]">
            {foot}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <div>
      <div className="font-heading text-xl text-[#fbf5e9]">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-[#e9ddb5]/80">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#fbf5e9] hover:underline">
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactMini({
  icon: Icon,
  label,
  value,
  copy,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  copy: string;
}) {
  return (
    <div>
      <div className="mb-3 grid size-10 place-items-center rounded-full border border-[#1f4d2a]/12 bg-[#fbf5e9] text-[#143018]">
        <Icon className="size-4" />
      </div>
      <div className="text-[11px] tracking-[0.16em] uppercase text-[#5c4a2a]">
        {label}
      </div>
      <div className="font-heading mt-2 text-xl text-[#143018]">{value}</div>
      <div className="mt-1 text-sm text-[#5c4a2a]">{copy}</div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  title,
  copy,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  copy: string;
  href?: string;
}) {
  const content = (
    <Card className="paper-shadow rounded-[1.2rem] border border-[#1f4d2a]/15 bg-[var(--paper)] py-0">
      <CardContent className="p-6">
        <div className="mb-4 grid size-10 place-items-center rounded-full border border-[#1f4d2a]/12 bg-[#fbf5e9] text-[#143018]">
          <Icon className="size-4" />
        </div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-[#5c4a2a]">
          {label}
        </div>
        <div className="font-heading mt-2 text-2xl text-[#143018]">{title}</div>
        <p className="mt-3 text-sm leading-7 text-[#5c4a2a]">{copy}</p>
      </CardContent>
    </Card>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block transition hover:-translate-y-0.5">
      {content}
    </Link>
  );
}
