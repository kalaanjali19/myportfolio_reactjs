import React, { useState, useEffect } from 'react';
import './Navbar.css';  
import { useTheme } from '../Context/ThemeContext';
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('About');
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['About', 'tech-stack', 'projects', 'footer'];
      let current = '';
  
      const viewportMid = window.innerHeight / 2;
  
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
  
          if (sectionTop <= viewportMid && sectionBottom >= viewportMid) {
            current = id;
          }
        }
      });
  
      setActiveSection(current);
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const getLinkClass = (id) => activeSection === id ? 'active' : '';

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <a href="#hero">#Anjali</a>
      </div>
      <div className="nav-links">
        <a href="#About" className={getLinkClass('About')}>About</a>
        <a href="#tech-stack" className={getLinkClass('tech-stack')}>Tech Stack</a>
        <a href="#projects" className={getLinkClass('projects')}>Projects</a>
        <a href="#footer" className={getLinkClass('footer')}>Contact</a>
        <a href="/Anjali_Resume.pdf" download>
        {theme === 'light' ? <FiDownload size={20} color="black" /> : <FiDownload size={20} />}
        </a>
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
        <a href="#About" onClick={toggleMenu} className={getLinkClass('About')}>About</a>
        <a href="#tech-stack" onClick={toggleMenu} className={getLinkClass('tech-stack')}>Tech Stack</a>
        <a href="#projects" onClick={toggleMenu} className={getLinkClass('projects')}>Projects</a>
        <a href="#footer" onClick={toggleMenu} className={getLinkClass('footer')}>Contact</a>
        <a href="/Anjali_Resume.pdf" download>
        <button className="cv-btn">Download CV</button>
        </a>
        <div className="theme-toggle">
          <div className="theme-text">
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
