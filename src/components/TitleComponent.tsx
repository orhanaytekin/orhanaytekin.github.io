"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const TitleComponent = ({ text, centered = false }: { text: string, centered?: boolean }) => {
  return (
    <DraggableResizableComponent>
      <h2 className={`text-3xl mb-4 ${centered ? 'text-center' : ''}`}>{text}</h2>
    </DraggableResizableComponent>
  );
};

export default TitleComponent;