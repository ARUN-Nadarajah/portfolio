import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/arunnadarajah2024",
    Icon: FaLinkedin,
    hoverColor: "hover:text-blue-400",
  },
  {
    href: "https://github.com/YOUR_USERNAME", // <-- update this
    Icon: FaGithub,
    hoverColor: "hover:text-gray-300",
  },
  {
    href: "https://instagram.com/YOUR_USERNAME", // <-- update this
    Icon: FaInstagram,
    hoverColor: "hover:text-pink-400",
  },
  {
    href: "https://facebook.com/YOUR_USERNAME", // <-- update this
    Icon: FaFacebook,
    hoverColor: "hover:text-blue-500",
  },
];

export default function MobileSocials() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-white/10 py-2 px-6 flex justify-around items-center md:hidden z-50">
      {socials.map(({ href, Icon, hoverColor }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-300 text-2xl ${hoverColor}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}