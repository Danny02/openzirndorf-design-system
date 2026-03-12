"use client";

import { BrandLogo } from "@openzirndorf/ui/components/ui/brand-logo";
import { Button } from "@openzirndorf/ui/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@openzirndorf/ui/components/ui/sheet";
import { cn } from "@openzirndorf/ui/lib/utils";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";

type HeaderLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  items: HeaderLink[];
  cta?: HeaderLink;
  homeHref?: string;
  brand?: ReactNode;
  mobileTitle?: string;
  className?: string;
};

function DefaultBrand() {
  return <BrandLogo alt="Open Zirndorf" size="header" />;
}

export function SiteHeader({
  items,
  cta,
  homeHref = "/",
  brand,
  mobileTitle = "Navigation",
  className,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl supports-backdrop-filter:bg-background/88",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-(--container) items-center gap-2 px-5 py-4">
        <a
          href={homeHref}
          className="mr-4 inline-flex shrink-0 items-center text-foreground"
        >
          {brand ?? <DefaultBrand />}
        </a>

        <nav
          className="hidden flex-1 items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-1.5 text-[0.9rem] font-medium text-muted-foreground transition-colors duration-200 ease-(--transition-base) hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {cta ? (
          <Button asChild className="hidden md:inline-flex">
            <a href={cta.href}>{cta.label}</a>
          </Button>
        ) : null}

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto md:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="px-0">
            <SheetHeader>
              <SheetTitle>{mobileTitle}</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-1 flex-col gap-1 px-5"
              aria-label="Mobile primary"
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-(--radius) px-4 py-3.5 text-[1.1rem] font-semibold text-foreground transition-colors duration-200 ease-(--transition-base) hover:bg-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {cta ? (
              <SheetFooter>
                <Button asChild className="w-full">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </SheetFooter>
            ) : null}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
