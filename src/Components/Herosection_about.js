import React from 'react';
import { useCvModal } from '../context/CvModalContext';

export default function Herosection_about() {
  const { openCvModal } = useCvModal();

  return (
    <>
      {/* Existing Hero Section */}
      <section className="hero_about">
        <div className="hero-content_about">
          <div className="hero-text_about">
            <div className="welcome-text_about">
              <h2 className="welcome-text-h2_about">Nice to meet you :)</h2>
            </div>
            <h1 className="title_about">
              The designer
              <br />
              behind the products.
            </h1>
            <p className="subtext">
              Discover my background, experience and design philosophy. Or download my CV to learn more.
            </p>

            <button
              type="button"
              className="btn-about-me_2"
              onClick={openCvModal}
            >
              Download my CV
            </button>
          </div>
          
          <div className="hero-image-container_about">
            <div className="hero-image_about">
              <img src={`${process.env.PUBLIC_URL}/img/visual_about.png`} alt="About Hero Header" />
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="wrapper2">
          <button type="button" className="scroll_down" id="scroll_down"></button>
        </div>
      </section>

      
    </>
  );
}
