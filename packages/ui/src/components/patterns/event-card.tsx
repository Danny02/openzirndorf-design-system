import { Card } from "@openzirndorf/ui/components/ui/card";
import { cn } from "@openzirndorf/ui/lib/utils";
import { ArrowRight } from "lucide-react";

type EventCardProps = {
  day: string;
  monthLabel: string;
  title: string;
  meta: string;
  href?: string;
  actionLabel?: string;
  className?: string;
};

export function EventCard({
  day,
  monthLabel,
  title,
  meta,
  href,
  actionLabel = "Details",
  className,
}: EventCardProps) {
  const content = (
    <>
      <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-[var(--radius-sm)] bg-brand-green-light px-2 text-center">
        <span className="text-[1.2rem] font-extrabold leading-none text-brand-green-dark">
          {day}
        </span>
        <span className="mt-1 text-[0.7rem] font-semibold text-brand-green">
          {monthLabel}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-base font-bold tracking-[-0.015em] text-foreground">
          {title}
        </h3>
        <p className="text-[0.87rem] text-muted-foreground">{meta}</p>
      </div>
      <span className="hidden shrink-0 items-center gap-1 text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-primary md:inline-flex">
        {actionLabel}
        <ArrowRight className="size-4" />
      </span>
    </>
  );

  return (
    <Card
      asChild={Boolean(href)}
      className={cn(
        "grid items-center gap-5 p-5 transition-transform duration-200 ease-[var(--transition-base)] hover:[box-shadow:var(--shadow-sm)] md:grid-cols-[80px_1fr_auto]",
        href &&
          "cursor-pointer hover:translate-x-[3px] hover:border-primary hover:bg-brand-green-light",
        className,
      )}
    >
      {href ? <a href={href}>{content}</a> : <div>{content}</div>}
    </Card>
  );
}
