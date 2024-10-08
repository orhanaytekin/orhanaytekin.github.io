"use client";

import SocialLinkComponent from './SocialLinkComponent';
import { SOCIALS } from '../constants/socials';

const SocialLinksComponent = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap space-x-4">
        <SocialLinkComponent platform="bento" url={SOCIALS.bento} />
        <SocialLinkComponent platform="linkedin" url={SOCIALS.linkedin} />
        <SocialLinkComponent platform="github" url={SOCIALS.github} />
        <SocialLinkComponent platform="medium" url={SOCIALS.medium} />
        <SocialLinkComponent platform="twitter" url={SOCIALS.twitter} />
        <SocialLinkComponent platform="goodreads" url={SOCIALS.goodreads} />
        <SocialLinkComponent platform="letterboxd" url={SOCIALS.letterboxd} />
        <SocialLinkComponent platform="spotify" url={SOCIALS.spotify} />
        <SocialLinkComponent platform="whatsapp" url={SOCIALS.whatsapp} />
        <SocialLinkComponent platform="gmail" url={SOCIALS.gmail} />
      </div>
    </div>
  );
};

export default SocialLinksComponent;