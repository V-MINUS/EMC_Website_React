import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaSoundcloud } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>EMC</h2>
            <p>Electronic Music Council</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Navigate</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/artists">Artists</Link></li>
                <li><Link href="/merch">Merchandise</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Connect</h3>
              <ul className="social-links">
                <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="social-icon" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="social-icon" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className="social-icon" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"><FaSoundcloud className="social-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Electronic Music Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
