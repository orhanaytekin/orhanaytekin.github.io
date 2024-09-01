"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const TimelineComponent = ({ title, date, description }: { title: string, date: string, description: string }) => {
  return (
    <DraggableResizableComponent>
      <div className="timeline-item">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm text-gray-400">{date}</p>
        <p>{description}</p>
      </div>
    </DraggableResizableComponent>
  );
};

export default TimelineComponent;