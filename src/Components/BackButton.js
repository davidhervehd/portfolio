import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getActiveCaseStudyRoutes } from '../config/portfolioCaseStudies';
import '../Styles_css/BackButton.css';

const SCROLL_DEBOUNCE_MS = 150;
const VISIBLE_DURATION_MS = 2500;

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(20);
  const debounceTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const updateBottomOffset = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footer = document.querySelector('footer');
    const footerHeight = footer?.offsetHeight ?? 0;
    const distanceFromBottom = documentHeight - scrollPosition - windowHeight;

    if (distanceFromBottom < footerHeight + 20) {
      setBottomOffset(footerHeight + 20 - distanceFromBottom);
    } else {
      setBottomOffset(20);
    }
  }, []);

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleNextClick = () => {
    const currentPath = location.pathname;
    const routes = getActiveCaseStudyRoutes();

    const currentIndex = routes.indexOf(currentPath);
    const nextRoute = currentIndex === -1 || currentIndex === routes.length - 1
      ? routes[0]
      : routes[currentIndex + 1];

    navigate(nextRoute);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateBottomOffset();
      setShowFloatingNav(false);
      clearTimers();

      debounceTimerRef.current = setTimeout(() => {
        setShowFloatingNav(true);
        hideTimerRef.current = setTimeout(() => {
          setShowFloatingNav(false);
        }, VISIBLE_DURATION_MS);
      }, SCROLL_DEBOUNCE_MS);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimers();
    };
  }, [clearTimers, updateBottomOffset]);

  return (
    <>
      <button
        type="button"
        className={`back-button${showFloatingNav ? ' visible' : ''}`}
        onClick={handleBackClick}
        style={{ bottom: bottomOffset }}
        aria-hidden={!showFloatingNav}
        tabIndex={showFloatingNav ? 0 : -1}
      >
        Home
      </button>

      <button
        type="button"
        className={`next-button${showFloatingNav ? ' visible' : ''}`}
        onClick={handleNextClick}
        style={{ bottom: bottomOffset, right: '20px' }}
        aria-hidden={!showFloatingNav}
        tabIndex={showFloatingNav ? 0 : -1}
      >
        Next Use Case
      </button>
    </>
  );
}

export default BackButton;
