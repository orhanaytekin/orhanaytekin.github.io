"use client";

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
  return (
    <DraggableResizableComponent>
      <a href={url} className="flex items-center space-x-2">
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