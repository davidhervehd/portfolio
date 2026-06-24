import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles_css/Footer.css';

const publicUrl = process.env.PUBLIC_URL;

export default function Footer() {
  const location = useLocation();

  const handleCaseStudiesClick = (e) => {
    if (location.pathname === '/home') {
      e.preventDefault();
      document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `${location.pathname}#case-studies`);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
      <div className="footer-item footer-item-left">
        <p className="footer-heading">David Hervé</p>
        <p>Senior Product Designer (UX/UI)</p>
        <p className="footer-tags">SaaS • Smart Home • Digital Health</p>
        <p className="footer-bottom">© 2026 David Hervé · Senior Product Designer (UX/UI)</p>
      </div>

      <div className="footer-item footer-item-center">
        <p className="footer-heading">Let&apos;s Connect</p>

        <div className="footer-connect-item footer-cv-row">
          <img src={`${publicUrl}/img/download.svg`} alt="" className="footer-icon" aria-hidden="true" />
          <span className="footer-cv-label">Download CV</span>
          <a
            href={`${publicUrl}/img/CV_Hervé_David_2026_DE.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cv-lang"
          >
            DE
          </a>
          <a
            href={`${publicUrl}/img/CV_Hervé_David_2026_EN.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cv-lang"
          >
            EN
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/davidh4/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-connect-link footer-link"
        >
          <img src={`${publicUrl}/img/logo_in.svg`} alt="" className="footer-icon" aria-hidden="true" />
          LinkedIn
        </a>

        <a href="mailto:davidhervehd@gmail.com" className="footer-connect-link footer-link">
          <img src={`${publicUrl}/img/email.svg`} alt="" className="footer-icon" aria-hidden="true" />
          davidhervehd@gmail.com
        </a>

        <a href="tel:0763205555" className="footer-connect-link footer-link">
          <img src={`${publicUrl}/img/telephon.svg`} alt="" className="footer-icon" aria-hidden="true" />
          0763205555
        </a>
      </div>

      <div className="footer-item footer-item-menu">
        <p className="footer-heading">Menu</p>
        <Link to="/home" className="footer-menu-link footer-link">Home</Link>
        <Link
          to="/home#case-studies"
          className="footer-menu-link footer-link"
          onClick={handleCaseStudiesClick}
        >
          Case Studies
        </Link>
        <Link to="/about_me" className="footer-menu-link footer-link">About</Link>
        <Link to="/contact" className="footer-menu-link footer-link">Contact</Link>
      </div>
      </div>
    </footer>
  );
}
