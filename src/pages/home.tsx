import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ExperiencePreview from "../components/ExperiencePreview";
import ProjectPreview from "../components/ProjectPreview";
import EducationPreview from "../components/Education";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.45,
    ease: [0.25, 0.1, 0.25, 1] as Easing,
  },
  viewport: { once: true, amount: 0.08 },
};

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <main
      id="main-content"
      className="bg-background text-foreground min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <motion.section id="about" className="scroll-mt-20" {...revealProps}>
          <AboutMe />
        </motion.section>

        <motion.section id="skills" className="scroll-mt-20" {...revealProps}>
          <Skills />
        </motion.section>

        <motion.section
          id="experience"
          className="scroll-mt-20"
          {...revealProps}
        >
          <ExperiencePreview />
        </motion.section>

        <motion.section id="projects" className="scroll-mt-20" {...revealProps}>
          <ProjectPreview />
        </motion.section>

        <motion.section
          id="education"
          className="scroll-mt-20"
          {...revealProps}
        >
          <EducationPreview />
        </motion.section>

        <motion.section
          id="leadership"
          className="scroll-mt-20"
          {...revealProps}
        >
          <Leadership />
        </motion.section>

        <motion.section id="contact" className="scroll-mt-20" {...revealProps}>
          <Contact />
        </motion.section>
      </div>
    </main>
  );
}
