"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type ScrollNavbarProps = {
  navItems: NavItem[];
  generalWhatsAppLink: string;
  reserveWhatsAppLink: string;
};

export function ScrollNavbar({
  navItems,
  generalWhatsAppLink,
  reserveWhatsAppLink,
}: ScrollNavbarProps) {
  const revealThreshold = 24;
  const directionThreshold = 6;
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 12);

      if (currentScrollY < revealThreshold) {
        setIsVisible(true);
      } else if (scrollDelta > directionThreshold) {
        setIsVisible(false);
      } else if (scrollDelta < -directionThreshold) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      window.requestAnimationFrame(updateNavbar);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 px-4 transition-[transform,opacity] duration-300 ease-out will-change-transform sm:px-6 lg:px-8",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-[calc(100%+0.75rem)] opacity-0",
      )}>
      <div
        className={cn(
          "mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-6 border-b border-[#1f4d2a]/12 bg-[#fbf5e9]/92 backdrop-blur-md transition-shadow duration-300",
          isScrolled && "shadow-[0_18px_40px_-28px_rgba(20,48,24,0.45)]",
        )}>
        <Link href="/" className="relative">
          <Image
            src="/images/pakaam-logo.png"
            alt="Pakaam logo"
            width={200}
            height={96}
            className="h-auto w-auto max-h-[72px] object-contain"
            priority={false}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#1b1404] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--kesar-deep)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={generalWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-[#1f4d2a]/15 bg-transparent px-5 text-[#143018] hover:bg-[#f4ead3]",
            )}>
            Contact
          </Link>
          <Link
            href={reserveWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-[#143018] px-5 text-[#fffcf4] hover:bg-[#1f4d2a]",
            )}>
            Reserve a Box
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-full border border-[#1f4d2a]/15 lg:hidden"
              />
            }>
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-l border-[#1f4d2a]/12 bg-[#fffcf4] text-[#1b1404]">
            <SheetHeader>
              <SheetTitle className="text-[#143018]">Pakaam</SheetTitle>
              <SheetDescription className="text-[#5c4a2a]">
                Orchard-direct mango catalog for the 2026 season.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-[#143018] transition hover:bg-[#f4ead3]">
                  {item.label}
                </Link>
              ))}
              <Separator className="my-2 bg-[#1f4d2a]/12" />
              <Link
                href={reserveWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "justify-center rounded-full bg-[#143018] text-[#fffcf4] hover:bg-[#1f4d2a]",
                )}>
                Reserve a Box
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
