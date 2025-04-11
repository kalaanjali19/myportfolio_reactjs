import React from 'react';
import './Styles.css'
import projectImg from "../assets/Rectangle.png"

const projects = new Array(6).fill({
  title: 'Project Title goes here',
  description: 'Short description of the project, what it does, and technologies used.',
  image: projectImg,
});

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p>Things I’ve built so far</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;