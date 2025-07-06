import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    href: "https://www.linkedin.com/in/arunnadarajah2024",
    Icon: FaLinkedin,
    hoverClass: "hover:text-accent",
  },
  {
    href: "https://github.com/ARUN-Nadarajah",
    Icon: FaGithub,
    hoverClass: "hover:text-muted",
  },
  {
    href: "https://www.instagram.com/nadarajah_arun/",
    Icon: FaInstagram,
    hoverClass: "hover:text-pink-400", // keep this if you want pink from default palette
  },
  {
    href: "https://www.facebook.com/profile.php?id=100025937449274",
    Icon: FaFacebook,
    hoverClass: "hover:text-blue-500", // default Tailwind blue
  },
];

export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-16 bg-background text-text flex-col items-center justify-between py-6">
     <motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 1, type: "spring" }}
  className="text-3xl font-bold"
>
  A
</motion.div>

      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {socials.map(({ href, Icon, hoverClass }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-muted transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 ${hoverClass}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}