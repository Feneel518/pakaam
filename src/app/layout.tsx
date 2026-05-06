import type { Metadata } from "next";
import {
  Fraunces,
  Geist_Mono,
  Metamorphous,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { WebVitals } from "@/components/analytics/web-vitals";
import {
  SiteFooter,
  SiteHeader,
  StickyOrderBar,
} from "@/components/site/marketing";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const metamorphous = Metamorphous({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pakaam | Orchard-Direct Valsad Kesar Mangoes",
    template: "%s | Pakaam",
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  category: "food",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
  ...buildMetadata({
    title: "Pakaam | Orchard-Direct Valsad Kesar Mangoes",
    description: siteConfig.description,
    path: "/",
    keywords: [
      "Valsad Kesar mangoes",
      "buy kesar mango online",
      "orchard direct mangoes",
      "mango delivery in India",
      "naturally ripened mangoes",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${metamorphous.variable} ${tiro.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className={`${plusJakarta.className} min-h-full flex flex-col`}>
        <GoogleAnalytics />
        <WebVitals />
        <SiteHeader />
        <div className="flex-1 pb-28">{children}</div>
        <SiteFooter />
        <StickyOrderBar />
      </body>
    </html>
  );
}
