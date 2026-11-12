import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../data/portfolioData";

const highlights = [
  {
    label: "Web & Mobile Stack",
    value: "React, React Native, TypeScript, Node.js, MongoDB",
  },
  {
    label: "Education & Leadership",
    value: "B.Sc. IT (SLIIT, 2027) · Community Treasurer",
  },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-border/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs sm:text-sm text-muted mb-6">
          <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>{PROFILE.location}</span>
          <span className="text-border" aria-hidden="true">
            •
          </span>
          <span className="text-foreground/90">
            Software Engineering &amp; Full-Stack Opportunities
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
        >
          {PROFILE.name}
        </h1>

        <p className="mt-4 text-lg sm:text-xl font-medium text-accent">
          {PROFILE.title}
        </p>

        <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
          {PROFILE.summary}
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background font-semibold text-sm sm:text-base hover:bg-accent/90 transition-colors"
          >
            <span>View Projects</span>
            <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <a
            href={PROFILE.cvPath}
            download={PROFILE.cvFileName}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border text-foreground font-semibold text-sm sm:text-base hover:border-accent/60 hover:text-accent transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-border/80 text-muted hover:text-foreground hover:border-muted font-medium text-sm sm:text-base transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Hire / Contact Me</span>
          </button>
        </div>

        {/* Social links */}
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" />
            <span>github.com/ARUN-Nadarajah</span>
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-4 h-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>{PROFILE.email}</span>
          </a>
        </div>

        {/* Snapshot Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-surface/80 border border-border/80 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm font-medium text-foreground/90 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
