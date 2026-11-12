import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION_ITEMS } from "../data/portfolioData";

export default function EducationPreview() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="05"
        title="Education"
        subtitle="Academic qualifications in Information Technology and English communication."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {EDUCATION_ITEMS.map((item) => (
          <article
            key={`${item.degree}-${item.institution}`}
            className="rounded-xl bg-surface border border-border p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2 rounded-lg bg-background border border-border text-accent">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                </div>
                {item.status && (
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted">
                    {item.status}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground leading-snug">
                {item.degree}
              </h3>

              <p className="mt-2 text-sm font-medium text-accent">
                {item.institution}
                {item.location ? `, ${item.location}` : ""}
              </p>
            </div>

            <p className="mt-5 pt-4 border-t border-border/70 font-mono text-xs text-muted">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}