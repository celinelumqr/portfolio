import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.longDescription || project.description}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Tech:</strong> {project.tech.join(', ')}</p>

        {project.screenshots && (
          <div className="modal-screenshots">
            {project.screenshots.map((src, i) => (
              <img key={i} src={src} alt={`Screenshot ${i + 1}`} />
            ))}
          </div>
        )}

        {project.video && (
          <div className="modal-video">
            <iframe
              src={project.video}
              title={`${project.title} Trailer`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="modal-links">
          {project.links?.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;