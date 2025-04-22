import React, { useState } from 'react';
import './Navbar.css';  
import { useTheme } from '../Context/ThemeContext';
import { FiSun, FiMoon,FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className={`navbar ${theme}`}>
    <div className="logo">
      <a href="#hero">MyPortfolio</a>
    </div>
    <div className="nav-links">
      <a href="#hero">Home</a>
      <a href="#About">About</a>
      <a href="#tech-stack">Tech Stack</a>
      <a href="#projects">Projects</a>
      <a href="#footer">Contact</a>
      {theme === 'light' ? <FiDownload size={20} color="black" /> :<FiDownload size={20}  />}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon size={18} color='black' /> : <FiSun size={18} />}
      </button>
    </div>
    <div className="menu-icon" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
    <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <span className="close-btn" onClick={toggleMenu}>×</span>
      </div>
      <a href="#hero" onClick={toggleMenu}>Home</a>
      <a href="#tech-stack" onClick={toggleMenu}>Tech Stack</a>
      <a href="#projects" onClick={toggleMenu}>Projects</a>
      <a href="#footer" onClick={toggleMenu}>Contact</a>
      <button className="cv-btn">Download CV</button>
      <div className="theme-toggle">
      <div className= "theme-text">
        {theme === 'light' ? <FiMoon size={20} color="black" /> : <FiSun size={20} color="white" />}
        <span>{theme === "light" ? "Light" : "Dark"} Mode</span>
        </div>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
