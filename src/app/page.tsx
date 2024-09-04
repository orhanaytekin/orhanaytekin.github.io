import HeroSection from '../components/HeroSection';
import Link from 'next/link';
import { SOCIALS } from '../constants/socials';
import DraggableResizableComponent from '../components/DraggableResizableComponent';

export default function Home() {
  return (
    <main>
      <title>Orhan Aytekin</title>
      <link rel="icon" href="/profile.jpg" />
      <meta name="description" content="Personal website of Orhan Aytekin" />
      <meta property="og:title" content="Orhan Aytekin" />
      <meta property="og:description" content="Personal website of Orhan Aytekin" />
      <meta property="og:image" content="/profile.jpg" />
      <HeroSection />
      <div className="flex flex-col items-center mt-8 space-y-4">
        <DraggableResizableComponent>
          <div className="flex flex-col items-center space-y-2">
            <a
              href="/cv.pdf"
              download="Orhan Aytekin CV"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Download CV
            </a>
            <div className="px-4 w-full max-w-md text-center">
              <p className="text-yellow-500 text-sm">Note: CV may be outdated. Please check my LinkedIn for the most recent information.</p>
            </div>
          </div>
        </DraggableResizableComponent>
        <div className="flex space-x-4">
          <DraggableResizableComponent>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View LinkedIn
            </a>
          </DraggableResizableComponent>
          <DraggableResizableComponent>
            <Link
              href="/about#career-timeline"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              See Career Timeline
            </Link>
          </DraggableResizableComponent>
        </div>
      </div>
    </main>
  );
}
