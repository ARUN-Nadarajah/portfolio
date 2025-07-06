import { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  techStack: string[];
}

export default function ProjectPreview() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Boat Safari Trip Management System",
      description:
        "A system to manage and organize boat safari trips efficiently with booking and scheduling features.",
      url: "https://github.com/ARUN-Nadarajah/Boat-Safari-Trip-Management-System",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      id: 2,
      name: "Product Store",
      description:
        "A simple React and Node.js based e-commerce store with product browsing, cart management, and admin features.",
      url: "https://github.com/ARUN-Nadarajah/Product-Store",
      techStack: ["React", "TailwindCSS", "Express", "MongoDB", "Mongoose", "Node.js"],
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "My personal portfolio showcasing my projects, skills, and background.",
      url: "#",
      techStack: ["React", "TailwindCSS", "Framer Motion"],
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="project-preview" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-text">Project Preview</h2>
      <div className="flex flex-col gap-6">
        {projects.map(({ id, name, description, url, techStack }) => {
          const isHovered = hoveredId === id;
          const isAnotherHovered = hoveredId !== null && hoveredId !== id;

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                w-11/12 p-6 rounded-xl transition-all duration-300 ease-in-out transform
                flex flex-col cursor-pointer
                bg-surface bg-opacity-90 border border-transparent
                ${
                  isHovered
                    ? "scale-[1.01] bg-accent/20 backdrop-blur-md border border-accent/40 shadow-accent shadow-lg z-10 opacity-100 grayscale-0"
                    : isAnotherHovered
                    ? "opacity-30 grayscale"
                    : "opacity-70 grayscale-0 z-20"
                }
              `}
            >
              <h3
                className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isHovered ? "text-accent" : "text-text"
                }`}
              >
                {name}
              </h3>
              <p className="text-muted mb-2">{description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-muted mb-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-surface rounded-full text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-auto text-accent underline">
                View Project
              </span>
            </a>
          );
        })}
        <Link to="/Projects" className="text-accent underline">
          View All Projects
        </Link>
      </div>
    </section>
  );
}