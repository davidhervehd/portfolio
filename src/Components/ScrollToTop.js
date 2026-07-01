import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const shouldScrollToCaseStudies = (location) => (
  location.hash === '#case-studies' || location.state?.scrollTo === 'case-studies'
);

export default function ScrollToTop() {
  const location = useLocation();
  const prevPathnameRef = useRef(null);

  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== null
      && prevPathnameRef.current !== location.pathname;
    prevPathnameRef.current = location.pathname;

    if (shouldScrollToCaseStudies(location)) {
      return undefined;
    }

    // Route changes scroll after the exit animation (App.js onExitComplete)
    // so the outgoing page is not snapped to the top while still visible.
    if (pathnameChanged) {
      return undefined;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    return undefined;
  }, [location.pathname, location.hash, location.state]);

  return null;
}

export { shouldScrollToCaseStudies };
