import React, { useState, useEffect } from "react";

import "../App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from '../Context/ThemeContext';
const Skills = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <div className="portfolio-container">
        <nav className="navbar">
          <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><a href="#work">Work</a></li>
            <li><a href="#about">Testimonials</a></li>
            <li><a href="#about">Contact</a></li>
            <li>
              <button className="download-btn">Download CV</button>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
              
            </li>
          </ul>
        </nav>
      </div>
      <section className="hero">
        <div className= {theme === "light" ? "hero-texts"  : "hero-text"}>
          <h1>Hi, I’m Anjali 👋</h1>
          <p>
            I’m a front-end developer (React Native & React.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I’ve been building mobile applications for
            over 3 years, I still love it as if it were something new.
          </p>
          <div className="hero-details">
            <span>📍 Hyderabed, India</span>
            <span>✅ Available for new projects</span>
          </div>
        </div>
         <div className="socials">
                  <a href="mailto:you@example.com" className="icon-box">
                    <MdAlternateEmail />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrerI"
                    className="icon-box"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
      </section>
      <section id="about" className="about-section">
          <h1>About Me</h1>
        <div className="about-img">
        <img
          src="https://img.freepik.com/premium-vector/developer-smart-woman-with-white-hair-works-laptop-3d-rendered-icon-isolated_831490-5401.jpg"
          alt="Profile"
          className="profile-img"
        />
        </div>
        <div className="about-text">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I’m a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. 
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I’m not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <ul>
            <li>🎓 B.Tech. in Electrical & Electronics Engineering</li>
            <li>💼 Full time Developer</li>
            <li>📚 Avid learner</li>
            <li>💡 Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I’m available for freelance work, so feel free to
            reach out and say hello! I promise I don’t bite 😊
          </p>
        </div>
      </section>

      <section id="work" className="work-section">
     <div>
         <h1>Work Experience</h1>
     </div>
        <div className="work-text">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I’m a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clean,
            readable, highly performant code matters to me.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I’m not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <ul>
            <li>🎓 B.Tech. in Electrical & Electronics Engineering</li>
            <li>💼 Full time developer</li>
            <li>📚 Avid learner</li>
            <li>💡 Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I’m available for freelance work, so feel free to
            reach out and say hello! I promise I don’t bite 😊
          </p>
        </div>
        <div className="work-img">
        <img
          src="https://img.freepik.com/premium-vector/developer-smart-woman-with-white-hair-works-laptop-3d-rendered-icon-isolated_831490-5401.jpg"
          alt="Profile"
          className="profile-img"
        />
        </div>
      </section>
    </div>
  );
};

export default Skills;