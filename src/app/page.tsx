import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex justify-center mt-8">
        <a
          href={"/orhanaytekin.github.io/cv.pdf"}
          download="Orhan Aytekin CV"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </main>
  );
}
