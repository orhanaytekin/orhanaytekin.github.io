"use client";

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Orhan Aytekin</Link>
      </div>
      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;