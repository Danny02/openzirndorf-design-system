import logo64Png from "@openzirndorf/brand/logos/logo-mark-64.png";
import logo64Webp from "@openzirndorf/brand/logos/logo-mark-64.webp";
import logo128Png from "@openzirndorf/brand/logos/logo-mark-128.png";
import logo128Webp from "@openzirndorf/brand/logos/logo-mark-128.webp";
import logo256Png from "@openzirndorf/brand/logos/logo-mark-256.png";
import logo256Webp from "@openzirndorf/brand/logos/logo-mark-256.webp";
import { cn } from "@openzirndorf/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

const brandLogoVariants = cva("block shrink-0", {
  variants: {
    size: {
      header: "w-[48px] sm:w-[56px] md:w-[64px]",
      nav: "w-[96px] sm:w-[112px] md:w-[128px]",
      footerMark: "w-[52px] sm:w-[60px] md:w-[68px]",
      footer: "w-[104px] sm:w-[120px] md:w-[136px]",
      hero: "w-[140px] sm:w-[180px] md:w-[220px] lg:w-[256px]",
      compact: "w-[72px] sm:w-[88px] md:w-[96px]",
    },
  },
  defaultVariants: {
    size: "nav",
  },
});

const sizeToSizes = {
  header: "(max-width: 639px) 48px, (max-width: 767px) 56px, 64px",
  nav: "(max-width: 639px) 96px, (max-width: 767px) 112px, 128px",
  footerMark: "(max-width: 639px) 52px, (max-width: 767px) 60px, 68px",
  footer: "(max-width: 639px) 104px, (max-width: 767px) 120px, 136px",
  hero: "(max-width: 639px) 140px, (max-width: 767px) 180px, (max-width: 1023px) 220px, 256px",
  compact: "(max-width: 639px) 72px, (max-width: 767px) 88px, 96px",
} as const;

type BrandLogoSize = keyof typeof sizeToSizes;

type BrandLogoProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "alt" | "className" | "height" | "sizes" | "src" | "srcSet" | "width"
> &
  VariantProps<typeof brandLogoVariants> & {
    alt?: string;
    className?: string;
    imageClassName?: string;
    sizes?: string;
  };

const pngSrcSet = `${logo64Png} 64w, ${logo128Png} 128w, ${logo256Png} 256w`;
const webpSrcSet = `${logo64Webp} 64w, ${logo128Webp} 128w, ${logo256Webp} 256w`;

export function BrandLogo({
  alt = "Open Zirndorf logo",
  className,
  decoding = "async",
  imageClassName,
  loading = "eager",
  size,
  sizes,
  ...props
}: BrandLogoProps) {
  const resolvedSize = size ?? "nav";

  return (
    <picture
      className={cn(brandLogoVariants({ size: resolvedSize }), className)}
    >
      <source
        srcSet={webpSrcSet}
        sizes={sizes ?? sizeToSizes[resolvedSize]}
        type="image/webp"
      />
      <img
        alt={alt}
        className={cn("block h-auto w-full", imageClassName)}
        decoding={decoding}
        height={1716}
        loading={loading}
        sizes={sizes ?? sizeToSizes[resolvedSize]}
        src={logo128Png}
        srcSet={pngSrcSet}
        width={1555}
        {...props}
      />
    </picture>
  );
}

export type { BrandLogoProps, BrandLogoSize };
