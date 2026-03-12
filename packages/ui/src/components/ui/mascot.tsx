import fynn256Png from "@openzirndorf/brand/mascots/fynn-mark-256.png";
import fynn256Webp from "@openzirndorf/brand/mascots/fynn-mark-256.webp";
import fynn512Png from "@openzirndorf/brand/mascots/fynn-mark-512.png";
import fynn512Webp from "@openzirndorf/brand/mascots/fynn-mark-512.webp";
import fynnFullWebp from "@openzirndorf/brand/mascots/fynn-mark-800.webp";
import kreiselix256Png from "@openzirndorf/brand/mascots/kreiselix-mark-256.png";
import kreiselix256Webp from "@openzirndorf/brand/mascots/kreiselix-mark-256.webp";
import kreiselix512Png from "@openzirndorf/brand/mascots/kreiselix-mark-512.png";
import kreiselix512Webp from "@openzirndorf/brand/mascots/kreiselix-mark-512.webp";
import kreiselixFullWebp from "@openzirndorf/brand/mascots/kreiselix-mark-800.webp";
import nico256Png from "@openzirndorf/brand/mascots/nico-mark-256.png";
import nico256Webp from "@openzirndorf/brand/mascots/nico-mark-256.webp";
import nico512Png from "@openzirndorf/brand/mascots/nico-mark-512.png";
import nico512Webp from "@openzirndorf/brand/mascots/nico-mark-512.webp";
import nicoFullWebp from "@openzirndorf/brand/mascots/nico-mark-800.webp";
import quirin256Png from "@openzirndorf/brand/mascots/quirin-mark-256.png";
import quirin256Webp from "@openzirndorf/brand/mascots/quirin-mark-256.webp";
import quirin512Png from "@openzirndorf/brand/mascots/quirin-mark-512.png";
import quirin512Webp from "@openzirndorf/brand/mascots/quirin-mark-512.webp";
import quirinFullWebp from "@openzirndorf/brand/mascots/quirin-mark-800.webp";
import tuxi256Png from "@openzirndorf/brand/mascots/tuxi-mark-256.png";
import tuxi256Webp from "@openzirndorf/brand/mascots/tuxi-mark-256.webp";
import tuxi512Png from "@openzirndorf/brand/mascots/tuxi-mark-512.png";
import tuxi512Webp from "@openzirndorf/brand/mascots/tuxi-mark-512.webp";
import tuxiFullWebp from "@openzirndorf/brand/mascots/tuxi-mark-800.webp";
import { cn } from "@openzirndorf/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

const mascotVariants = cva("block shrink-0", {
  variants: {
    size: {
      sm: "w-[96px] sm:w-[112px] md:w-[128px]",
      md: "w-[140px] sm:w-[160px] md:w-[192px]",
      lg: "w-[180px] sm:w-[220px] md:w-[280px]",
      xl: "w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const sizeToSizes = {
  sm: "(max-width: 639px) 96px, (max-width: 767px) 112px, 128px",
  md: "(max-width: 639px) 140px, (max-width: 767px) 160px, 192px",
  lg: "(max-width: 639px) 180px, (max-width: 767px) 220px, 280px",
  xl: "(max-width: 639px) 240px, (max-width: 767px) 300px, (max-width: 1023px) 360px, 420px",
} as const;

type MascotName = "fynn" | "kreiselix" | "nico" | "quirin" | "tuxi";
type MascotSize = keyof typeof sizeToSizes;

type MascotAsset = {
  height: number;
  pngFallback: string;
  pngSrcSet: string;
  webpSrcSet: string;
  width: number;
  defaultAlt: string;
};

const mascotAssets: Record<MascotName, MascotAsset> = {
  fynn: {
    width: 494,
    height: 462,
    defaultAlt: "Fynn mascot",
    pngFallback: fynn512Png,
    pngSrcSet: `${fynn256Png} 256w, ${fynn512Png} 494w`,
    webpSrcSet: `${fynn256Webp} 256w, ${fynn512Webp} 494w, ${fynnFullWebp} 494w`,
  },
  kreiselix: {
    width: 388,
    height: 442,
    defaultAlt: "Kreiselix mascot",
    pngFallback: kreiselix512Png,
    pngSrcSet: `${kreiselix256Png} 256w, ${kreiselix512Png} 388w`,
    webpSrcSet: `${kreiselix256Webp} 256w, ${kreiselix512Webp} 388w, ${kreiselixFullWebp} 388w`,
  },
  nico: {
    width: 359,
    height: 445,
    defaultAlt: "Nico mascot",
    pngFallback: nico512Png,
    pngSrcSet: `${nico256Png} 256w, ${nico512Png} 359w`,
    webpSrcSet: `${nico256Webp} 256w, ${nico512Webp} 359w, ${nicoFullWebp} 359w`,
  },
  quirin: {
    width: 368,
    height: 497,
    defaultAlt: "Quirin mascot",
    pngFallback: quirin512Png,
    pngSrcSet: `${quirin256Png} 256w, ${quirin512Png} 368w`,
    webpSrcSet: `${quirin256Webp} 256w, ${quirin512Webp} 368w, ${quirinFullWebp} 368w`,
  },
  tuxi: {
    width: 308,
    height: 415,
    defaultAlt: "Tuxi mascot",
    pngFallback: tuxi512Png,
    pngSrcSet: `${tuxi256Png} 256w, ${tuxi512Png} 308w`,
    webpSrcSet: `${tuxi256Webp} 256w, ${tuxi512Webp} 308w, ${tuxiFullWebp} 308w`,
  },
};

type MascotProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "alt" | "className" | "height" | "sizes" | "src" | "srcSet" | "width"
> &
  VariantProps<typeof mascotVariants> & {
    alt?: string;
    className?: string;
    decorative?: boolean;
    imageClassName?: string;
    name: MascotName;
    sizes?: string;
  };

export function Mascot({
  alt,
  className,
  decoding = "async",
  decorative = true,
  imageClassName,
  loading = "lazy",
  name,
  size,
  sizes,
  ...props
}: MascotProps) {
  const asset = mascotAssets[name];
  const resolvedSize = size ?? "md";
  const resolvedAlt = decorative ? "" : (alt ?? asset.defaultAlt);

  return (
    <picture className={cn(mascotVariants({ size: resolvedSize }), className)}>
      <source
        srcSet={asset.webpSrcSet}
        sizes={sizes ?? sizeToSizes[resolvedSize]}
        type="image/webp"
      />
      <img
        alt={resolvedAlt}
        aria-hidden={decorative ? true : undefined}
        className={cn("block h-auto w-full", imageClassName)}
        decoding={decoding}
        height={asset.height}
        loading={loading}
        sizes={sizes ?? sizeToSizes[resolvedSize]}
        src={asset.pngFallback}
        srcSet={asset.pngSrcSet}
        width={asset.width}
        {...props}
      />
    </picture>
  );
}

export type { MascotName, MascotProps, MascotSize };
