import React from 'react';
import './Styles.css'; // Import the CSS file for styling

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiBootstrap, SiSass, SiVite } from 'react-icons/si';

const icons = [
  { Icon: FaHtml5, color: '#E44D26' },  // HTML5 Color
  { Icon: FaCss3Alt, color: '#1572B6' }, // CSS3 Color
  { Icon: FaJs, color: '#F7DF1E' },     // JavaScript Color
  { Icon: FaReact, color: '#61DBFB' },  // React Color
  { Icon: SiRedux, color: '#764ABC' },  // Redux Color
  { Icon: SiBootstrap, color: '#563D7C' }, // Bootstrap Color
  { Icon: SiTailwindcss, color: '#38B2AC' }, // Tailwind CSS Color
  { Icon: SiSass, color: '#C76395' },    // Sass Color
  { Icon: SiVite, color: '#646CFF' },    // Vite Color
  { Icon: FaGitAlt, color: '#F1502F' },  // Git Color
  { Icon: FaMicrosoft, color: '#7A7A7A' }, // Microsoft Color (for Visual Studio)
  { Icon: FaGithub, color: '#333' },     // GitHub Color
];

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2>My Tech Stack</h2>
      <p>Technologies I’ve been working with recently</p>
      <div className="tech-icons">
        {icons.map(({ Icon, color }, index) => (
          // Inline styling to change icon colors
          <Icon key={index} className="tech-icon" style={{ color }} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
