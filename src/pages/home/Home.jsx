import React, { useState, useEffect } from "react";
import "../../../sass/home/Home.css";
// import "../../../sass/header/header.css";
import i1 from "../../../public/Logo2.jpeg";
import i2 from "../../../public/Project-img.png";
import i3 from "../../../public/Project-img2.png";
import i4 from "../../../public/Project-img3.png";
import i5 from "../../../public/Project-img4.png";
import { FaGithub } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import About from "../about/About";
import Skils from "../skils/Skils";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Event listener to show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };
  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className="container">
      <About />
      <Skils />
      <Projects />
      <Contact />
      <button className="toggle-dark-mode" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showButton ? "show" : ""}`} // Conditional class based on state
        onClick={scrollToTop}
      >
        ↑
      </button>
    </main>
  );
};
export default Home;
