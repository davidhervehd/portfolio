import React, { useCallback, useEffect, useRef, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const updateActiveIndex = useCallback(() => {
    const viewport = scrollRef.current;
    if (!viewport) return;

    const slides = viewport.querySelectorAll('.about-hobbies-slide');
    if (!slides.length) return;

    const scrollLeft = viewport.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const viewport = scrollRef.current;
    if (!viewport) return undefined;

    viewport.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      viewport.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const stopDragging = useCallback(() => {
    if (!dragState.current.isDragging) return;
    dragState.current.isDragging = false;
    setIsDragging(false);
  }, []);

  const handleMouseDown = (event) => {
    if (event.button !== 0) return;

    const viewport = scrollRef.current;
    if (!viewport) return;

    dragState.current = {
      isDragging: true,
      startX: event.pageX,
      scrollLeft: viewport.scrollLeft,
    };
    setIsDragging(true);
    event.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!dragState.current.isDragging) return;

      const viewport = scrollRef.current;
      if (!viewport) return;

      const deltaX = event.pageX - dragState.current.startX;
      viewport.scrollLeft = dragState.current.scrollLeft - deltaX;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
    };
  }, [stopDragging]);

  const goToSlide = (index) => {
    const viewport = scrollRef.current;
    const slide = viewport?.querySelectorAll('.about-hobbies-slide')[index];
    if (!viewport || !slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

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

        <div className="about-hobbies-carousel-dots" role="tablist" aria-label="Beyond Design slides">
          {HOBBY_CARDS.map((card, index) => (
            <button
              key={card.id}
              type="button"
              className={`about-hobbies-carousel-dot${
                index === activeIndex ? ' about-hobbies-carousel-dot--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${card.title}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
