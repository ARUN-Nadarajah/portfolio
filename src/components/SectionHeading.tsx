import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function SectionHeading({
  index,
  title,
  subtitle,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs font-medium tracking-wider text-accent uppercase">
            {index}
          </span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
