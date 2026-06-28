import React, { useRef, useEffect } from 'react';
import Herosection from '../Components/Herosection';
import Homecontent from '../Components/Homecontent';
import Footer from '../Components/Footer';
import { useScroll } from 'framer-motion';
import { getActiveCaseStudies } from '../config/portfolioCaseStudies';

export default function Home() {
  const targetRef = useRef(null);
  const firstBlockRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: [0, 0],
  });

  useEffect(() => {
    if (window.location.hash === '#case-studies') {
      const timer = setTimeout(() => {
        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="home-page">
      <section className="hero hero-shell">
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
