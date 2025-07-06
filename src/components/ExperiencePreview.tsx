import { useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  url?: string;
}

export default function ExperiencePreview() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Treasurer",
      company: "SLIIT Northern Uni Student Community",
      duration: "2024 - Present",
      description:
        "Managing budgeting, planning, and financial documentation for student community events and activities.",
      url: "https://www.linkedin.com/in/arunnadarajah2024",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience-preview" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-text">Experience Preview</h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ id, role, company, duration, description, url }) => {
          const isHovered = hoveredId === id;
          const isAnotherHovered = hoveredId !== null && hoveredId !== id;

          return (
            <a
              key={id}
              href={url ?? "#"}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
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
                className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                  isHovered ? "text-accent" : "text-text"
                }`}
              >
                {role} @ {company}
              </h3>
              <span className="text-sm text-muted mb-2">{duration}</span>
              <p className="text-muted">{description}</p>
              {url && (
                <span className="mt-auto text-accent underline mt-4">
                  Learn More
                </span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}