import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <h1 className="logo flex items-center space-x-2">
                <a href="#about" className="flex items-center space-x-2">
                    <img
                        src="/moonforest-logo.png"
                        alt="moonforest Logo"
                        className="h-8 w-8"
                    />
                    <span>moonforest</span>
                </a>
            </h1>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className="nav-links">
              <li>
                <a 
                  href="#about" 
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                        className={activeSection === "resume" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
        </nav>
    );
}

export default Navbar;