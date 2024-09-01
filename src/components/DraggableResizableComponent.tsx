"use client";

import { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DraggableResizableComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 150, height: 50 });

  useEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setSize({ width: offsetWidth + 30, height: offsetHeight + 30 }); // Add padding to the size
    }
  }, [children]);

  return (
    <Draggable>
      <ResizableBox
        width={size.width}
        height={size.height}
        minConstraints={[70, 70]} // Adjusted for padding
        maxConstraints={[1200, 1200]} // Adjusted for padding
        className="draggable-resizable"
      >
        <div ref={ref} className="card" style={{ padding: '10px' }}> {/* Add padding here */}
          {children}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableResizableComponent;