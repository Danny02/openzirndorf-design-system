import { BrandLogo } from "@openzirndorf/ui/components/ui/brand-logo";
import { Separator } from "@openzirndorf/ui/components/ui/separator";
import { cn } from "@openzirndorf/ui/lib/utils";
import type { ReactNode } from "react";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SiteFooterProps = {
  description: string;
  columns: FooterColumn[];
  brand?: ReactNode;
  copyright?: string;
  className?: string;
};

function DefaultBrand() {
  return (
    <>
      <BrandLogo alt="Open Zirndorf" size="footerMark" />
      <span className="text-brand-green text-[1.25rem] leading-none font-bold">
        open
      </span>
      <span className="text-white text-[1.25rem] leading-none font-bold">
        zirndorf
      </span>
    </>
  );
}

export function SiteFooter({
  description,
  columns,
  brand,
  copyright,
  className,
}: SiteFooterProps) {
  return (
    <footer className={cn("bg-foreground text-white/80", className)}>
      <div className="mx-auto grid w-full max-w-(--container) gap-12 px-5 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            {brand ?? <DefaultBrand />}
          </div>
          <p className="max-w-sm text-[0.88rem] text-white/50">{description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-1.5">
              <strong className="mb-1 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white/90">
                {column.title}
              </strong>
              {column.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.88rem] text-white/55 transition-colors duration-200 ease-(--transition-base) hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-(--container) px-5 pb-6">
        <Separator className="bg-white/10" />
        <p className="pt-5 text-[0.83rem] text-white/40">
          {copyright ?? "OpenZirndorf"}
        </p>
      </div>
    </footer>
  );
}
