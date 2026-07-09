import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCvModal } from '../context/CvModalContext';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../config/contactMailto';
import { trackEvent } from '../utils/analytics';
import { scrollToCaseStudiesSection } from '../utils/scrollToCaseStudies';
import '../Styles_css/Footer.css';

const publicUrl = process.env.PUBLIC_URL;

function isHomePath(pathname) {
  const normalized = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
  return normalized === '/' || normalized === '/home';
}

function FooterIcon({ iconFile }) {
  const iconUrl = `${publicUrl}/img/${iconFile}`;

  return (
    <span
      className="footer-icon"
      style={{
        WebkitMaskImage: `url("${iconUrl}")`,
        maskImage: `url("${iconUrl}")`,
      }}
      aria-hidden="true"
    />
  );
}

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { openCvModal } = useCvModal();

  const handleFooterHomeClick = (e) => {
    if (isHomePath(location.pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    e.preventDefault();
    navigate('/home');
  };

  const handleFooterAboutClick = (e) => {
    e.preventDefault();
    navigate('/about_me');
  };

  const handleCaseStudiesClick = (e) => {
    if (isHomePath(location.pathname)) {
      e.preventDefault();
      scrollToCaseStudiesSection('smooth');
      window.history.replaceState(
        null,
        '',
        `${location.pathname}${location.search}#case-studies`,
      );
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
      <div className="footer-item footer-item-left">
        <p className="footer-heading">David Hervé</p>
        <p>Senior Product Designer (UX/UI)</p>
        <p className="footer-tags">SaaS • Smart Home • Digital Health</p>
        <div className="footer-location">
          <img
            src={`${publicUrl}/img/Icon-pin.svg`}
            alt=""
            aria-hidden="true"
            className="footer-location-icon"
          />
          <span>Based in Zurich, Switzerland</span>
        </div>
      </div>

      <div className="footer-item footer-item-center">
        <p className="footer-heading">Get in Touch</p>

        <button
          type="button"
          className="footer-connect-link footer-link footer-cv-trigger"
          onClick={openCvModal}
        >
          <FooterIcon iconFile="download.svg" />
          Download CV
        </button>

        <a
          href="https://www.linkedin.com/in/davidh4/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-connect-link footer-link"
          onClick={() => trackEvent('Open LinkedIn')}
        >
          <FooterIcon iconFile="logo_in.svg" />
          LinkedIn
        </a>

        <a
          href={CONTACT_MAILTO}
          className="footer-connect-link footer-link"
          data-umami-event="Contact Email"
        >
          <FooterIcon iconFile="email.svg" />
          {CONTACT_EMAIL}
        </a>

        <a href="tel:+41763205555" className="footer-connect-link footer-link">
          <FooterIcon iconFile="telephon.svg" />
          +41 76 320 55 55
        </a>
      </div>

      <div className="footer-item footer-item-menu">
        <p className="footer-heading">Menu</p>
        <Link
          to="/home"
          className="footer-connect-link footer-menu-link footer-link"
          onClick={handleFooterHomeClick}
        >
          <FooterIcon iconFile="house-icon 1.svg" />
          Home
        </Link>
        <Link
          to="/home#case-studies"
          className="footer-connect-link footer-menu-link footer-link"
          onClick={handleCaseStudiesClick}
        >
          <FooterIcon iconFile="folder-open.svg" />
          Case Studies
        </Link>
        <Link
          to="/about_me"
          className="footer-connect-link footer-menu-link footer-link"
          onClick={handleFooterAboutClick}
        >
          <FooterIcon iconFile="user-icon.svg" />
          About Me
        </Link>
        <a
          href={CONTACT_MAILTO}
          className="footer-connect-link footer-menu-link footer-link"
          data-umami-event="Contact Email"
        >
          <FooterIcon iconFile="handshake-icon.svg" />
          Contact
        </a>
      </div>

      <p className="footer-bottom">© 2026 David Hervé · Senior Product Designer (UX/UI)</p>
      </div>
    </footer>
  );
}
