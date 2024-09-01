"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const ButtonComponent = ({ text, link }: { text: string, link: string }) => {
  return (
    <DraggableResizableComponent>
      <a href={link} className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
        {text}
      </a>
    </DraggableResizableComponent>
  );
};

export default ButtonComponent;