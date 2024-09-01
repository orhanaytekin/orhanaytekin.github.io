import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white fade-in">
      <Image src="/profile.jpg" alt="Orhan Aytekin" width={150} height={150} className="rounded-full shadow-lg" />
      <h1 className="text-4xl mt-4">Orhan Aytekin</h1>
      <p className="text-xl mt-2">Junior Backend Developer | NestJS | Next.js | Docker</p>
      <div className="mt-6 flex">
        <Link href="/projects" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
          View My Work
        </Link>
        <Link href="/contact" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;