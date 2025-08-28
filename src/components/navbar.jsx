import React, { useState, useEffect } from 'react';
import logo from "../assets/moonforest-logo.png";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


    return (
        <nav className="navbar">
            <h1 className="logo"><a href="#about">MoonForest</a></h1>
            <ul className="nav-links">
              <li>
                <a 
                  href="#about" 
                  className={activeSection === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === "projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                  className={activeSection === "resume" ? "active" : ""}
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
        </nav>
    );
}

export default Navbar;