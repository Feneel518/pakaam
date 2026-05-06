"use client";

import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import Link from "next/link";

type TrackedLinkProps = PropsWithChildren<
  {
    href: string;
    eventName?: string;
    eventParams?: Record<string, string | number | boolean>;
  } & AnchorHTMLAttributes<HTMLAnchorElement>
>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export function TrackedLink({
  href,
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        if (eventName) {
          window.gtag?.("event", eventName, eventParams);
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
