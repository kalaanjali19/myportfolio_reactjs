import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './ProjectFilter.css'; // We'll write this CSS below

const projectData = [
  {
    id: 1,
    title: "AMIGO - Video conferencing",
    description: "Amigo is a robust video conferencing platform...",
    categories: ['web app'],
    technologies: ['NextJS', 'TypeScript', 'Clerk'],
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    title: "Whatsapp chat analyzer",
    description: "Streamlit-based app to analyze WhatsApp exports...",
    categories: ['machine learning'],
    technologies: ['streamlit', 'Python', 'NLTK'],
    image: 'https://via.placeholder.com/300x150',
  },
  // Add more projects here
];

const allCategories = ['All', 'web app', 'games', 'machine learning', 'android app', 'blockchain', 'selenium', 'chrome extension'];

export default function ProjectFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="filter-container">

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

      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {searchTerm && <FaTimes className="clear-icon" onClick={() => setSearchTerm('')} />}
      </div>

      <p className="project-count">
        Showing <strong>{filteredProjects.length}</strong> of <strong>{projectData.length}</strong> projects
      </p>

      <div className="project-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="tags">
              {project.technologies.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-footer">
              <a href="#">Details</a>
              <span role="img" aria-label="preview">👁</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
