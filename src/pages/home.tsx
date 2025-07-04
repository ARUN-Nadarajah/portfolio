import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import ProjectPreview from '../components/ProjectPreview';

export default function SampleHomePage() {
  return (
    <div className="flex h-screen w-screen bg-gray-900 text-gray-200 overflow-hidden pl-16">
      <div className="w-2/4 h-full pl-16 pr-6 pt-6 pb-10 flex flex-col justify-start sticky top-0 -z-0">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Hi, I'm Arun Nadarajah
        </h1>

        <span className="text-xl text-blue-400 h-8 mb-4">
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

        <p className="text-lg text-gray-400 max-w-md">
          A dedicated software developer crafting modern, user-focused web applications with clean architecture and smooth user experience.
        </p>
        <Navbar />
      </div>

      <div className="w-3/5 h-full overflow-y-auto pr-6 py-10 space-y-16 relative z-50 overflow-visible pl-10">
        <section id="About">
          <AboutMe/>
        </section>
        <section id="project-preview">
          <ProjectPreview />
        </section>
      </div>
    </div>
  );
}