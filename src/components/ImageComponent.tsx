"use client";
import profilePic from '../../public/profile.jpg';

import DraggableResizableComponent from './DraggableResizableComponent';
import Image from 'next/image';

const ImageComponent = ({ alt, width, height }: { alt: string, width: number, height: number }) => {
  return (
    <DraggableResizableComponent>
      <Image src={profilePic} alt='Orhan Aytekin' width={150} height={150} className="rounded-full shadow-lg" />
    </DraggableResizableComponent>
  );
};

export default ImageComponent;