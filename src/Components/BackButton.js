import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getActiveCaseStudyRoutes } from '../config/portfolioCaseStudies';
import '../Styles_css/BackButton.css';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(20); // Start with 20px offset from bottom

  const handleBackClick = () => {
    navigate('/home'); // Navigate to the Home page
  };

  const handleNextClick = () => {
    const currentPath = location.pathname;
    const routes = getActiveCaseStudyRoutes();

    const currentIndex = routes.indexOf(currentPath);
    const nextRoute = currentIndex === -1 || currentIndex === routes.length - 1
      ? routes[0] // Go back to the first route if we're at the end
      : routes[currentIndex + 1]; // Otherwise, go to the next route

    navigate(nextRoute);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const threshold = 200; // Adjust this value to set when the button should appear

    // Calculate the distance from the bottom of the page
    const distanceFromBottom = documentHeight - scrollPosition - windowHeight;

    if (scrollPosition > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Adjust the bottom offset if the button is about to overlap with the footer
    if (distanceFromBottom < footerHeight + 20) {
      setBottomOffset(footerHeight + 20 - distanceFromBottom);
    } else {
      setBottomOffset(20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className={`back-button ${isVisible ? 'visible' : ''}`}
        onClick={handleBackClick}
        style={{ bottom: bottomOffset }} // Dynamically adjust the bottom offset
      >
        Home
      </button>

      <button
        className={`next-button ${isVisible ? 'visible' : ''}`}
        onClick={handleNextClick}
        style={{ bottom: bottomOffset, right: '20px' }} // Dynamically adjust the bottom offset
      >
        Next Use Case
      </button>
    </>
  );
}

export default BackButton; // Keep the original export name
