import React, { useState } from 'react';
import './Navbar.css';  // Import CSS file for navbar styles
import { useTheme } from '../Context/ThemeContext';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#hero">My Portfolio</a>
        <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ?  "☀️":"🌙" }
              </button>
  

      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#tech-stack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#footer">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
