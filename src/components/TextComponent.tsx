"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const TextComponent = ({ text }: { text: string }) => {
  return (
    <DraggableResizableComponent>
      <p style={{ textAlign: 'center' }}>{text}</p>
    </DraggableResizableComponent>
  );
};

export default TextComponent;