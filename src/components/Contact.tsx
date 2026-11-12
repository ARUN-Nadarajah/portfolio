import { useState } from "react";
import { Check, Copy, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: mailto link remains immediately accessible
    }
  };

  const hiringSubject = encodeURIComponent(
    "Hiring Enquiry — Arun Nadarajah"
  );

  return (
    <div className="py-16">
      <SectionHeading
        index="07"
        title="Contact & Hiring"
        subtitle="Available for software engineering, full-stack development, and software support & implementation roles."
      />

      <div className="rounded-xl bg-surface border border-border p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Let&apos;s connect about engineering roles or projects
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              If you are looking for an adaptable early-career developer with practical experience in enterprise software systems, SQL data validation, REST API testing, and full-stack application development, I would be glad to hear from you.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}?subject=${hiringSubject}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background font-semibold text-sm sm:text-base hover:bg-accent/90 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Send Hiring Enquiry</span>
              </a>

              <a
                href={PROFILE.cvPath}
                download={PROFILE.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background border border-border text-foreground font-semibold text-sm sm:text-base hover:border-accent/60 hover:text-accent transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 rounded-xl bg-background border border-border/80 p-5">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/70">
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-muted">
                  Direct Email
                </p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors truncate block"
                >
                  {PROFILE.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-surface border border-border text-xs font-medium text-muted hover:text-foreground hover:border-accent/50 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span className="text-accent">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted py-1">
              <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>{PROFILE.location}</span>
            </div>

            <div className="pt-2 border-t border-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border/70 text-sm text-foreground/90 hover:border-accent/50 hover:text-accent transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border/70 text-sm text-foreground/90 hover:border-accent/50 hover:text-accent transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
