import React from 'react';
import Footer from '../Components/Footer'; // Import the Footer component
import Herosection_about from '../Components/Herosection_about'; // Import the Herosection_about component
import AboutTestimonials from '../Components/AboutTestimonials';
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
            <h2>Designing with Passion and Purpose</h2>
            <p>
            I’m David Hervé, a dedicated Senior UX/UI and Product Designer with a passion for creating compelling digital experiences. With extensive experience in user-centered design, I specialize in developing seamless, intuitive interfaces that not only engage and delight users but also contribute to business growth. My goal is to bridge the gap between user needs and business objectives, delivering solutions that are both visually stunning and highly functional.
            </p>
            {/* Add more text content as needed */}
          </div>
        </div>
      </section>

      {/* Quotation_2 */}
      <div className="quotation-box block">
        <hr className="quotation-line"/>
        <div className="quotation">
          <div className="quotation-mark-container top-container">
            <img src={`${process.env.PUBLIC_URL}/img/quot_left_about.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
          </div>
          <div className="quotation-text">
            <em>A glimpse into my last role:<br /> 
            Discover the essence of my work through <br />
            a sample of my latest work certificate. 
            </em>
          </div>
          <div className="quotation-mark-container bottom-container">
            <img src={`${process.env.PUBLIC_URL}/img/quote_right_about.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
          </div>
        </div>
        <hr className="quotation-line"/>
      </div>

      {/* Sample of last work certificate */}
      <div className="additional-text-box block">
        <p className="title">. Sample of my last work certificate.</p>
        <p>Digital Strom offers an award-winning smart home technology for every home. The company, headquartered in Zurich-Schlieren (Switzerland), distributes its products and services in Germany, Austria, Switzerland, the Netherlands, Belgium, as well as various other European and non-European countries.</p>
        <p>In his role, <strong>David Herve has demonstrated extensive expertise</strong> in managing various user processes and seamlessly collaborating with B2B partners to ensure system installations, commissioning, and continuous support for end users. He has proven abilities in conducting comprehensive user research, enabling him to refine designs based on user needs.</p>
        <p>As a <strong>driving force in conceptualization and daily decision-making</strong>, Mr. David Herve maximizes product value within defined frameworks. Known for his effective verbal and visual communication, he works seamlessly with interdisciplinary R&D teams, navigating diverse backgrounds and nationalities. His strong interest and focus on Human-Computer Interaction (HCI) and smart home/building automation systems further contribute to his success in delivering innovative and user-centered designs.</p>
        <p>Overall, David's role at Digital Strom has significantly contributed to <strong>designing superior user interfaces and experiences</strong> for connected systems, perfectly aligning with the company's vision and objectives.</p>
        <p><em>Full version of work certificate available upon request.</em></p>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* UX Design Skills */}
      <div className="additional-text-box block">
        <p className="title">. UX Design Skills</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/UX_skills.png`} alt="Left Quote"/>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* Software Skills */}
      <div className="additional-text-box block">
        <p className="title">. Software Skills</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/Software_skills.png`} alt="Left Quote"/>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* Testimonial Section */}
      <AboutTestimonials />

      {/* Hobbies */}
      <div className="additional-text-box block">
        <p className="title">. Hobbies</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/hobbies.png`} alt="Left Quote"/>
      </div>

      <div className="white-space"></div>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}

