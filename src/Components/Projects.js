import React from 'react';
import './Styles.css'
import projectImg from "../assets/Rectangle.png"
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import Rectangle4 from "../assets/Rectangle4.png"
import Rectangle5 from "../assets/Rectangle5.png"

const projectImages = [projectImg, Rectangle4, Rectangle3, Rectangle1, Rectangle5,Rectangle2];

const projects = projectImages.map((img, index) => ({
  title: `Project Title ${index + 1}`,
  description: 'Short description of the project, what it does, and technologies used.',
  image: img,
}));

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