"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const TitleComponent = ({ text }: { text: string }) => {
  return (
    <DraggableResizableComponent>
      <h2 className="text-3xl mb-4">{text}</h2>
    </DraggableResizableComponent>
  );
};

export default TitleComponent;