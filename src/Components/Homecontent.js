import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTransform, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getCaseStudyTrackingName } from '../config/portfolioCaseStudies';
import { trackCaseStudyClick } from '../utils/analytics';
import '../Styles_css/HomeContent.css';

export default function Homecontent({ blockNumber, scrollY, displayIndex }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateCanHover = () => setCanHover(mediaQuery.matches);

    updateCanHover();
    mediaQuery.addEventListener('change', updateCanHover);
    return () => mediaQuery.removeEventListener('change', updateCanHover);
  }, []);

  // Hooks for opacity and scale based on scroll position
  const scrollIndex = displayIndex ?? blockNumber;

  const opacity = useTransform(
    scrollY,
    [(scrollIndex - 0.5) * 400, (scrollIndex + 0.5) * 400],
    [0, 1]
  );

  const scale = useTransform(
    scrollY,
    [(scrollIndex - 0.5) * 400, (scrollIndex + 0.5) * 400],
    [0.03, 1]
  );

  // Content configuration based on block number
  let topRightText, category, largeText, subTitle, linkTo, imageSrc, isComingSoon;
  switch (blockNumber) {
    case 1:
      topRightText = 'Vertriebsportal';
      category = '';
      largeText = displayIndex != null ? `.0${displayIndex}` : '.01';
      subTitle = 'Simplifying complex sales processes';
      linkTo = '/vertriebsportal';
      imageSrc = '/img/visualcase_quatico.jpg';
      isComingSoon = false;
      break;
    case 2:
      topRightText = 'Smart Home';
      category = '';
      largeText = displayIndex != null ? `.0${displayIndex}` : '.02';
      subTitle = 'Making smart home control intuitive';
      linkTo = '/digital_strom';
      imageSrc = '/img/visualcase1.jpg';
      isComingSoon = false;
      break;
    case 3:
      topRightText = 'eSmart';
      category = '';
      largeText = displayIndex != null ? `.0${displayIndex}` : '.03';
      subTitle = 'Make the energy tangible';
      linkTo = '/esmart';
      imageSrc = '/img/visualcase2.jpg';
      isComingSoon = false;
      break;
    case 4:
      topRightText = 'Pet Health Data';
      category = '';
      largeText = displayIndex != null ? `.0${displayIndex}` : '.04';
      subTitle = 'Smarter pet health experiences';
      linkTo = '/pet_health_data';
      imageSrc = '/img/visualcase3.jpg';
      isComingSoon = false;
      break;
    case 5:
      // Temporarily hidden from portfolio — re-enable in portfolioCaseStudies.js
      topRightText = 'Meine Impfungen';
      category = '';
      largeText = displayIndex != null ? `.0${displayIndex}` : '.05';
      subTitle = 'Simplifying vaccination management';
      linkTo = '/meine_impfungen';
      imageSrc = '/img/visualcase4.jpg';
      isComingSoon = true;
      break;
    default:
      topRightText = '';
      category = '';
      largeText = '';
      subTitle = '';
      linkTo = '/';
      imageSrc = '';
      isComingSoon = false;
  }

  const handleCardClick = () => {
    if (!isComingSoon) {
      trackCaseStudyClick(getCaseStudyTrackingName(linkTo));
      navigate(linkTo);
    }
  };

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (canHover) setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`content-block${isHovered ? ' is-hovered' : ''}${isComingSoon ? ' is-coming-soon' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleCardClick}
      style={{
        opacity,
        scale,
        transition: { ease: [0.4, 0, 0.6, 1] },
        position: 'relative',
      }}
    >
      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="coming-soon-overlay">
          <p>Coming Soon</p>
        </div>
      )}

      {/* Image Container */}
      <div className="block-image-container">
        <img
          src={`${process.env.PUBLIC_URL}${imageSrc}`}
          alt={`Block ${blockNumber}`}
          className={isHovered ? 'hovered' : ''}
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-and-button">
        <div className="top-right-text">
          <p>{topRightText}</p>
          {category ? <p className="card-category">{category}</p> : null}
          <p className="sub-title">{subTitle}</p>
        </div>
        <div className="bottom-left-content">
          <div className="left-content">
            <p className="large-text">{largeText}</p>
          </div>
          <div className="button-container">
            {isComingSoon ? (
              <button
                className="read-more-button"
                disabled
              >
                Read More
              </button>
            ) : (
              <span className="read-more-button">
                Read More
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Homecontent.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  scrollY: PropTypes.object.isRequired,
  displayIndex: PropTypes.number,
};
