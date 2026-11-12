export interface NavItem {
  id: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  features: string[];
  technologies: string[];
  contribution: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  focusAreas: string[];
}

export const PROFILE = {
  name: "Arun Nadarajah",
  initials: "AN",
  title: "IT Undergraduate | Full-Stack Developer | Software Support & Implementation",
  location: "Jaffna, Sri Lanka",
  email: "nadarajaharun.2003@gmail.com",
  cvPath: "/Arun_Nadarajah_CV.pdf",
  cvFileName: "Arun_Nadarajah_CV.pdf",
  portfolioUrl: "https://portfolio-arun-nadarajahs-projects.vercel.app/",
  githubUrl: "https://github.com/ARUN-Nadarajah",
  linkedinUrl: "https://www.linkedin.com/in/arunnadarajah2024",
  summary:
    "Information Technology undergraduate with practical experience in enterprise software support, SQL-based data validation, REST API testing, and full-stack application development. Experienced in working with business systems and developing web and mobile applications using modern technologies. Interested in software engineering, system integration, and delivering practical technology solutions.",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_PARAGRAPHS: string[] = [
  "I am an Information Technology undergraduate at SLIIT Northern University in Jaffna, building a strong foundation across both full-stack application engineering and enterprise software environments.",
  "During my Software Support Engineer Internship at Magick Tech Solutions, I worked directly with enterprise business systems including Infor Visual and MOPS, using SQL to retrieve, analyse, and validate business data, supporting invoice reconciliation, and testing REST APIs with Postman alongside technical teams.",
  "Alongside enterprise system support, I build web and mobile applications using React, React Native, TypeScript, Node.js, Express.js, and MongoDB—combining practical business workflow understanding with clean, maintainable engineering. I also serve as Treasurer for the SLIIT Northern University Student Community.",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP", "REST API Development"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Expo"],
  },
  {
    category: "Additional Knowledge",
    items: ["Basic AI and Machine Learning"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Support Engineer Intern",
    company: "Magick Tech Solutions",
    location: "Jaffna, Sri Lanka",
    period: "February 2026 – August 2026",
    summary:
      "Gained hands-on exposure to enterprise software operations, data integrity verification, API validation, and structured troubleshooting in a collaborative business environment.",
    highlights: [
      "Supported enterprise business operations using Infor Visual and MOPS systems.",
      "Used SQL to retrieve, analyse, and validate business data.",
      "Assisted with invoice reconciliation and data verification.",
      "Tested REST API requests and responses using Postman.",
      "Assisted with software troubleshooting and operational requirements in collaboration with technical teams.",
    ],
    technologies: [
      "Infor Visual",
      "MOPS",
      "SQL",
      "REST API Testing",
      "Postman",
      "Data Verification",
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "seat-app",
    title: "SEAT-APP",
    subtitle: "Restaurant Table Reservation System",
    overview:
      "A mobile application for restaurant table discovery and reservations, featuring customer authentication, booking management, and real-time communication.",
    problem:
      "Reduces friction for diners looking to discover available restaurant seating and manage reservations cleanly without relying on manual phone coordination.",
    features: [
      "Restaurant table discovery",
      "Customer authentication",
      "Booking management",
      "Real-time communication with Socket.IO",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
    ],
    contribution:
      "Developed the cross-platform mobile client with React Native, Expo, and TypeScript, integrated RESTful backend services using Node.js, Express.js, and MongoDB, and implemented real-time communication using Socket.IO.",
    githubUrl: "https://github.com/ARUN-Nadarajah/SEAT-APP",
  },
  {
    id: "treatbox",
    title: "TreatBox",
    subtitle: "eCommerce Platform",
    overview:
      "A full-stack eCommerce platform featuring product listings, user authentication, shopping cart functionality, and an admin dashboard.",
    problem:
      "Provides a unified digital storefront where customers can browse items and manage shopping carts while giving store administrators a dedicated dashboard to manage operations.",
    features: [
      "Product listings and browsing",
      "User authentication",
      "Shopping cart functionality",
      "Admin dashboard",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    contribution:
      "Built the full-stack architecture using React and TypeScript for the user and admin interfaces, paired with a Node.js, Express.js, and MongoDB backend supporting authentication, product management, and cart workflows.",
    githubUrl: "https://github.com/ARUN-Nadarajah/treatBox-ecommerce",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Developer Portfolio & GitHub Showcase",
    overview:
      "An interactive personal portfolio showcasing projects, technical skills, and development experience.",
    problem:
      "Gives recruiters and engineering teams a structured, fast way to review technical capabilities, enterprise experience, and full-stack project work in one place.",
    features: [
      "Structured sections for experience, skills, projects, education, and leadership",
      "Responsive dark-mode UI with accessible keyboard navigation",
      "Subtle Framer Motion transitions with reduced-motion support",
      "Dynamic GitHub repositories view",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    contribution:
      "Designed and engineered the responsive frontend, reusable section components, SEO metadata, and GitHub API repository integration.",
    githubUrl: "https://github.com/ARUN-Nadarajah/portfolio",
    liveUrl: "https://portfolio-arun-nadarajahs-projects.vercel.app/",
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "SLIIT Northern University",
    location: "Jaffna",
    period: "Expected November 2027",
    status: "Undergraduate",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    period: "February 2024",
    status: "Completed",
  },
  {
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    period: "November 2023",
    status: "Completed",
  },
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    role: "Treasurer",
    organization: "SLIIT Northern University Student Community",
    period: "October 2024 – Present",
    description:
      "Responsible for managing financial planning and supporting the coordination of student community initiatives in collaboration with committee members.",
    focusAreas: ["Budgeting", "Event Planning", "Coordination", "Teamwork"],
  },
];
