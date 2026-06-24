import React, { useRef, useEffect } from 'react';
import Herosection from '../Components/Herosection';
import Homecontent from '../Components/Homecontent';
import Footer from '../Components/Footer'; // Import the Footer component
import { useScroll } from 'framer-motion';

export default function Home() {
  const targetRef = useRef(null);
  const firstBlockRef = useRef(null); // Add a ref for the first content block
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
    <div>
      <section className="hero hero-shell">
        <div className="hero-content">
          <Herosection scrollToRef={firstBlockRef} /> {/* Pass the ref as a prop */}
        </div>
      </section>

      <div ref={targetRef} id="case-studies" className="home-content">
        {/* Animated Div for Block 1 */}
        <div ref={firstBlockRef}> {/* Attach the ref to the first block */}
          <Homecontent blockNumber={1} scrollY={scrollY} />
        </div>

        {/* Animated Div for Block 2 */}
        <Homecontent blockNumber={2} scrollY={scrollY} />

        {/* Animated Div for Block 3 */}
        <Homecontent blockNumber={3} scrollY={scrollY} />

        {/* Animated Div for Block 4 */}
        <Homecontent blockNumber={4} scrollY={scrollY} />

        {/* Animated Div for Block 5 */}
        <Homecontent blockNumber={5} scrollY={scrollY} />
      </div>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}
