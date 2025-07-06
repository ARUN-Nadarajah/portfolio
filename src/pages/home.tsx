import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import ProjectPreview from "../components/ProjectPreview";
import ExperiencePreview from "../components/ExperiencePreview";
import EducationPreview from "../components/Education";
import MobileSocials from "../components/mobileSocial";
import { motion} from "framer-motion";
import type { Easing } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as Easing, 
  },
  viewport: { once: false, amount: 0.3 },
};

export default function SampleHomePage() {
  return (
    <div className="bg-surface text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row h-full min-h-[80vh]">
          <div className="md:w-2/5 w-full md:sticky md:top-0 md:h-screen mb-10 md:mb-0 md:pr-8 flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-foreground">
              Hi, I'm Arun Nadarajah
            </h1>

            <span className="text-lg sm:text-xl text-accent h-8 mb-6 block">
              <Typewriter
                words={[
                  "a undergraduate",
                  "a software engineer",
                  "a problem solver",
                  "a developer",
                ]}
                loop
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>

            <p className="text-base sm:text-lg text-muted max-w-md mb-8">
              A dedicated software developer crafting modern, user-focused web
              applications with clean architecture and smooth user experience.
            </p>

            <Navbar />
          </div>

          <div className="md:w-3/5 w-full overflow-y-auto space-y-16 pl-5">
            <motion.section id="about" {...fadeInUp}>
              <AboutMe />
            </motion.section>

            <motion.section id="education" {...fadeInUp}>
              <EducationPreview />
            </motion.section>

            <motion.section id="project" {...fadeInUp}>
              <ProjectPreview />
            </motion.section>

            <motion.section id="experience" {...fadeInUp}>
              <ExperiencePreview />
            </motion.section>
          </div>
        </div>
      </div>

      <MobileSocials />
    </div>
  );
}