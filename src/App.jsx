import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route
import NavBar from "./NavBar";
import About from "./pages/About"; // Fix the casing of the file name
import Contact from "./pages/Contact"; // Fix the casing of the file name
import Resume from "./pages/Resume"; // Fix the casing of the file name
import Project from "./pages/Projects"; // Fix the casing of the file name
import Footer from "./components/Footer";



const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* NavBar should be outside Routes so it displays on all pages */}
        <Routes>
          <Route path="/" element={<About />} /> {/* Home/About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/resume" element={<Resume />} /> {/* Resume page */}
          <Route path="/project" element={<Project />} /> {/* Project page */}
            </Routes>
           <Footer />
      </div>
    </Router>
  );
};

export default App;


















