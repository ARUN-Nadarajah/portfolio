import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { FEATURED_PROJECTS } from "../data/portfolioData";

export default function ProjectPreview() {
  return (
    <div className="py-16 border-b border-border/60">
      <SectionHeading
        index="04"
        title="Featured Projects"
        subtitle="Selected full-stack web and mobile applications demonstrating end-to-end architecture, real-time functionality, and clean UI engineering."
        action={
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors"
          >
            <span>All GitHub Repositories</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        }
      />

      <div className="space-y-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-xl bg-surface border border-border p-6 sm:p-8 hover:border-accent/45 transition-colors"
          >
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-border/70">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-2">
                  <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                  <span>Featured Project 0{index + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {project.title}{" "}
                  <span className="text-muted font-medium text-lg sm:text-xl">
                    — {project.subtitle}
                  </span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-foreground/90 leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Structured Project Breakdown */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Problem It Addresses
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    My Contribution
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-2">
                    Main Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-background border border-border/80 font-mono text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}