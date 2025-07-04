import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About Me" },
  { id: "project", label: "Project" },
  {id:"education",label:"Education"},
  { id: "experience", label: "Experience" },

];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mt-10 flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-lg font-medium transition duration-300 ${
            activeSection === id
              ? "text-blue-400 underline underline-offset-4"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}