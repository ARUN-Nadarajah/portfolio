import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AllProjectsPage from "./pages/Projects";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<AllProjectsPage />}></Route>
      </Routes>
    </Router>
  );
}
