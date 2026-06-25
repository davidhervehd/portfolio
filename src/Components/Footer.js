import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCvModal } from '../context/CvModalContext';
import '../Styles_css/Footer.css';

const publicUrl = process.env.PUBLIC_URL;

export default function Footer() {
  const location = useLocation();
  const { openCvModal } = useCvModal();

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

        <button
          type="button"
          className="footer-connect-link footer-link footer-cv-trigger"
          onClick={openCvModal}
        >
          <span
            className="footer-icon footer-icon-download"
            style={{
              WebkitMaskImage: `url(${publicUrl}/img/download.svg)`,
              maskImage: `url(${publicUrl}/img/download.svg)`,
            }}
            aria-hidden="true"
          />
          Download CV
        </button>

        <a
          href="https://www.linkedin.com/in/davidh4/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-connect-link footer-link"
        >
          <span
            className="footer-icon footer-icon-linkedin"
            style={{
              WebkitMaskImage: `url(${publicUrl}/img/logo_in.svg)`,
              maskImage: `url(${publicUrl}/img/logo_in.svg)`,
            }}
            aria-hidden="true"
          />
          LinkedIn
        </a>

        <a href="mailto:davidhervehd@gmail.com" className="footer-connect-link footer-link">
          <span
            className="footer-icon footer-icon-email"
            style={{
              WebkitMaskImage: `url(${publicUrl}/img/email.svg)`,
              maskImage: `url(${publicUrl}/img/email.svg)`,
            }}
            aria-hidden="true"
          />
          davidhervehd@gmail.com
        </a>

        <a href="tel:0763205555" className="footer-connect-link footer-link">
          <span
            className="footer-icon footer-icon-phone"
            style={{
              WebkitMaskImage: `url(${publicUrl}/img/telephon.svg)`,
              maskImage: `url(${publicUrl}/img/telephon.svg)`,
            }}
            aria-hidden="true"
          />
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
