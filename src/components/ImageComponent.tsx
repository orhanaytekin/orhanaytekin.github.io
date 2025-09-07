"use client";

import DraggableResizableComponent from './DraggableResizableComponent';
import Image from 'next/image';

const ImageComponent = ({ alt, width, height }: { alt: string, width: number, height: number }) => {
  return (
    <DraggableResizableComponent>
      <Image
        src={'/profile.png'}
        alt='Orhan Aytekin'
        width={150}
        height={150}
        className="rounded-full shadow-lg mx-auto"
        style={{ display: 'block' }}
      />
    </DraggableResizableComponent>
  );
};

export default ImageComponent;