import { Code2, Database, Layers, Sparkles, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SKILL_CATEGORIES } from "../data/portfolioData";

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Layers,
  Backend: Code2,
  Database: Database,
  Tools: Wrench,
  "Additional Knowledge": Sparkles,
};

export default function Skills() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="02"
        title="Technical Skills"
        subtitle="Technologies and tools I use across web, mobile, database, and enterprise support workflows."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map(({ category, items }) => {
          const Icon = categoryIcons[category] ?? Code2;
          return (
            <div
              key={category}
              className="rounded-xl bg-surface border border-border p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-background border border-border text-accent">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-background border border-border/80 text-xs sm:text-sm font-medium text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
