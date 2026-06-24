import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTransform, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Styles_css/HomeContent.css';

export default function Homecontent({ blockNumber, scrollY }) {
  const navigate = useNavigate();
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Hooks for opacity and scale based on scroll position
  const opacity = useTransform(
    scrollY,
    [(blockNumber - 0.5) * 400, (blockNumber + 0.5) * 400],
    [0, 1]
  );

  const scale = useTransform(
    scrollY,
    [(blockNumber - 0.5) * 400, (blockNumber + 0.5) * 400],
    [0.03, 1]
  );

  // Content configuration based on block number
  let topRightText, largeText, subTitle, linkTo, imageSrc, isComingSoon;
  switch (blockNumber) {
    case 1:
      topRightText = 'Vertriebsportal';
      largeText = '.01';
      subTitle = 'Simplifying complex sales processes';
      linkTo = '/vertriebsportal';
      imageSrc = '/img/visualcase_quatico.jpg';
      isComingSoon = false;
      break;
    case 2:
      topRightText = 'Digital Strom';
      largeText = '.02';
      subTitle = 'Making smart home control intuitive';
      linkTo = '/digital_strom';
      imageSrc = '/img/visualcase1.jpg';
      isComingSoon = false;
      break;
    case 3:
      topRightText = 'eSmart';
      largeText = '.03';
      subTitle = 'Make the energy tangible';
      linkTo = '/esmart';
      imageSrc = '/img/visualcase2.jpg';
      isComingSoon = false;
      break;
    case 4:
      topRightText = 'Pet Health Data';
      largeText = '.04';
      subTitle = 'Smarter pet health experience';
      linkTo = '/pet_health_data';
      imageSrc = '/img/visualcase3.jpg';
      isComingSoon = false;
      break;
    case 5:
      topRightText = 'Meine Impfungen';
      largeText = '.05';
      subTitle = 'Simplifying vaccination management';
      linkTo = '/meine_impfungen';
      imageSrc = '/img/visualcase4.jpg';
      isComingSoon = true; // Mark this block as "Coming Soon"
      break;
    default:
      topRightText = '';
      largeText = '';
      subTitle = '';
      linkTo = '/';
      imageSrc = '';
      isComingSoon = false;
  }

  const handleCardClick = () => {
    if (!isComingSoon) {
      navigate(linkTo);
    }
  };

  return (
    <motion.div
      className={`content-block${isHovered ? ' is-hovered' : ''}${isComingSoon ? ' is-coming-soon' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
  scrollY: PropTypes.object.isRequired, // Assuming this is the scroll position from framer-motion
};
