const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "Pakaam",
  shortName: "Pakaam",
  title:
    "Pakaam | Orchard-Direct Valsadi Kesar Mangoes from Valsad, Gujarat",
  description:
    "Buy orchard-direct Valsadi Kesar mangoes from Pakaam in Valsad, Gujarat. Naturally ripened, hand-sorted mango boxes for families, gifting, and seasonal pre-orders.",
  domain: configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl.replace(/\/+$/, "")
    : "https://pakaam.com",
  locale: "en_IN",
  language: "en-IN",
  region: "IN-GJ",
  city: "Valsad",
  state: "Gujarat",
  postalCode: "396001",
  country: "IN",
  phone: "+91 90990 64667",
  email: "feneelp@gmail.com",
  whatsappNumber: "919099064667",
  keywords: [
    "Valsadi Kesar mangoes",
    "Kesar mangoes Valsad",
    "buy mangoes in Valsad",
    "mango boxes Gujarat",
    "orchard direct mangoes",
    "naturally ripened mangoes",
    "premium mango gifting Gujarat",
    "Kesar mango delivery Gujarat",
    "Pakaam mangoes",
  ],
  socialImage: "/images/mangoHero.jpg",
} as const;

export const siteUrl = new URL(siteConfig.domain);
