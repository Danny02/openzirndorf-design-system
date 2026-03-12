import { Button } from "@openzirndorf/ui/components/ui/button";
import { cn } from "@openzirndorf/ui/lib/utils";

type SupportBannerProps = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  className?: string;
};

export function SupportBanner({
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: SupportBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-6 rounded-[var(--radius-lg)] bg-primary px-8 py-7 text-white md:flex-row md:items-center",
        className,
      )}
    >
      <div>
        <h3 className="mb-1 text-[1.1rem] font-bold">{title}</h3>
        <p className="text-[0.9rem] text-white/88">{description}</p>
      </div>
      <Button asChild variant="white" className="w-full md:w-auto">
        <a href={actionHref}>{actionLabel}</a>
      </Button>
    </div>
  );
}
