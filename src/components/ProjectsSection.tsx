"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const projects = [
  {
    title: 'Lesion Meter',
    description: 'A mobile application designed to measure the area of skin lesions using images captured by mobile phones.',
    tech: 'Python, photogrammetry, image segmentation models (Segment Anything Model - SAM, adaptive thresholding), image processing',
    links: ['https://github.com/orhanaytekin/LesionMeter'],
  },
  {
    title: 'Review and Recommendation System',
    description: 'A project that simulates a review and recommendation system for an e-commerce platform.',
    tech: 'React, Spring Boot, Hibernate, PostgreSQL',
    links: ['https://github.com/orhanaytekin/bbm384-rrss-project-backend', 'https://github.com/orhanaytekin/bbm384-rrss-project-frontend'],
  },
  {
    title: 'BioMedical Data Mining',
    description: 'A project focused on extracting hidden trends and patterns from biomedical data for disease prediction.',
    tech: 'Python, LDA, scispacy, spacy, data analysis and visualization tools',
    links: ['https://github.com/orhanaytekin/biomedical-data-mining'],
  },
];

const ProjectsSection = () => {
  return (
    <section className="grid-container fade-in">
      <DraggableResizableComponent>
        <h2 className="text-3xl mb-4">Projects</h2>
      </DraggableResizableComponent>
      {projects.map((project, index) => (
        <DraggableResizableComponent key={index}>
          <div className="card">
            <h3 className="text-2xl mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
            <div className="mt-2">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  {project.links.length === 2
                    ? `View ${linkIndex === 0 ? 'Backend' : 'Frontend'} Source Code `
                    : 'View Source Code'}
                </a>
              ))}
            </div>
          </div>
        </DraggableResizableComponent>
      ))}
    </section>
  );
};

export default ProjectsSection;