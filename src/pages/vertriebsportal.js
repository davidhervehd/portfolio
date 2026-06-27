import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Footer from '../Components/Footer';
import BackButton from '../Components/BackButton';
import '../Styles_css/vertriebsportal.css';

const ECOSYSTEM_CARDS = [
  {
    src: 'Card_Ecosystem_1.svg',
    alt: 'Product ecosystem overview showing how different user roles interact with the Vertriebsportal platform',
  },
  {
    src: 'Card_Ecosystem_2.svg',
    alt: 'Business administration workflow within the Vertriebsportal product ecosystem',
  },
  {
    src: 'Card_Ecosystem_3.svg',
    alt: 'AI-assisted service creation workflow within the Vertriebsportal product ecosystem',
  },
  {
    src: 'Card_Ecosystem_4.svg',
    alt: 'Advanced manual editing workflow within the Vertriebsportal product ecosystem',
  },
  {
    src: 'Card_Ecosystem_5.svg',
    alt: 'Connected ecosystem view showing how complementary workflows build on each other',
  },
];

const PROVIDER_SCREENSHOTS = [
  {
    src: 'Provider_01.png',
    alt: 'Provider creation flow — step 1 of 4',
  },
  {
    src: 'Provider_02.png',
    alt: 'Provider creation flow — step 2 of 4',
  },
  {
    src: 'Provider_03.png',
    alt: 'Provider creation flow — step 3 of 4',
  },
  {
    src: 'Provider_04.png',
    alt: 'Provider creation flow — step 4 of 4',
  },
];

const LIGHTBOX_TRANSITION_MS = 140;

const getWrappedLightboxIndex = (current, direction) => {
  const next = current + direction;
  if (next < 0) return PROVIDER_SCREENSHOTS.length - 1;
  if (next >= PROVIDER_SCREENSHOTS.length) return 0;
  return next;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Vertriebsportal() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [imageAnimClass, setImageAnimClass] = useState('vp-lightbox-image--visible');
  const lightboxAnimatingRef = useRef(false);

  const closeLightbox = useCallback(() => {
    lightboxAnimatingRef.current = false;
    setImageAnimClass('vp-lightbox-image--visible');
    setLightboxIndex(null);
  }, []);

  const openLightbox = useCallback((index) => {
    lightboxAnimatingRef.current = false;
    setImageAnimClass('vp-lightbox-image--visible');
    setLightboxIndex(index);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    if (lightboxAnimatingRef.current) return;

    if (prefersReducedMotion()) {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return getWrappedLightboxIndex(prev, direction);
      });
      return;
    }

    lightboxAnimatingRef.current = true;

    const exitClass = direction === 1
      ? 'vp-lightbox-image--exit-next'
      : 'vp-lightbox-image--exit-prev';
    const enterClass = direction === 1
      ? 'vp-lightbox-image--enter-next'
      : 'vp-lightbox-image--enter-prev';

    setImageAnimClass(exitClass);

    window.setTimeout(() => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return getWrappedLightboxIndex(prev, direction);
      });
      setImageAnimClass(enterClass);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImageAnimClass('vp-lightbox-image--visible');
          window.setTimeout(() => {
            lightboxAnimatingRef.current = false;
          }, LIGHTBOX_TRANSITION_MS);
        });
      });
    }, LIGHTBOX_TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (event.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  const lightboxPortal = lightboxIndex !== null
    ? createPortal(
      <div
        className="vp-lightbox-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Screenshot viewer"
        onClick={closeLightbox}
      >
        <p className="vp-lightbox-counter" aria-live="polite">
          {lightboxIndex + 1} / {PROVIDER_SCREENSHOTS.length}
        </p>
        <button
          type="button"
          className="vp-lightbox-close"
          onClick={closeLightbox}
          aria-label="Close screenshot viewer"
        >
          ×
        </button>
        <button
          type="button"
          className="vp-lightbox-nav vp-lightbox-prev"
          onClick={(event) => {
            event.stopPropagation();
            navigateLightbox(-1);
          }}
          aria-label="Previous screenshot"
        >
          ‹
        </button>
        <figure
          className="vp-lightbox-figure"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/${PROVIDER_SCREENSHOTS[lightboxIndex].src}`}
            alt={PROVIDER_SCREENSHOTS[lightboxIndex].alt}
            className={`vp-lightbox-image ${imageAnimClass}`}
          />
        </figure>
        <button
          type="button"
          className="vp-lightbox-nav vp-lightbox-next"
          onClick={(event) => {
            event.stopPropagation();
            navigateLightbox(1);
          }}
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>,
      document.body,
    )
    : null;

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

        <div className="quotation-box block">
          <hr className="quotation-line" />
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/quot_left_vp.svg`}
                alt=""
                aria-hidden="true"
                className="quotation-mark top-quotation"
              />
            </div>
            <div className="quotation-text">
              <em>
                The challenge wasn&apos;t building a CPQ platform.
                <br />
                It was making enterprise complexity
                <br />
                accessible to business users.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/quote_right_vp.svg`}
                alt=""
                aria-hidden="true"
                className="quotation-mark bottom-quotation"
              />
            </div>
          </div>
          <hr className="quotation-line" />
        </div>

        <div className="additional-text-box block">
          <p className="title">Understanding the Product Ecosystem</p>
          <p>
            The platform supports different user roles, each interacting with the system at a different level.
            Rather than exposing the same complexity to everyone, the experience adapts to each user&apos;s responsibilities.
            The project therefore focused on designing three complementary workflows:
          </p>
          <ul className="vp-workflow-list">
            <li>Business administration</li>
            <li>AI-assisted service creation</li>
            <li>Advanced manual editing</li>
          </ul>
          <p>
            Each workflow builds upon the previous one while hiding unnecessary technical complexity.
          </p>
        </div>

        <div className="ecosystem-cards-section block">
          <div className="ecosystem-cards-shell">
            <div className="ecosystem-cards" role="list" aria-label="Product ecosystem workflow cards">
              {ECOSYSTEM_CARDS.map((card) => (
                <div className="ecosystem-card" role="listitem" key={card.src}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${card.src}`}
                    alt={card.alt}
                    className="ecosystem-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-text-box block">
          <p className="title">Preparing the AI with Business Knowledge</p>
          <p>
            Before the AI can generate a single service, it first needs to understand the business.
          </p>
          <p>
            A Super Administrator prepares the platform by creating a new Service Provider (Anbieter). This process goes far beyond creating a company profile. Instead, it establishes the knowledge foundation the AI will rely on for every future service.
          </p>
          <p>
            Existing documentation, service catalogs, pricing references, customer requests and business rules are uploaded into the platform. Together, these resources teach the AI how this specific organization works, how it defines its services and how it communicates with customers.
          </p>
          <p>
            Rather than manually configuring a traditional CPQ engine, the administrator teaches the platform the company&apos;s business language. This knowledge base becomes the foundation for every AI-generated service that follows.
          </p>
        </div>

        <div className="quotation-box block">
          <hr className="quotation-line" />
          <div className="quotation">
            <div className="quotation-mark-container top-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/quot_left_vp.svg`}
                alt=""
                aria-hidden="true"
                className="quotation-mark top-quotation"
              />
            </div>
            <div className="quotation-text">
              <em>
                Before AI can generate services, it first needs to understand the business.
              </em>
            </div>
            <div className="quotation-mark-container bottom-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/quote_right_vp.svg`}
                alt=""
                aria-hidden="true"
                className="quotation-mark bottom-quotation"
              />
            </div>
          </div>
          <hr className="quotation-line" />
        </div>

        <div className="additional-text-box block">
          <p className="vp-flow-title">Provider Creation Flow</p>
          <div className="provider-screenshots-section">
            <div className="provider-screenshots-shell">
              <div className="provider-screenshots" role="list" aria-label="Provider creation flow screenshots">
                {PROVIDER_SCREENSHOTS.map((screenshot, index) => (
                  <button
                    type="button"
                    key={screenshot.src}
                    className="provider-screenshot-btn"
                    role="listitem"
                    aria-label={`View ${screenshot.alt}`}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/${screenshot.src}`}
                      alt={screenshot.alt}
                      className="provider-screenshot-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="vp-screenshot-caption">
            The Super Administrator prepares the business context that powers every AI-generated service.
          </p>
        </div>

        <div className="additional-text-box block">
          <p className="title">Evaluating Business Knowledge</p>
          <p>
            Rather than simply importing documents, the platform evaluates the quality of the available information.
          </p>
          <p>
            It identifies missing examples, incomplete datasets and opportunities to improve the knowledge base.
          </p>
          <p>
            This transforms a traditional onboarding process into an AI training workflow.
          </p>
          <p>
            The richer the business knowledge, the better the generated services become.
          </p>
        </div>

        <div className="white-space"></div>
      </div>

      <BackButton />
      <Footer />

      {lightboxPortal}
    </div>
  );
}
