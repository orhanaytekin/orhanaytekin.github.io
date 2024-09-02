"use client";

import React, { useState, useRef } from 'react';
import SocialLinkComponent from './SocialLinkComponent';
import { SOCIALS } from '../constants/socials';
import DraggableResizableComponent from './DraggableResizableComponent';

const Footer = () => {
  const [key, setKey] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  const resetPositions = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <footer ref={footerRef} className="mt-8 bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <DraggableResizableComponent key={`title-${key}`}>
            <h3 className="text-2xl text-center">Connect with me</h3>
          </DraggableResizableComponent>
          
          <div className="hidden md:block"> {/* Hide the button on screens smaller than 768px */}
            <button
              onClick={resetPositions}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded bg-clip-padding mr-4"
            >
              ↻ Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Object.entries(SOCIALS).map(([platform, url]) => (
            <SocialLinkComponent key={`${platform}-${key}`} platform={platform as keyof typeof SOCIALS} url={url} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;