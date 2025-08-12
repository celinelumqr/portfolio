import React from 'react';

const ProjectCard = ({ title, description, image, role, tech, links }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Tech:</strong> {tech.join(', ')}</p>

      <div className="project-links">
        {links?.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;