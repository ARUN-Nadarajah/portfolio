import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./App.css";
import Home from "./pages/home";
import AllProjectsPage from "./pages/Projects";
import Navbar from "./components/NavBar";
import Sidebar from "./components/sidebar";
import SectionRail from "./components/SectionRail";
import MobileSocials from "./components/mobileSocial";
import Footer from "./components/Footer";
import MouseLight from "./components/spotlight";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-background focus:font-semibold"
        >
          Skip to main content
        </a>
        <MouseLight />
        <Navbar />
        <Sidebar />
        <SectionRail />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <MobileSocials />
      </Router>
    </MotionConfig>
  );
}
