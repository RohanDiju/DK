import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event listener to toggle header styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Toggle 'scrolled' state based on scroll position
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">DK Dance World</Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/classes" className="nav__link" onClick={() => setIsMenuOpen(false)}>
              Classes
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/gallery" className="nav__link" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
      </button>
    </header>
  );
};

export default Header;
