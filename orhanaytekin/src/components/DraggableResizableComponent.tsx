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
      setSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <Draggable>
      <ResizableBox
        width={size.width}
        height={size.height}
        minConstraints={[50, 50]}
        maxConstraints={[600, 600]}
        className="draggable-resizable"
      >
        <div ref={ref} className="card">
          {children}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableResizableComponent;