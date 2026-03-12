import { cn } from "@openzirndorf/ui/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold tracking-[-0.03em] text-balance text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="text-[1.05rem] leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
