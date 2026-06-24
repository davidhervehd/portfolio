import React from 'react';
import Footer from '../Components/Footer';
import BackButton from '../Components/BackButton';
import '../Styles_css/vertriebsportal.css';

export default function Vertriebsportal() {
  return (
    <div className="main-content case-study-page">
      <header>
        <img
          src={`${process.env.PUBLIC_URL}/img/visualcase_quatico.jpg`}
          alt="Vertriebsportal case study hero"
          className="header-image"
        />
      </header>
      <div className="content">
        <div className="info-box-vp">
          <p className="titleboxinfo-vp">Transforming complex services into scalable digital offerings</p>
          <p className="textboxinfo-vp">
            Vertriebsportal is a CPQ SaaS platform designed to help service providers structure, sell and manage complex services online.
          </p>
          <p className="textboxinfo-vp">
            The challenge was not building the underlying CPQ architecture, but designing an experience that allows users to create, publish and sell services without understanding the complexity behind the system.
          </p>
          <p className="textboxinfo-vp">
            My role focused on designing the abstraction layers that bridge user intent and system architecture through AI-assisted creation flows and visual building blocks.
          </p>
        </div>

        <div className="role-analysis-box-vp">
          <div className="role-content">
            <div className="role-title">
              <span className="bold-text">My role</span>
            </div>
            <div className="role-description">
              My role focused on designing intuitive service creation experiences that bridge user intent and complex CPQ architecture through AI-assisted workflows and visual building blocks.
            </div>
            <div className="role-columns">
              <div className="role-column">
                <div className="role-column-title">Research</div>
                <div className="role-column-text">- Stakeholder workshops</div>
                <div className="role-column-text">- Product definition</div>
                <div className="role-column-text">- Service modeling</div>
                <div className="role-column-text">- User needs analysis</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Deliverable</div>
                <div className="role-column-text">- Service Library</div>
                <div className="role-column-text">- AI-assisted creation flow</div>
                <div className="role-column-text">- Visual Service Builder</div>
                <div className="role-column-text">- Pricing configuration</div>
                <div className="role-column-text">- Offer management</div>
              </div>
              <div className="role-column">
                <div className="role-column-title">Outcomes</div>
                <div className="role-column-text">- Reduced product complexity</div>
                <div className="role-column-text">- Multiple service creation paths</div>
                <div className="role-column-text">- Scalable service definitions</div>
                <div className="role-column-text">- Foundation for self-service sales</div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-space"></div>
      </div>

      <BackButton />
      <Footer />
    </div>
  );
}
