"use client";

import React, { useEffect, useState } from 'react';
import DraggableResizableComponent from './DraggableResizableComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faTwitter, faGoodreads, faLetterboxd, faSpotify, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const icons = {
  linkedin: faLinkedin,
  github: faGithub,
  medium: faMedium,
  twitter: faTwitter,
  goodreads: faGoodreads,
  letterboxd: faLetterboxd,
  spotify: faSpotify,
  whatsapp: faWhatsapp,
  gmail: faEnvelope,
};

const SocialLinkComponent = ({ platform, url }: { platform: keyof typeof icons | 'bento', url: string }) => {
  const IconComponent = icons[platform as keyof typeof icons];
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <DraggableResizableComponent>
      <a href={url} className="flex items-center space-x-2" target={isDesktop ? "_blank" : "_self"}>
        {platform === 'bento' ? (
          <span>🍱 Bento</span>
        ) : (
          <>
            <FontAwesomeIcon icon={IconComponent} size="sm" />
            <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
          </>
        )}
      </a>
    </DraggableResizableComponent>
  );
};

export default SocialLinkComponent;