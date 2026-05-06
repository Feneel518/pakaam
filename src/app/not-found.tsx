import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="hero-wash flex min-h-[70vh] items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b85b0e]">
          Page not found
        </p>
        <h1 className="mt-4 font-heading text-5xl text-[#143018] sm:text-6xl">
          This mango page does not exist yet.
        </h1>
        <p className="mt-5 text-base leading-8 text-[#5c4a2a]">
          Try the mango box hub, the journal, or the homepage to continue exploring the site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-[#143018] px-5 text-[#fffcf4] hover:bg-[#1f4d2a]",
            )}
          >
            Go home
          </Link>
          <Link
            href="/mango-boxes/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-[#1f4d2a]/15 bg-transparent px-5 text-[#143018] hover:bg-[#f4ead3]",
            )}
          >
            Browse boxes
          </Link>
        </div>
      </div>
    </main>
  );
}
