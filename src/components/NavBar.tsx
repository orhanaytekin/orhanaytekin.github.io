"use client";

import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={toggleMenu}>
        <span className="logo-text">Orhan Aytekin</span>
        <span className="icon">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          width: auto; /* Adjust width to auto */
        }
        .logo-text {
          margin-right: 0.5rem;
        }
        .icon {
          font-size: 0.75rem; /* Make the icon smaller */
        }
        .links {
          display: flex;
          gap: 1rem;
        }
        .links a {
          border-right: 1px solid #ddd; /* Line separators between items */
          padding-right: 1rem;
        }
        .links a:last-child {
          border-right: none; /* Remove the last border */
        }
        @media (max-width: 768px) {
          .navbar {
            justify-content: center; /* Center the navbar content on mobile */
          }
          .links {
            display: ${isOpen ? 'flex' : 'none'};
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: inherit; /* Same background color as navbar */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional for better visibility */
            flex-direction: column;
            align-items: center; /* Center the links */
            gap: 0;
          }
          .links a {
            padding: 0.5rem 1rem;
            border-bottom: 1px solid #ddd; /* Line separators between items */
            width: 100%;
            text-align: center; /* Center the text */
            border-right: none; /* Remove right border for mobile view */
          }
          .links a:last-child {
            border-bottom: none; /* Remove the last border */
          }
        }
        @media (min-width: 769px) {
          .navbar {
            justify-content: space-between; /* Left-align the navbar content on desktop */
          }
          .icon {
            display: none; /* Hide the icon on desktop view */
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;