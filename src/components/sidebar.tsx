import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/arunnadarajah2024",
    Icon: FaLinkedin,
    hoverColor: "hover:text-blue-400",
  },
  {
    href: "https://github.com/YOUR_USERNAME",
    Icon: FaGithub,
    hoverColor: "hover:text-gray-300",
  },
  {
    href: "https://instagram.com/YOUR_USERNAME",
    Icon: FaInstagram,
    hoverColor: "hover:text-pink-400",
  },
  {
    href: "https://facebook.com/YOUR_USERNAME",
    Icon: FaFacebook,
    hoverColor: "hover:text-blue-500",
  },
];

export default function Sidebar() {
  return (
    <div className="hidden md:flex h-screen w-16 bg-gray-900 text-white flex-col items-center justify-between py-6 fixed left-0 top-0 z-50">
      {/* Top - Initial */}
      <div className="text-3xl font-bold">A</div>

      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {socials.map(({ href, Icon, hoverColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 ${hoverColor}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}