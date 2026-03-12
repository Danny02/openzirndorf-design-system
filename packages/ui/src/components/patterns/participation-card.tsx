import { Card } from "@openzirndorf/ui/components/ui/card";
import { cn } from "@openzirndorf/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ParticipationCardProps = {
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  href: string;
  tone?: "violet" | "orange" | "neutral";
  className?: string;
};

const toneStyles = {
  violet: {
    card: "bg-[#f9f5ff] border-[rgba(97,26,191,0.15)] hover:border-[rgba(97,26,191,0.3)]",
    icon: "bg-[rgba(97,26,191,0.1)] text-[#611abf]",
    label: "text-[#611abf]",
  },
  orange: {
    card: "bg-[#fff8f0] border-[rgba(217,96,32,0.15)] hover:border-[rgba(217,96,32,0.35)]",
    icon: "bg-[rgba(217,96,32,0.1)] text-brand-orange",
    label: "text-brand-orange",
  },
  neutral: {
    card: "bg-secondary hover:border-[#b0b7c0]",
    icon: "bg-[rgba(0,0,0,0.07)] text-foreground",
    label: "text-muted-foreground",
  },
} as const;

export function ParticipationCard({
  icon,
  label,
  title,
  description,
  href,
  tone = "neutral",
  className,
}: ParticipationCardProps) {
  const styles = toneStyles[tone];

  return (
    <Card
      asChild
      className={cn(
        "group relative gap-0 rounded-[var(--radius-lg)] border-[1.5px] p-7 transition-transform duration-200 ease-[var(--transition-base)] hover:-translate-y-[3px] hover:[box-shadow:var(--shadow-hover)]",
        styles.card,
        className,
      )}
    >
      <a href={href}>
        <span className="absolute top-6 right-6 text-muted-foreground transition duration-200 ease-[var(--transition-base)] hover:text-foreground">
          <ArrowUpRight className="size-5" />
        </span>
        <div className="flex items-start gap-5">
          <div
            className={cn(
              "flex size-[52px] shrink-0 items-center justify-center rounded-[var(--radius)] text-xl",
              styles.icon,
            )}
          >
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "mb-2 text-[0.72rem] font-bold uppercase tracking-[0.06em]",
                styles.label,
              )}
            >
              {label}
            </p>
            <h3 className="mb-2 text-[1.15rem] font-bold tracking-[-0.015em] text-foreground">
              {title}
            </h3>
            <p className="text-[0.92rem] leading-[1.6] text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Card>
  );
}
