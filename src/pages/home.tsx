import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import ProjectPreview from '../components/ProjectPreview';
import ExperiencePreview from '../components/ExperiencePreview';
import EducationPreview from '../components/Education';
import MobileSocials from '../components/mobileSocial';

export default function SampleHomePage() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Responsive flex container: column on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row h-full min-h-[80vh]">

          {/* Left Sidebar */}
          <div className="md:w-2/5 w-full md:sticky md:top-0 md:h-screen mb-10 md:mb-0 md:pr-8 flex flex-col justify-start">

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
              Hi, I'm Arun Nadarajah
            </h1>

            <span className="text-lg sm:text-xl text-blue-400 h-8 mb-6 block">
              I am{' '}
              <Typewriter
                words={['an undergraduate', 'a software engineer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>

            <p className="text-base sm:text-lg text-gray-400 max-w-md mb-8">
              A dedicated software developer crafting modern, user-focused web applications with clean architecture and smooth user experience.
            </p>

            <Navbar />
          </div>

          {/* Right scrollable content */}
          <div className="md:w-3/5 w-full overflow-y-auto space-y-16 pl-5">

            <section id="about">
              <AboutMe />
            </section>

            <section id="education">
              <EducationPreview />
            </section>

            <section id="project">
              <ProjectPreview />
            </section>

            <section id="experience">
              <ExperiencePreview />
            </section>

          </div>
        </div>
      </div>
      <MobileSocials />
    </div>
  );
}