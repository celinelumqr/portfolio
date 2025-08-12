import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section className="projects">
            <h2>My Games</h2>
            <div className="project-grid">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
            
            <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
