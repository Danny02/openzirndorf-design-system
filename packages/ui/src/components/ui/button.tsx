import { cn } from "@openzirndorf/ui/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full whitespace-nowrap border-2 border-transparent text-[0.95rem] font-semibold leading-none transition-[transform,box-shadow,background,color,border-color] duration-200 ease-[var(--transition-base)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [box-shadow:var(--shadow-sm)] hover:-translate-y-px hover:border-brand-green-hover hover:bg-brand-green-hover hover:[box-shadow:0_4px_16px_rgb(45_143_15_/_0.35)]",
        destructive:
          "bg-destructive text-primary-foreground hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--destructive)_92%,black)]",
        outline:
          "border-border bg-transparent text-foreground hover:-translate-y-px hover:border-[#b0b7c0] hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--secondary)_96%,black)]",
        ghost: "bg-transparent text-foreground shadow-none hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
        white:
          "bg-white text-brand-green-dark [box-shadow:var(--shadow-sm)] hover:-translate-y-px hover:bg-white/90 hover:[box-shadow:0_4px_16px_rgb(0_0_0_/_0.15)]",
        outlineWhite:
          "border-white/55 bg-transparent text-white hover:-translate-y-px hover:border-white/80 hover:bg-white/12",
      },
      size: {
        default:
          "min-h-10 px-[1.3rem] py-[0.65rem] [&_svg:not([class*='size-'])]:size-4",
        lg: "min-h-12 px-7 py-[0.85rem] text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
