import React from 'react';
import AboutCarouselDots from './AboutCarouselDots';
import { useAboutCarousel } from '../hooks/useAboutCarousel';

const publicUrl = process.env.PUBLIC_URL;

const HOBBY_CARDS = [
  {
    id: 'travel',
    title: 'Travel',
    description: 'Discovering new cultures.',
    icon: 'icon_travel.png',
  },
  {
    id: 'cinema',
    title: 'Cinema',
    description: 'Storytelling & cinematography.',
    icon: 'icon_cinema.png',
  },
  {
    id: 'gastronomy',
    title: 'Gastronomy',
    description: 'Cooking and world cuisine.',
    icon: 'icon_gastro.png',
  },
  {
    id: 'drawing',
    title: 'Drawing',
    description: 'Creativity beyond interfaces.',
    icon: 'icon_drawing.png',
  },
  {
    id: 'piano',
    title: 'Piano',
    description: 'Jazz, harmony & improvisation.',
    icon: 'icon_musique.png',
  },
  {
    id: 'sport',
    title: 'Sport',
    description: 'Balance and discipline.',
    icon: 'icon_sport.png',
  },
];

function HobbyCard({ card }) {
  return (
    <div className="about-hobbies-card">
      <article className="about-hobby-card">
        <h3 className="about-hobby-card-title">{card.title}</h3>
        <div className="about-hobby-card-icon" aria-hidden="true">
          <img
            className="about-hobby-card-icon-img"
            src={`${publicUrl}/img/${card.icon}`}
            alt=""
          />
        </div>
        <p className="about-hobby-card-description">{card.description}</p>
      </article>
    </div>
  );
}

export default function AboutBeyondDesign() {
  const {
    scrollRef,
    isDragging,
    activePageIndex,
    pageCount,
    goToPage,
    handleMouseDown,
    stopDragging,
  } = useAboutCarousel({
    totalSlides: HOBBY_CARDS.length,
    slideSelector: '.about-hobbies-slide',
    trackSelector: '.about-hobbies-carousel-track',
  });

  return (
    <div className="block about-beyond-design-wrapper">
      <div className="additional-text-box block">
        <p className="title">Beyond Design</p>
      </div>

      <section className="about-hobbies-section" aria-label="Beyond Design">
        <div className="about-hobbies-carousel-shell">
          <div className="about-hobbies-carousel-fade about-hobbies-carousel-fade--left" aria-hidden="true" />
          <div className="about-hobbies-carousel-fade about-hobbies-carousel-fade--right" aria-hidden="true" />
          <div
            className={`about-hobbies-carousel-viewport${isDragging ? ' is-dragging' : ''}`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDragging}
          >
            <div className="about-hobbies-carousel-track">
              {HOBBY_CARDS.map((card, index) => (
                <div className="about-hobbies-slide" key={card.id} data-index={index}>
                  <HobbyCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <AboutCarouselDots
          pageCount={pageCount}
          activePageIndex={activePageIndex}
          onGoToPage={goToPage}
          classPrefix="about-hobbies-carousel"
          ariaLabel="Beyond Design slides"
          getPageAriaLabel={(pageIndex) => `Go to Beyond Design page ${pageIndex + 1}`}
        />
      </section>
    </div>
  );
}
