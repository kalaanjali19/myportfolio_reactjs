import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import './Styles.css';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h4>Hi 👋,</h4>
        <h1>My name is Anjali Kala</h1>
        <p>I build things for web</p>
        <div className="hero-icons">
          <FaGithub />
          <FaLinkedinIn />
          <MdAlternateEmail />
        </div>
      </div>
      <img
        src={profileImage}
        alt="Profile"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;