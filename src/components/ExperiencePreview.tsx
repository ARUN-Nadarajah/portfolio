import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCES } from "../data/portfolioData";

export default function ExperiencePreview() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="03"
        title="Professional Experience"
        subtitle="Practical industry experience supporting enterprise operations, data accuracy, and API integration workflows."
      />

      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="rounded-xl bg-surface border border-border p-6 sm:p-8 hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 border-b border-border/70">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Industry Experience</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base font-medium text-foreground/90">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-muted shrink-0">
                <span className="inline-flex items-center gap-1.5 font-mono text-foreground/90 bg-background border border-border px-3 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
              {exp.summary}
            </p>

            <div className="mt-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                Key Responsibilities &amp; Exposure
              </h4>
              <ul className="space-y-2.5">
                {exp.highlights.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-border/70 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-background border border-border/80 font-mono text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}