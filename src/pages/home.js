import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Herosection from '../Components/Herosection';
import Homecontent from '../Components/Homecontent';
import Footer from '../Components/Footer';
import { useScroll } from 'framer-motion';
import { getActiveCaseStudies } from '../config/portfolioCaseStudies';
import { shouldScrollToCaseStudies } from '../Components/ScrollToTop';

export default function Home() {
  const location = useLocation();
  const targetRef = useRef(null);
  const firstBlockRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: [0, 0],
  });

  useEffect(() => {
    if (!shouldScrollToCaseStudies(location)) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="home-page">
      <section id="home-hero" className="hero hero-shell">
        <div className="hero-content">
          <Herosection scrollToRef={firstBlockRef} />
        </div>
      </section>

      <div
        ref={targetRef}
        id="case-studies"
        className="home-content"
        style={{ '--case-study-count': getActiveCaseStudies().length }}
      >
        {getActiveCaseStudies().map((study, index) => (
          <div
            key={study.key}
            ref={index === 0 ? firstBlockRef : undefined}
          >
            <Homecontent
              blockNumber={study.homeBlock}
              scrollY={scrollY}
              displayIndex={index + 1}
            />
          </div>
        ))}

        {/*
          Temporarily hidden — re-enable in src/config/portfolioCaseStudies.js
          <Homecontent blockNumber={5} scrollY={scrollY} displayIndex={5} />  Meine Impfungen
        */}
      </div>

      <Footer />
    </div>
  );
}
