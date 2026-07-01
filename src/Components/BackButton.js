import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getAdjacentCaseStudyRoutes,
  getCaseStudyTrackingName,
} from '../config/portfolioCaseStudies';
import { trackNextUseCase, trackPreviousUseCase } from '../utils/analytics';
import '../Styles_css/BackButton.css';

const SCROLL_DEBOUNCE_MS = 150;
const VISIBLE_DURATION_MS = 2500;

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(20);
  const debounceTimerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const isHoveringNavRef = useRef(false);
  const showFloatingNavRef = useRef(false);
  const navWrapperRef = useRef(null);

  const { previous: previousRoute, next: nextRoute } = getAdjacentCaseStudyRoutes(location.pathname);
  const previousLabel = getCaseStudyTrackingName(previousRoute);
  const nextLabel = getCaseStudyTrackingName(nextRoute);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const clearTimers = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    clearHideTimer();
  }, [clearHideTimer]);

  const setFloatingNavVisible = useCallback((visible) => {
    if (showFloatingNavRef.current === visible) {
      return;
    }

    showFloatingNavRef.current = visible;
    setShowFloatingNav(visible);
  }, []);

  const scheduleHide = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      if (isHoveringNavRef.current || navWrapperRef.current?.matches(':hover')) {
        isHoveringNavRef.current = true;
        setIsNavHovered(true);
        return;
      }

      setIsNavHovered(false);
      setFloatingNavVisible(false);
    }, VISIBLE_DURATION_MS);
  }, [clearHideTimer, setFloatingNavVisible]);

  const handleNavMouseEnter = useCallback(() => {
    isHoveringNavRef.current = true;
    setIsNavHovered(true);
    clearHideTimer();
  }, [clearHideTimer]);

  const handleNavMouseLeave = useCallback(() => {
    isHoveringNavRef.current = false;
    setIsNavHovered(false);

    if (showFloatingNavRef.current) {
      scheduleHide();
    }
  }, [scheduleHide]);

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

  const handlePreviousClick = () => {
    if (previousLabel) {
      trackPreviousUseCase(previousLabel);
    }
    navigate(previousRoute);
  };

  const handleNextClick = () => {
    if (nextLabel) {
      trackNextUseCase(nextLabel);
    }
    navigate(nextRoute);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateBottomOffset();
      isHoveringNavRef.current = false;
      setIsNavHovered(false);
      setFloatingNavVisible(false);
      clearTimers();

      debounceTimerRef.current = setTimeout(() => {
        setFloatingNavVisible(true);

        requestAnimationFrame(() => {
          if (navWrapperRef.current?.matches(':hover')) {
            isHoveringNavRef.current = true;
            setIsNavHovered(true);
            return;
          }

          scheduleHide();
        });
      }, SCROLL_DEBOUNCE_MS);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimers();
    };
  }, [clearTimers, scheduleHide, setFloatingNavVisible, updateBottomOffset]);

  const wrapperClassName = [
    'floating-case-nav',
    showFloatingNav ? 'visible' : '',
    isNavHovered ? 'is-hovered' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={navWrapperRef}
      className={wrapperClassName}
      style={{ bottom: bottomOffset }}
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
      aria-hidden={!showFloatingNav}
    >
      <button
        type="button"
        className="back-button"
        onClick={handlePreviousClick}
        tabIndex={showFloatingNav ? 0 : -1}
        aria-label={previousLabel ? `Previous: ${previousLabel}` : 'Previous'}
      >
        Previous
        {previousLabel ? (
          <span className="floating-nav-tooltip" aria-hidden="true">
            {previousLabel}
          </span>
        ) : null}
      </button>

      <button
        type="button"
        className="next-button"
        onClick={handleNextClick}
        tabIndex={showFloatingNav ? 0 : -1}
        aria-label={nextLabel ? `Next: ${nextLabel}` : 'Next'}
      >
        Next Use Case
        {nextLabel ? (
          <span className="floating-nav-tooltip" aria-hidden="true">
            {nextLabel}
          </span>
        ) : null}
      </button>
    </div>
  );
}

export default BackButton;
