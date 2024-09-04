import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skils from "./pages/skils/Skils";
import Projects from "./pages/projects/Projects";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skils" element={<Skils />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
