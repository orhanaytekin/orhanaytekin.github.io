"use client";

import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white fade-in">
      <ImageComponent src="/profile.jpg" alt="Orhan Aytekin" width={150} height={150} />
      <TextComponent text="Orhan Aytekin" />
      <TextComponent text="Junior Backend Developer | NestJS | Next.js | Docker" />
      <div className="mt-6 flex">
        <ButtonComponent text="View My Work" link="/projects" />
        <ButtonComponent text="Contact Me" link="/contact" />
      </div>
    </section>
  );
};

export default HeroSection;