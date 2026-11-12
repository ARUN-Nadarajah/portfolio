import SectionHeading from "./SectionHeading";
import { ABOUT_PARAGRAPHS, PROFILE } from "../data/portfolioData";
import { CheckCircle2 } from "lucide-react";

const coreStrengths = [
  "Enterprise software operations & data validation (Infor Visual, MOPS, SQL)",
  "REST API request & response testing with Postman",
  "Full-stack web & mobile development (React, React Native, TypeScript, Node.js)",
  "Collaborative troubleshooting across technical & business workflows",
];

export default function AboutMe() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="Bridging enterprise business systems with full-stack software engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="lg:col-span-5 rounded-xl bg-surface border border-border p-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-4">
            Core Focus Areas
          </h3>
          <ul className="space-y-3">
            {coreStrengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-foreground/90 leading-snug"
              >
                <CheckCircle2
                  className="w-4 h-4 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted">
            <span>Based in {PROFILE.location}</span>
            <span className="font-mono text-accent">B.Sc. IT (2027)</span>
          </div>
        </div>
      </div>
    </div>
  );
}