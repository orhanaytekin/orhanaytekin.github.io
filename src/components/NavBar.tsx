"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        {typeof window !== 'undefined' && window.innerWidth > 768 ? (
          <Link href="/" onClick={toggleMenu} className="logo-text">
            Orhan Aytekin
          </Link>
        ) : (
          <span className="logo-text" onClick={toggleMenu}>
            Orhan Aytekin
          </span>
        )}
        <span className="icon" onClick={toggleMenu}>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
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
            border-top: 1px solid #ddd; /* Add top border for the dropdown */
          }
          .links a {
            padding: 0.75rem 1rem; /* Increased vertical padding for better touch targets */
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