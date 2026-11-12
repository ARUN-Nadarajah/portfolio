import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Globe, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

const socials = [
  {
    href: PROFILE.githubUrl,
    label: "GitHub profile",
    Icon: FaGithub,
    external: true,
  },
  {
    href: PROFILE.linkedinUrl,
    label: "LinkedIn profile",
    Icon: FaLinkedin,
    external: true,
  },
  {
    href: `mailto:${PROFILE.email}`,
    label: "Send email",
    Icon: Mail,
    external: false,
  },
  {
    href: PROFILE.portfolioUrl,
    label: "Live portfolio URL",
    Icon: Globe,
    external: true,
  },
];

export default function Sidebar() {
  return (
    <aside
      aria-label="Quick social links"
      className="hidden xl:flex fixed left-5 bottom-0 z-30 flex-col items-center gap-5"
    >
      <div className="flex flex-col items-center gap-4">
        {socials.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="p-2 rounded-lg text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="w-px h-24 bg-border" aria-hidden="true" />
    </aside>
  );
}
