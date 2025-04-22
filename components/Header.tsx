import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type HeaderProps = {
  activeLink?: string;
};

const Header: React.FC<HeaderProps> = ({ activeLink = 'home' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <h1>EMC</h1>
          </Link>
        </div>
        <nav>
          <div 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><Link href="/" className={activeLink === 'home' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/about" className={activeLink === 'about' ? 'active' : ''}>About</Link></li>
            <li><Link href="/community" className={activeLink === 'community' ? 'active' : ''}>Community</Link></li>
            <li><Link href="/events" className={activeLink === 'events' ? 'active' : ''}>Events</Link></li>
            <li><Link href="/news" className={activeLink === 'news' ? 'active' : ''}>News</Link></li>
            <li><Link href="/artists" className={activeLink === 'artists' ? 'active' : ''}>Artists</Link></li>
            <li><Link href="/merch" className={activeLink === 'merch' ? 'active' : ''}>Merch</Link></li>
            <li><Link href="/contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</Link></li>
            <li><Link href="/beat-battle" className={activeLink === 'beat-battle' ? 'active' : ''}>Beat Battle</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

