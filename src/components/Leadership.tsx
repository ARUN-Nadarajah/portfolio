import { Calendar, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LEADERSHIP_ITEMS } from "../data/portfolioData";

export default function Leadership() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="06"
        title="Leadership Experience"
        subtitle="Community leadership focused on financial stewardship, coordination, and collaborative event execution."
      />

      <div className="space-y-5">
        {LEADERSHIP_ITEMS.map((item) => (
          <article
            key={`${item.role}-${item.organization}`}
            className="rounded-xl bg-surface border border-border p-6 sm:p-7 hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  <Users className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Student Leadership</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-medium text-foreground/90">
                  {item.organization}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 self-start font-mono text-xs text-foreground/90 bg-background border border-border px-3 py-1 rounded-md shrink-0">
                <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                {item.period}
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-md bg-background border border-border/80 text-xs font-medium text-foreground/90"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
