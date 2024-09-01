"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const TextComponent = ({ text }: { text: string }) => {
  return (
    <DraggableResizableComponent>
      <p>{text}</p>
    </DraggableResizableComponent>
  );
};

export default TextComponent;