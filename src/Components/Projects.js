import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './Styles.css'
import projectImg from "../assets/Rectangle.png"
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import Rectangle4 from "../assets/Rectangle4.png"
import Rectangle5 from "../assets/Rectangle5.png"
import ProjectFilter from './ProjectFilter';

const projectImages = [projectImg, Rectangle4, Rectangle3, Rectangle1, Rectangle5,Rectangle2];
const allCategories = ['All', 'web app', 'machine learning', 'android app', 'blockchain'];

const projects = [
  {
    id: 1,
    title: "AMIGO - Video conferencing",
    description: "Amigo is a robust video conferencing platform...",
    categories: ['web app'],
    technologies: ['NextJS', 'TypeScript', 'Clerk'],
    image: projectImg,
  },
  {
    id: 2,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['machine learning'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle1,
  },
  {
    id: 3,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['machine learning'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle4,
  },
  {
    id: 4,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['machine learning'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle5,
  },
  {
    id: 5,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['machine learning'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle3,
  },
  {
    id: 6,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['android app'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle4,
  },
  {
    id: 7,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['blockchain'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: Rectangle2,
  },

  // Add more projects here
];
 

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p>Things I’ve built so far</p>
      {/* <ProjectFilter/> */}
      <div className="filter-tabs-container">
  <div className="filter-tabs">
    {allCategories.map(category => (
      <button
        key={category}
        className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
</div>

      {/* <div className="projects-grid">
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
      </div> */}
       <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
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