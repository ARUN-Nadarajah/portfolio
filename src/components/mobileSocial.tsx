import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/arunnadarajah2024",
    Icon: FaLinkedin,
    hoverColor: "hover:text-accent", // orange
  },
  {
    href: "https://github.com/ARUN-Nadarajah",
    Icon: FaGithub,
    hoverColor: "hover:text-muted", // muted
  },
  {
    href: "https://www.instagram.com/nadarajah_arun/",
    Icon: FaInstagram,
    hoverColor: "hover:text-pink-400", // optional: keep Tailwind pink
  },
  {
    href: "https://www.facebook.com/profile.php?id=100025937449274",
    Icon: FaFacebook,
    hoverColor: "hover:text-blue-500", // optional: keep Tailwind blue
  },
];

export default function MobileSocials() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-muted/20 py-2 px-6 flex justify-around items-center md:hidden z-50">
      {socials.map(({ href, Icon, hoverColor }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted transition-colors duration-300 text-2xl ${hoverColor}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}