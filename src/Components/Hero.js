import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import './Styles.css';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h4>Hi 👋,</h4>
          <h1>My name is Anjali Kala</h1>
          <p>I build things for web & React Native</p>
          <div className="hero-icons">
            <a
              href="https://github.com/kalaanjali19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
      href="https://www.linkedin.com/in/your-linkedin-username"
      target="_blank"
      rel="noopener noreferrer"
    >
            <FaLinkedinIn />
            </a>
            <a
      href="mailto:anjali.kala1@example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
            <MdAlternateEmail />
            </a>
          </div>
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className="hero-image"
        />
      </section>
      <section id="About" className="About-section" >
        <div className="hero-text">
          <h2>About me</h2>
          <p>I'm a Senior Full-Stack Developer with 4+ years of experience in React.js and React Native.

            I specialize in web and mobile development, creating responsive designs and optimizing performance to deliver functional digital solutions.

            I stay current with industry trends and enjoy collaborating on projects that enhance user experience.</p>

        </div>

      </section>
    </>
  );
};

export default Hero;