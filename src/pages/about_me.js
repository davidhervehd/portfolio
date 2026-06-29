import React from 'react';
import Footer from '../Components/Footer'; // Import the Footer component
import Herosection_about from '../Components/Herosection_about'; // Import the Herosection_about component
import AboutTestimonials from '../Components/AboutTestimonials';
import AboutSkills from '../Components/AboutSkills';
import AboutBeyondDesign from '../Components/AboutBeyondDesign';
import '../Styles_css/aboutme.css';

export default function AboutMe() {
  return (
    <div className="about-page">
      {/* Hero section for the About Me page */}
      <Herosection_about />
      {/* New Block Section */}
      <section className="about-block block">
        <div className="about-block-content">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/img/pic_HD.png`} alt="About Me" className="about-portrait" />
          </div>
          <div className="about-text">
            <h2>Designing with Purpose</h2>
            <p>
              I&apos;m David Hervé, a <strong>Senior UX/UI and Product Designer</strong> with over 30 years of experience solving complex problems through simple, intuitive digital experiences.
            </p>
            <p>
              After starting my career in digital communication, I transitioned into UX/UI and Product Design, helping organizations <strong>transform complex business challenges into user-centered products</strong> across healthcare, smart home and SaaS.
            </p>
            <p>
              To me, great design isn&apos;t about making interfaces look better—it&apos;s about making complexity disappear.
            </p>
          </div>
        </div>
      </section>

      <hr className="about-section-separator" aria-hidden="true" />

      {/* Core Expertise & Software Skills */}
      <AboutSkills />

      <hr className="about-section-separator about-section-separator--before-testimonials" aria-hidden="true" />
      <AboutTestimonials />

      <hr className="about-section-separator" aria-hidden="true" />

      {/* Beyond Design */}
      <AboutBeyondDesign />

      <div className="white-space"></div>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}

