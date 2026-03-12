import { Card } from "@openzirndorf/ui/components/ui/card";
import { cn } from "@openzirndorf/ui/lib/utils";
import type { ReactNode } from "react";

type PillarCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function PillarCard({
  icon,
  title,
  description,
  className,
}: PillarCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 p-7 transition-transform duration-200 ease-[var(--transition-base)] hover:-translate-y-0.5 hover:[box-shadow:var(--shadow)]",
        className,
      )}
    >
      <div className="mb-4 text-[2rem] leading-none">{icon}</div>
      <h3 className="mb-2 text-base font-bold tracking-[-0.015em] text-foreground">
        {title}
      </h3>
      <p className="text-[0.9rem] leading-6 text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
