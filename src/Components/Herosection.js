import React from 'react';

export default function Herosection({ scrollToRef }) { // Accept the ref as a prop
  const handleScrollToPortfolio = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section className="hero">
    <div className="hero-content">
          <div className="hero-text">
          <div className="welcome-text">
            <h2 className="welcome-text-h2">Product Design Portfolio</h2>
          </div>
        <h1>Transforming complexity into<br />intuitive digital products</h1>
          <p className="subtext">Designing digital experiences people understand,<br />trust and enjoy using.</p>
          <p className="subtext subtext-light">SaaS • Smart Home • Digital Health</p>
          <button onClick={handleScrollToPortfolio} className="btn-about-me">
            View Case Studies
          </button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/img/visuel_hero_header.png`} alt="Hero Header" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="image-container">
            <div className="additional-image">
              <img src={`${process.env.PUBLIC_URL}/img/Ball.png`} alt="Ball" />
            </div>
            <div className="shadow">
              <img src={`${process.env.PUBLIC_URL}/img/Ombre.png`} alt="Shadow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="wrapper">
        <button type="button" className="scroll_down" id="scroll_down"></button>
      </div>
    </section>
  );
}
