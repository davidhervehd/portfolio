import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles_css/Nav.css';
import '../Styles_css/NavUnderline.css';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', to: '/home' },
  { key: 'case-studies', label: 'Case Studies', to: '/home#case-studies', hash: 'case-studies' },
  { key: 'about', label: 'About', to: '/about_me' },
  { key: 'contact', label: 'Contact', to: '/contact' },
];

function getActiveKey(pathname, hash) {
  if (pathname === '/contact') return 'contact';
  if (pathname === '/about_me') return 'about';
  if (['/vertriebsportal', '/digital_strom', '/esmart', '/pet_health_data'].includes(pathname)) return 'case-studies';
  if (pathname === '/home' && hash === '#case-studies') return 'case-studies';
  if (pathname === '/home') return 'home';
  return 'home';
}

export default function Navbar() {
  const location = useLocation();
  const navLinksRef = useRef(null);
  const linkRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const activeKey = getActiveKey(location.pathname, location.hash);

  const updateUnderline = (key) => {
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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleCaseStudiesClick = (e) => {
    if (location.pathname === '/home') {
      e.preventDefault();
      document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `${location.pathname}#case-studies`);
    }
    updateUnderline('case-studies');
  };

  const handleLinkClick = (item) => {
    updateUnderline(item.key);
  };

  return (
    <nav className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
      <Link to="/home" className="site-title">
        <span className="site-title-name">David Hervé</span>
        <span className="site-title-role">Senior Product Designer (UX/UI)</span>
      </Link>
      <div className="nav-links" ref={navLinksRef}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                ref={(el) => { linkRefs.current[item.key] = el; }}
                to={item.to}
                className={`nav-link ${activeKey === item.key ? 'active' : ''}`}
                onClick={(e) => {
                  if (item.hash) handleCaseStudiesClick(e);
                  else handleLinkClick(item);
                }}
              >
                {item.label}
              </Link>
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
