import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline transform hover:scale-105 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline transform hover:scale-105 transition">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline transform hover:scale-105 transition">Projects</Link>
        </li>
        <li>
          <Link href="/experience" className="hover:underline transform hover:scale-105 transition">Experience</Link>
        </li>
        <li>
          <Link href="/skills" className="hover:underline transform hover:scale-105 transition">Skills</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline transform hover:scale-105 transition">Contact</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline transform hover:scale-105 transition">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;