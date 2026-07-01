import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import BackButton from './Components/BackButton';
import { isActiveCaseStudyRoute } from './config/portfolioCaseStudies';
import { CvModalProvider } from './context/CvModalContext';

import Home from './pages/home';
import AboutMe from './pages/about_me';
import DigitalStrom from './pages/digitalStrom';
import Vertriebsportal from './pages/vertriebsportal';
import ESmart from './pages/eSmart';
import PetHealthData from './pages/petHealthData';
import Contact from './pages/contact';

import './Styles_css/App.css';
import './Styles_css/caseStudyIntro.css';
import './Styles_css/caseStudyQuotes.css';
import './Styles_css/caseStudyMobile.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  const location = useLocation();

  return (
    <CvModalProvider>
    <div className="essai">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<PageFade><Home /></PageFade>} />
          <Route path="/about_me" element={<PageFade><AboutMe /></PageFade>} />
          <Route path="/vertriebsportal" element={<PageFade><Vertriebsportal /></PageFade>} />
          <Route path="/digital_strom" element={<PageFade><DigitalStrom /></PageFade>} />
          <Route path="/esmart" element={<PageFade><ESmart /></PageFade>} />
          <Route path="/pet_health_data" element={<PageFade><PetHealthData /></PageFade>} />
          <Route path="/contact" element={<PageFade><Contact /></PageFade>} />
        </Routes>
      </AnimatePresence>
      {isActiveCaseStudyRoute(location.pathname) && <BackButton />}
    </div>
    </CvModalProvider>
  );
}

const PAGE_FADE_EASING = 'easeInOut';

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.18, ease: PAGE_FADE_EASING } }}
    transition={{ duration: 0.22, ease: PAGE_FADE_EASING }}
  >
    {children}
  </motion.div>
);

export default App;
