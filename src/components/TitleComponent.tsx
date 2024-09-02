"use client";

import DraggableResizableComponent from './DraggableResizableComponent';
import { UI_CONSTANTS } from '../constants/uiConstants';

const TitleComponent = ({ text, centered = false }: { text: string, centered?: boolean }) => {
  return (
    <DraggableResizableComponent>
      <h2 
        style={{ zIndex: UI_CONSTANTS.TITLE_Z_INDEX }} 
        className={`text-3xl mb-4 ${centered ? 'text-center' : ''}`}
      >
        {text}
      </h2>
    </DraggableResizableComponent>
  );
};

export default TitleComponent;