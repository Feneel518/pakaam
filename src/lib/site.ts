export type NavItem = {
  href: string;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  sku: string;
  price: string;
  shippedPrice: string;
  weight: string;
  mangoCount: string;
  dispatchWindow: string;
  image: string;
  imageAlt: string;
  badge: string;
  primaryKeyword: string;
  description: string;
  idealFor: string[];
  specs: Array<{ label: string; value: string }>;
  faqs: Array<{ question: string; answer: string }>;
  metaDescription: string;
  whatsappMessage: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  relatedProductSlug: Product["slug"];
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const siteConfig = {
  name: "Pakaam",
  legalName: "Pakaam",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pakaam.com",
  description:
    "Orchard-direct Valsad Kesar mango boxes with natural ripening, WhatsApp ordering, and India-wide seasonal delivery.",
  location: "Valsad, Gujarat, India",
  email: "feneelp@gmail.com",
  phoneDisplay: "+91 90990 64667",
  phoneE164: "+919099064667",
  ogImage: "/images/mangoHero.jpg",
  seasonWindow: "May to June",
  shippingCoverage: "Gujarat and India-wide seasonal delivery",
};

export const topNav: NavItem[] = [
  { href: "/mango-boxes/", label: "Mango Boxes" },
  { href: "/corporate-mango-gifting/", label: "Corporate Gifting" },
  { href: "/valsad-kesar-mangoes/", label: "Valsad Kesar" },
  { href: "/naturally-ripened-mangoes/", label: "Natural Ripening" },
  { href: "/blog/", label: "Journal" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const footerNav: NavItem[] = [
  { href: "/about/", label: "About" },
  { href: "/shipping-policy/", label: "Shipping Policy" },
  { href: "/replacement-refund-policy/", label: "Replacement and Refund Policy" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
];

export const trustSignals = [
  "Naturally ripened in hay, not carbide treated",
  "Lot-traced orchard sourcing from Valsad growers",
  "Same-day packing with ripening guidance",
  "WhatsApp-first support for fast buying help",
  "Damage replacement support for genuine transit issues",
];

export const orchardNotes = [
  "Family orchard network near Valsad and the Auranga belt",
  "Dispatches timed around harvest maturity instead of warehouse inventory",
  "Grade A selection for direct boxes, with lower grades routed separately",
];

export const testimonials = [
  {
    quote:
      "The mangoes arrived firm, ripened evenly in two days, and tasted like the boxes we used to get from relatives in Gujarat.",
    name: "Family buyer in Ahmedabad",
  },
  {
    quote:
      "WhatsApp ordering felt personal, and the gifting insert made the box feel premium enough for clients.",
    name: "Corporate gifting buyer in Mumbai",
  },
  {
    quote:
      "The ripening card was genuinely useful. We ate some fresh, pulped some for aamras, and nothing went to waste.",
    name: "Home cook in Bengaluru",
  },
];

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.phoneE164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const products: Product[] = [
  {
    slug: "3-kg-trial-box",
    name: "3 kg Trial Kesar Mango Box",
    shortName: "3 kg Trial Box",
    sku: "PKM-03",
    price: "Rs. 599",
    shippedPrice: "Rs. 799 shipped",
    weight: "3 kg net",
    mangoCount: "7 to 9 mangoes",
    dispatchWindow: "Best for first orders and short households",
    image: "/images/10.jpg",
    imageAlt: "3 kg Pakaam Kesar mango trial box",
    badge: "First-timer pick",
    primaryKeyword: "3 kg kesar mango box",
    description:
      "A lower-commitment orchard-direct box for buyers who want to taste Valsad Kesar before moving up to a larger family order.",
    idealFor: [
      "First-time buyers testing fruit quality",
      "Small households that want a short ripening cycle",
      "Gift add-ons where volume is not the main goal",
    ],
    specs: [
      { label: "Ripeness at dispatch", value: "Semi-ripe for safe transit" },
      { label: "Best eating window", value: "Day 2 to Day 5 after arrival" },
      { label: "Order flow", value: "WhatsApp reservation with support" },
      { label: "Coverage", value: "Gujarat and India seasonal dispatch" },
    ],
    faqs: [
      {
        question: "Why is the 3 kg box good for first-time buyers?",
        answer:
          "It gives you enough fruit to judge sweetness, aroma, and ripening behavior without committing to a large family-size order.",
      },
      {
        question: "Will the mangoes arrive ready to eat?",
        answer:
          "They usually arrive slightly firm so they can finish ripening at home rather than softening too early in transit.",
      },
    ],
    metaDescription:
      "Reserve a 3 kg Valsad Kesar mango box from Pakaam. Orchard-direct, naturally ripened, and shipped with ripening guidance.",
    whatsappMessage:
      "Hi Pakaam, I want to reserve the 3 kg Trial Kesar Mango Box. Please share today's availability and dispatch details.",
  },
  {
    slug: "5-kg-family-box",
    name: "5 kg Family Kesar Mango Box",
    shortName: "5 kg Family Box",
    sku: "PKM-05",
    price: "Rs. 999",
    shippedPrice: "Rs. 1,499 shipped",
    weight: "5 kg net",
    mangoCount: "12 to 14 mangoes",
    dispatchWindow: "Balanced for shared family eating across the week",
    image: "/images/5.jpg",
    imageAlt: "5 kg Pakaam Kesar mango family box",
    badge: "Best seller",
    primaryKeyword: "5 kg kesar mango box",
    description:
      "The core Pakaam box for households that want enough fruit for slicing, dessert, and aamras without jumping to bulk quantity.",
    idealFor: [
      "Families eating across several meals",
      "Buyers who want a mix of near-ready and later-ripening fruit",
      "Repeat buyers who already know they like Kesar",
    ],
    specs: [
      { label: "Ripeness mix", value: "Staggered for a week of eating" },
      { label: "Support", value: "WhatsApp guidance before and after delivery" },
      { label: "Trust layer", value: "Lot-based sourcing and replacement support" },
      { label: "Use case", value: "Fresh eating plus aamras" },
    ],
    faqs: [
      {
        question: "Is the 5 kg box the main Pakaam recommendation?",
        answer:
          "Yes. It is the best balance of value, flexibility, and ripening spread for most family households.",
      },
      {
        question: "Can this box be sent as a gift?",
        answer:
          "Yes. Many buyers use the 5 kg box for premium gifting because it feels generous without becoming difficult to store.",
      },
    ],
    metaDescription:
      "Buy the 5 kg Family Kesar Mango Box from Pakaam. Orchard-direct Valsad fruit with natural ripening and WhatsApp ordering.",
    whatsappMessage:
      "Hi Pakaam, I want to reserve the 5 kg Family Kesar Mango Box. Please share availability, pricing, and delivery details.",
  },
  {
    slug: "10-kg-value-box",
    name: "10 kg Value Kesar Mango Box",
    shortName: "10 kg Value Box",
    sku: "PKM-10",
    price: "Rs. 1,899",
    shippedPrice: "Rs. 2,699 shipped",
    weight: "10 kg net",
    mangoCount: "24 to 28 mangoes",
    dispatchWindow: "Best per-kilo value for high-consumption homes",
    image: "/images/3.jpg",
    imageAlt: "10 kg Pakaam Kesar mango value box",
    badge: "Best value",
    primaryKeyword: "10 kg kesar mango box",
    description:
      "A high-volume box for households that count mango season in kilos, with better per-kilo value and enough fruit for fresh eating and pulp.",
    idealFor: [
      "Large households and seasonal stock-up buyers",
      "Families making aamras and desserts in batches",
      "Buyers who want the best value per kilo",
    ],
    specs: [
      { label: "Box format", value: "Ventilated packing for longer transit" },
      { label: "Value angle", value: "Lower effective cost per kilo" },
      { label: "Ripening plan", value: "Best managed in batches at home" },
      { label: "Kitchen use", value: "Fresh eating, pulp, and gifting split" },
    ],
    faqs: [
      {
        question: "Who should choose the 10 kg box?",
        answer:
          "It is best for serious seasonal buyers who know they will use the fruit quickly or split it across family, gifting, and aamras preparation.",
      },
      {
        question: "How should I manage ripening for a bigger box?",
        answer:
          "Keep the fruit ventilated, separate faster-ripening pieces, and move ripe mangoes to the fridge only after they are ready to eat.",
      },
    ],
    metaDescription:
      "Reserve the 10 kg Value Kesar Mango Box from Pakaam for the best per-kilo orchard-direct value from Valsad.",
    whatsappMessage:
      "Hi Pakaam, I want to reserve the 10 kg Value Kesar Mango Box. Please share availability and India delivery details.",
  },
];

export const generalFaqs = [
  {
    question: "Are Pakaam mangoes really from Valsad?",
    answer:
      "Pakaam positions the fruit around Valsad-origin Kesar and orchard-direct dispatches. The site should keep reinforcing this with orchard notes, photos, and lot references.",
  },
  {
    question: "Why do the mangoes arrive firm?",
    answer:
      "India-wide shipping works best when the fruit is dispatched slightly before peak softness. That protects texture in transit and gives the customer a cleaner ripening window at home.",
  },
  {
    question: "How are the mangoes ripened?",
    answer:
      "The brand promise is natural ripening in hay with no carbide treatment. The content should keep describing what that means in visible, practical terms.",
  },
  {
    question: "What if a box is damaged in transit?",
    answer:
      "Pakaam offers replacement support for genuine transit damage when the buyer shares evidence quickly after delivery.",
  },
  {
    question: "Do you handle corporate mango gifting?",
    answer:
      "Yes. The site now includes a dedicated corporate gifting page for bulk ordering, branded inserts, and WhatsApp-led coordination.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-valsad-kesar-different",
    title: "What Makes Valsad Kesar Mangoes Different",
    description:
      "A practical guide to how Valsad Kesar stands apart in aroma, sweetness, ripening behavior, and buying confidence.",
    publishedAt: "2026-05-07",
    readingTime: "6 min read",
    image: "/images/farm1.jpg",
    imageAlt: "Valsad orchard view with Kesar mango trees",
    primaryKeyword: "valsad kesar mango",
    relatedProductSlug: "5-kg-family-box",
    sections: [
      {
        heading: "Why origin matters",
        paragraphs: [
          "For premium mango buying, origin is not just a romance detail. It helps buyers predict sweetness, fiber level, aroma, and how the fruit behaves in transit.",
          "Pakaam should keep tying its product pages to Valsad because origin is one of the cleanest ways to build trust and separate orchard-direct fruit from generic marketplace inventory.",
        ],
      },
      {
        heading: "Taste and texture cues buyers care about",
        paragraphs: [
          "Searchers comparing Kesar sources usually care about sweetness, saffron-colored flesh, aroma near the stem, and whether the fruit turns pulpy too quickly.",
          "That means product and educational pages should describe sensory details in plain language instead of relying on poetic brand copy alone.",
        ],
      },
      {
        heading: "How Pakaam can make the claim credible",
        paragraphs: [
          "Use orchard references, lot-based packing language, harvest timing, and real packaging photos. These signals matter both for conversion and for E-E-A-T.",
          "When possible, pair the story with visible proof such as dispatch windows, orchard photos, and buyer guidance on what to expect when the box arrives.",
        ],
      },
    ],
  },
  {
    slug: "how-to-ripen-kesar-mangoes-naturally-at-home",
    title: "How To Ripen Kesar Mangoes Naturally at Home",
    description:
      "Step-by-step guidance for buyers who receive semi-ripe mangoes and want a predictable home ripening window.",
    publishedAt: "2026-05-07",
    readingTime: "5 min read",
    image: "/images/postcard.jpg",
    imageAlt: "A ripe mango cut open next to whole mangoes",
    primaryKeyword: "how to ripen kesar mangoes naturally",
    relatedProductSlug: "3-kg-trial-box",
    sections: [
      {
        heading: "Start with airflow and patience",
        paragraphs: [
          "Do not refrigerate mangoes when they are still firm. Keep them at room temperature with airflow and away from direct moisture.",
          "A newspaper wrap or hay-lined basket works because it creates a gentler ripening environment than sealed plastic.",
        ],
      },
      {
        heading: "Watch for readiness signals",
        paragraphs: [
          "A sweet smell near the stem, slight softness when pressed gently, and deeper skin tone are the usual signs that the fruit is entering its best eating window.",
          "Educational content should explain these signs clearly because many searchers worry when shipped mangoes arrive firm.",
        ],
      },
      {
        heading: "Use the fruit in stages",
        paragraphs: [
          "Slightly ripe fruit is excellent for slicing. Fully soft fruit is ideal for aamras, shakes, and desserts.",
          "This kind of staged guidance helps conversion because it reduces the fear of buying mangoes online.",
        ],
      },
    ],
  },
  {
    slug: "best-mango-box-for-gifting",
    title: "Best Mango Box for Gifting in India",
    description:
      "How to choose the right mango gift box for family, festive gifting, and premium business sending.",
    publishedAt: "2026-05-07",
    readingTime: "5 min read",
    image: "/images/5.jpg",
    imageAlt: "Premium mango box prepared for gifting",
    primaryKeyword: "best mango box for gifting",
    relatedProductSlug: "5-kg-family-box",
    sections: [
      {
        heading: "Match quantity to the relationship",
        paragraphs: [
          "Gift buyers often want enough fruit to feel generous without overwhelming the recipient. That makes the 5 kg box an easy default for many gifting scenarios.",
          "The site should keep clarifying when a smaller trial box or larger seasonal box makes more sense.",
        ],
      },
      {
        heading: "Premium gifting needs more than fruit",
        paragraphs: [
          "Dispatch timing, presentation, WhatsApp coordination, and replacement confidence all affect whether a mango gift feels premium.",
          "That is why the corporate gifting page should combine logistics clarity with emotional value.",
        ],
      },
      {
        heading: "Trust matters more than discounting",
        paragraphs: [
          "For gifting, buyers often care more about reliability and taste than about finding the cheapest mango box online.",
          "Pakaam should lean into orchard origin, natural ripening, and support responsiveness instead of racing toward price-led positioning.",
        ],
      },
    ],
  },
  {
    slug: "why-shipped-mangoes-arrive-firm",
    title: "Why Shipped Mangoes Arrive Firm",
    description:
      "A buyer-friendly explanation of why shipped mango boxes should not always arrive fully soft and ready to eat on day one.",
    publishedAt: "2026-05-07",
    readingTime: "4 min read",
    image: "/images/farm2.jpg",
    imageAlt: "Mangoes on a tree before harvest",
    primaryKeyword: "why are shipped mangoes firm",
    relatedProductSlug: "10-kg-value-box",
    sections: [
      {
        heading: "Transit safety comes first",
        paragraphs: [
          "When fruit is sent across cities, fully ripe mangoes can soften too far, bruise, or leak. Dispatching slightly early protects the eating quality.",
          "This is one of the most important conversion objections to answer on product pages and FAQs.",
        ],
      },
      {
        heading: "Firm does not mean unripe forever",
        paragraphs: [
          "Kesar mangoes continue to develop aroma and softness at home. A short waiting window is often the reason the fruit tastes better at the moment of eating.",
          "That makes post-purchase guidance part of SEO too, because clearer expectations reduce refund anxiety and improve review quality.",
        ],
      },
      {
        heading: "How brands should communicate this",
        paragraphs: [
          "Do not hide the fact that boxes may arrive firm. Explain it before the sale, repeat it in FAQs, and include a ripening guide in every key page and order flow.",
          "Transparent education can increase both trust and conversion.",
        ],
      },
    ],
  },
];

export const coreRoutes = [
  "/",
  "/about/",
  "/blog/",
  "/contact/",
  "/corporate-mango-gifting/",
  "/delivery/gujarat/",
  "/delivery/india/",
  "/faq/",
  "/mango-boxes/",
  "/naturally-ripened-mangoes/",
  "/privacy-policy/",
  "/replacement-refund-policy/",
  "/shipping-policy/",
  "/valsad-kesar-mangoes/",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
