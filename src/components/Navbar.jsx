import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🍰</span>
          Sri Lakshmi Bakery
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('menu')} className="nav-link">
              Menu
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">
              Gallery
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
