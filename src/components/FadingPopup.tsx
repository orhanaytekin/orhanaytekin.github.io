"use client";

import React, { useState, useEffect } from 'react';
import { UI_CONSTANTS } from '../constants/uiConstants';

const FadingPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      style={{ zIndex: UI_CONSTANTS.POPUP_Z_INDEX }} 
      className="fixed top-20 right-8 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-out text-left hidden md:block"
    >
      <p className="text-base">Tip: You can drag some of the elements on every page!</p>
    </div>
  );
};

export default FadingPopup;