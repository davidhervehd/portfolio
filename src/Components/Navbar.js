import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isActiveCaseStudyRoute } from '../config/portfolioCaseStudies';
import { CONTACT_MAILTO } from '../config/contactMailto';
import { trackEvent } from '../utils/analytics';
import '../Styles_css/Nav.css';
import '../Styles_css/NavUnderline.css';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', to: '/home' },
  { key: 'case-studies', label: 'Case Studies', to: '/home#case-studies', hash: 'case-studies' },
  { key: 'about', label: 'About Me', to: '/about_me' },
  { key: 'contact', label: 'Contact', href: CONTACT_MAILTO },
];

const MOBILE_BREAKPOINT = 768;
const MOBILE_TOP_SCROLL_THRESHOLD = 10;
const HOME_TOP_SCROLL_THRESHOLD = 200;
const HOME_SECTION_TRIGGER_PX = 100;

function normalizePathname(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isHomePathname(pathname) {
  const normalized = normalizePathname(pathname);
  return normalized === '/' || normalized === '/home' || normalized === '/portfolio';
}

function isOnHomePage(pathname) {
  if (isHomePathname(pathname)) return true;
  if (
    pathname === '/about_me'
    || pathname === '/contact'
    || isActiveCaseStudyRoute(pathname)
  ) {
    return false;
  }
  return typeof document !== 'undefined' && !!document.getElementById('home-hero');
}

function getHomeScrollSection() {
  const caseStudies = document.getElementById('case-studies');
  if (!caseStudies) return null;

  if (window.scrollY < HOME_TOP_SCROLL_THRESHOLD) {
    return 'home';
  }

  const caseTop = caseStudies.getBoundingClientRect().top;
  return caseTop <= HOME_SECTION_TRIGGER_PX ? 'case-studies' : 'home';
}

function clearCaseStudiesHash() {
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}`,
  );
}

function setCaseStudiesHash() {
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}#case-studies`,
  );
}

function getActiveKey(pathname, hash) {
  if (pathname === '/about_me') return 'about';
  if (isActiveCaseStudyRoute(pathname)) return 'case-studies';
  if (isHomePathname(pathname) && hash === '#case-studies') return 'case-studies';
  if (isHomePathname(pathname)) return 'home';
  return 'home';
}

export default function Navbar() {
  const location = useLocation();
  const navLinksRef = useRef(null);
  const linkRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeScrollSection, setHomeScrollSection] = useState(null);

  const routeActiveKey = getActiveKey(location.pathname, location.hash);
  const onHomePage = isOnHomePage(location.pathname);
  const activeKey = onHomePage && homeScrollSection
    ? homeScrollSection
    : routeActiveKey;

  const updateUnderline = (key) => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) return;

    const linkEl = linkRefs.current[key];
    const containerEl = navLinksRef.current;
    if (!linkEl || !containerEl) return;

    const containerRect = containerEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setUnderlineStyle({
      width: linkRect.width,
      left: linkRect.left - containerRect.left,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    updateUnderline(activeKey);
  }, [activeKey]);

  useEffect(() => {
    const handleResize = () => updateUnderline(activeKey);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeKey]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useLayoutEffect(() => {
    if (!isOnHomePage(location.pathname)) {
      setHomeScrollSection(null);
      return;
    }

    const nextSection = getHomeScrollSection();
    if (nextSection) {
      setHomeScrollSection(nextSection);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOnHomePage(location.pathname)) {
      setHomeScrollSection(null);
      return undefined;
    }

    let cancelled = false;
    let rafId;
    let observer;
    let syncHomeSection;

    const attachScrollSpy = () => {
      const hero = document.getElementById('home-hero');
      const caseStudies = document.getElementById('case-studies');

      if (!hero || !caseStudies) {
        if (!cancelled) {
          rafId = window.requestAnimationFrame(attachScrollSpy);
        }
        return;
      }

      syncHomeSection = () => {
        if (!isOnHomePage(location.pathname)) return;

        const nextSection = getHomeScrollSection();
        if (!nextSection) return;

        setHomeScrollSection((current) => (current === nextSection ? current : nextSection));

        if (nextSection === 'home' && window.location.hash === '#case-studies') {
          clearCaseStudiesHash();
        }
      };

      syncHomeSection();

      observer = new IntersectionObserver(
        syncHomeSection,
        {
          root: null,
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        },
      );

      observer.observe(hero);
      observer.observe(caseStudies);
      window.addEventListener('scroll', syncHomeSection, { passive: true });
    };

    attachScrollSpy();

    return () => {
      cancelled = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      observer?.disconnect();
      if (syncHomeSection) {
        window.removeEventListener('scroll', syncHomeSection);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

      if (isMobile && currentScrollY <= MOBILE_TOP_SCROLL_THRESHOLD) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleHomeClick = (e) => {
    if (isOnHomePage(location.pathname)) {
      e.preventDefault();
      if (location.hash) {
        clearCaseStudiesHash();
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    setHomeScrollSection('home');
    updateUnderline('home');
    setMobileMenuOpen(false);
  };

  const handleCaseStudiesClick = (e) => {
    if (isOnHomePage(location.pathname)) {
      e.preventDefault();
      document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
      setCaseStudiesHash();
    }
    setHomeScrollSection('case-studies');
    updateUnderline('case-studies');
    setMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    updateUnderline('about');
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    trackEvent('Contact Email');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  return (
    <nav className={`nav ${isVisible ? 'visible' : 'hidden'}${mobileMenuOpen ? ' nav-mobile-open' : ''}`}>
      <Link to="/home" className="site-title" onClick={() => setMobileMenuOpen(false)}>
        <span className="site-title-name">David Hervé</span>
        <span className="site-title-role">Senior Product Designer (UX/UI)</span>
      </Link>

      <button
        type="button"
        className={`nav-hamburger${mobileMenuOpen ? ' nav-hamburger-open' : ''}`}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-links${mobileMenuOpen ? ' nav-links-open' : ''}`}
        ref={navLinksRef}
        aria-hidden={!mobileMenuOpen}
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              {item.href ? (
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={handleContactClick}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  ref={(el) => { linkRefs.current[item.key] = el; }}
                  to={item.to}
                  className={`nav-link ${activeKey === item.key ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.key === 'home') handleHomeClick(e);
                    else if (item.hash) handleCaseStudiesClick(e);
                    else if (item.key === 'about') handleAboutClick();
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div
          className="nav-underline"
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
            opacity: underlineStyle.opacity,
          }}
        />
      </div>
    </nav>
  );
}
