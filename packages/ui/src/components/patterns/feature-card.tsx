import { Badge } from "@openzirndorf/ui/components/ui/badge";
import { Card } from "@openzirndorf/ui/components/ui/card";
import { cn } from "@openzirndorf/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  href: string;
  tone?: "blue" | "orange" | "neutral";
  className?: string;
};

const toneStyles = {
  blue: {
    card: "bg-[var(--blue-light)] border-[rgba(9,105,218,0.15)] hover:border-[rgba(9,105,218,0.3)]",
    icon: "bg-[rgba(9,105,218,0.12)] text-brand-blue",
    badge: "bg-[rgba(9,105,218,0.1)] text-brand-blue",
  },
  orange: {
    card: "bg-[var(--orange-light)] border-[rgba(217,96,32,0.15)] hover:border-[rgba(217,96,32,0.3)]",
    icon: "bg-[rgba(217,96,32,0.12)] text-brand-orange",
    badge: "bg-[rgba(217,96,32,0.1)] text-brand-orange",
  },
  neutral: {
    card: "bg-card hover:border-[#b0b7c0]",
    icon: "bg-secondary text-foreground",
    badge: "bg-secondary text-foreground",
  },
} as const;

export function FeatureCard({
  icon,
  label,
  title,
  description,
  href,
  tone = "blue",
  className,
}: FeatureCardProps) {
  const styles = toneStyles[tone];

  return (
    <Card
      asChild
      className={cn(
        "group relative gap-0 rounded-[var(--radius-lg)] border-[1.5px] p-7 transition-transform duration-200 ease-[var(--transition-base)] hover:-translate-y-1 hover:[box-shadow:var(--shadow-hover)]",
        styles.card,
        className,
      )}
    >
      <a href={href}>
        <span className="absolute top-6 right-6 text-muted-foreground transition duration-200 ease-[var(--transition-base)] group-hover:text-foreground">
          <ArrowUpRight className="size-5" />
        </span>
        <div
          className={cn(
            "mb-5 flex size-14 items-center justify-center rounded-[var(--radius)] text-2xl",
            styles.icon,
          )}
        >
          {icon}
        </div>
        <Badge className={cn("mb-3", styles.badge)}>{label}</Badge>
        <h3 className="mb-2 text-[1.2rem] font-bold tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="text-[0.93rem] leading-[1.65] text-muted-foreground">
          {description}
        </p>
      </a>
    </Card>
  );
}
