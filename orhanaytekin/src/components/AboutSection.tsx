"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const AboutSection = () => {
  return (
    <section className="fade-in">
      <DraggableResizableComponent>
        <h2 className="text-3xl mb-4">About Me</h2>
      </DraggableResizableComponent>
      <DraggableResizableComponent>
        <p className="mb-4">I am Orhan Aytekin, a passionate Fullstack Developer with expertise in React, Flutter, Node.js, and more. I have a strong background in technology and a keen interest in building innovative solutions.</p>
      </DraggableResizableComponent>
      <DraggableResizableComponent>
        <h3 className="text-2xl mb-2">Career Timeline</h3>
      </DraggableResizableComponent>
      <ul className="list-disc pl-5">
        <DraggableResizableComponent>
          <li>2024 - Present: Junior Backend Developer at PlusMinusOne</li>
        </DraggableResizableComponent>
        <DraggableResizableComponent>
          <li>2024: Full Stack Developer at Papelz</li>
        </DraggableResizableComponent>
        <DraggableResizableComponent>
          <li>2023 - 2024: Junior Software Engineer at Neuronic</li>
        </DraggableResizableComponent>
        <DraggableResizableComponent>
          <li>2023: Android Developer Intern at GİB Teknoloji</li>
        </DraggableResizableComponent>
        <DraggableResizableComponent>
          <li>2022: Computer Science Intern at Ankara Su ve Kanalizasyon İdaresi</li>
        </DraggableResizableComponent>
      </ul>
    </section>
  );
};

export default AboutSection;