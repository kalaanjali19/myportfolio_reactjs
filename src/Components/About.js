import React, { useState, useEffect } from "react";
import "../App.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const About = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h4>Hi, I am</h4>
        <h1>Anjali Kala</h1>
        <p className="role">Front-end Developer</p>
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
      </div>

    </section>
  );
};
export default About;