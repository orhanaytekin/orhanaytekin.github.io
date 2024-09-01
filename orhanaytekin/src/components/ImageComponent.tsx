"use client";

import DraggableResizableComponent from './DraggableResizableComponent';
import Image from 'next/image';

const ImageComponent = ({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) => {
  return (
    <DraggableResizableComponent>
      <Image src={src} alt={alt} width={width} height={height} className="rounded-full shadow-lg" />
    </DraggableResizableComponent>
  );
};

export default ImageComponent;