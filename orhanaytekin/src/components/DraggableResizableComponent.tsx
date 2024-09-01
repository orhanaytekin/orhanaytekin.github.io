"use client";

import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DraggableResizableComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Draggable>
      <ResizableBox width={200} height={200} minConstraints={[100, 100]} maxConstraints={[500, 500]}>
        <div className="card">
          {children}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableResizableComponent;