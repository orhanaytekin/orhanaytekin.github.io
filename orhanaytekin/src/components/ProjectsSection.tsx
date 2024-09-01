"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const projects = [
  {
    title: 'Lesion Meter',
    description: 'A mobile application designed to measure the area of skin lesions using images captured by mobile phones.',
    tech: 'Python, photogrammetry, image segmentation models (Segment Anything Model - SAM, adaptive thresholding), image processing',
    link: 'https://github.com/orhanaytekin/lesion-meter',
  },
  {
    title: 'Review and Recommendation System',
    description: 'A project that simulates a review and recommendation system for an e-commerce platform.',
    tech: 'React, Spring Boot, Hibernate, PostgreSQL',
    link: 'https://github.com/orhanaytekin/review-recommendation-system',
  },
  {
    title: 'BioMedical Data Mining',
    description: 'A project focused on extracting hidden trends and patterns from biomedical data for disease prediction.',
    tech: 'Python, LDA, scispacy, spacy, data analysis and visualization tools',
    link: 'https://github.com/orhanaytekin/biomedical-data-mining',
  },
];

const ProjectsSection = () => {
  return (
    <section className="fade-in">
      <DraggableResizableComponent>
        <h2 className="text-3xl mb-4">Projects</h2>
      </DraggableResizableComponent>
      <div className="grid">
        {projects.map((project, index) => (
          <DraggableResizableComponent key={index}>
            <div className="card">
              <h3 className="text-2xl mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
          </DraggableResizableComponent>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;