import { ArrowUp } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background pb-20 md:pb-0 xl:pl-64">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Live Portfolio
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
