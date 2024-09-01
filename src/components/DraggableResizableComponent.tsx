"use client";

import { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const DraggableResizableComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const showBoundingBox = isHovering || isDragging;

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleStop = () => {
    setIsDragging(false);
    // Add a small delay before re-enabling pointer events
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.pointerEvents = 'auto';
      }
    }, 100);
  };

  return (
    <Draggable
      onStart={handleStart}
      onStop={handleStop}
      onDrag={() => {
        if (ref.current) {
          ref.current.style.pointerEvents = 'none';
        }
      }}
    >
      <div 
        ref={ref} 
        className="card" 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ 
          padding: '10px',
          border: showBoundingBox ? '2px solid #ff79c6' : '2px solid transparent',
          borderRadius: '4px',
          boxShadow: showBoundingBox ? '0 0 10px rgba(255, 121, 198, 0.5)' : 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: 'border 0.3s, box-shadow 0.3s',
          backgroundColor: 'rgba(40, 42, 54, 0.8)',
        }}
      >
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableResizableComponent;