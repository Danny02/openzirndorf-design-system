import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actionLabel,
}: PageHeaderProps) {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-sm md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
      </div>
      {actionLabel ? (
        <Button className="min-w-40">
          {actionLabel}
          <ArrowRight className="size-4" />
        </Button>
      ) : null}
    </section>
  );
}
