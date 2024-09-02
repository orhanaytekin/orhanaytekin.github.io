"use client";

import TextComponent from './TextComponent';
import ImageComponent from './ImageComponent';

const HeroSection = () => {
  return (
    <section className="grid-container fade-in">
      <ImageComponent alt="Orhan Aytekin" width={150} height={150} />
      <TextComponent text="Orhan Aytekin" />
      <TextComponent text="Backend Developer" />
    </section>
  );
};

export default HeroSection;