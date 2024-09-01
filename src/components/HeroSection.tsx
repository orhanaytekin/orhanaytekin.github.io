"use client";

import TextComponent from './TextComponent';
import ImageComponent from './ImageComponent';

const HeroSection = () => {
  return (
    <section className="grid-container fade-in">
      <ImageComponent src="orhanaytekin.github.io/profile.jpg" alt="Orhan Aytekin" width={150} height={150} />
      <TextComponent text="Orhan Aytekin" />
      <TextComponent text="Junior Backend Developer | NestJS | Next.js | Docker" />
    </section>
  );
};

export default HeroSection;