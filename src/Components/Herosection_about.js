import React from 'react';

export default function Herosection_about() {
  return (
    <>
      {/* Existing Hero Section */}
      <section className="hero_about">
        <div className="hero-content_about">
          <div className="hero-text_about">
            <div className="welcome-text_about">
              <h2 className="welcome-text-h2_about">Nice to meet you!</h2>
            </div>
            <h1 className='title_about'>So, you wanna learn more about me?</h1>
            <p className="subtext">Interested in learning more about me?</p>
            <p className="subtext">Just scroll down the page or download my CV. Thanks!</p>
            
            {/* Updated link to download the CV */}
            <a 
              href={`${process.env.PUBLIC_URL}/CV_Hervé_David_2024_EN.pdf`} 
              className="btn-about-me_2" 
              download
            >
              Download my CV here
            </a>
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
