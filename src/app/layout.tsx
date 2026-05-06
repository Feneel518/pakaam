import type { Metadata } from "next";
import {
  Fraunces,
  Geist_Mono,
  Metamorphous,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";

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
  title: "Pakaam Catalog",
  description:
    "A premium orchard-direct mango catalog experience built with Next.js, shadcn/ui, and Tailwind CSS.",
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
        {children}
      </body>
    </html>
  );
}
