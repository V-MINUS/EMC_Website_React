import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaSoundcloud, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>EMC</h2>
            <p>Electronic Music Council</p>
          </div>
          <div className="social-links-horizontal">
            <div className="social-links-container justify-center">
              <h3 className="text-xl">Follow Us</h3>
              <div className="social-icons-row">
                <a href="https://www.instagram.com/electronicmusiccouncil/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.facebook.com/electronicmusiccouncil/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <FaFacebookF size={22} />
                </a>
                <a href="https://ie.linkedin.com/company/electronic-music-council" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <FaLinkedinIn size={22} />
                </a>
                <a href="https://www.tiktok.com/@electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="TikTok">
                  <FaTiktok size={22} />
                </a>
                <a href="https://www.youtube.com/@electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                  <FaYoutube size={22} />
                </a>
                <a href="https://soundcloud.com/electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="SoundCloud">
                  <FaSoundcloud size={22} />
                </a>
              </div>
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
