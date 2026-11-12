import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function MobileSocials() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface/95 backdrop-blur-md border-t border-border px-4 py-2.5 flex items-center justify-around"
    >
      <a
        href={PROFILE.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex flex-col items-center gap-0.5 text-muted hover:text-accent transition-colors text-xs"
      >
        <FaGithub className="w-5 h-5" aria-hidden="true" />
        <span>GitHub</span>
      </a>

      <a
        href={PROFILE.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex flex-col items-center gap-0.5 text-muted hover:text-accent transition-colors text-xs"
      >
        <FaLinkedin className="w-5 h-5" aria-hidden="true" />
        <span>LinkedIn</span>
      </a>

      <a
        href={`mailto:${PROFILE.email}`}
        aria-label="Email Arun Nadarajah"
        className="flex flex-col items-center gap-0.5 text-muted hover:text-accent transition-colors text-xs"
      >
        <Mail className="w-5 h-5" aria-hidden="true" />
        <span>Email</span>
      </a>

      <a
        href={PROFILE.cvPath}
        download={PROFILE.cvFileName}
        aria-label="Download CV"
        className="flex flex-col items-center gap-0.5 text-accent hover:text-foreground transition-colors text-xs font-medium"
      >
        <Download className="w-5 h-5" aria-hidden="true" />
        <span>CV</span>
      </a>
    </nav>
  );
}