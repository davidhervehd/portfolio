import React, { useCallback, useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 'gokhan',
    name: 'Gökhan Sari',
    job: 'Senior Software Engineer bei Allianz',
    image: 'Gökhan.png',
    quote:
      '"I enjoyed working with David when I was a software engineer at Arpage and I have to say his approach to design and problem solving was simply exceptional. He\u2019s really good at finding solutions to problems and making things look nice and user-friendly. He understands all technical things\u2026 More on Linked-in\u2026"',
  },
  {
    id: 'peixoto',
    name: 'André Peixoto',
    job: 'Android Engineer',
    image: 'Peixoto.png',
    quote:
      '"Working alongside David, I\u2019ve witnessed his unwavering commitment to factoring in technical constraints within his UX designs. His ability to ideate innovative solutions while accommodating these constraints is truly remarkable. His achievements unequivocally showcase a holistic design approach\u2026 More on Linked-in\u2026"',
  },
  {
    id: 'daniel',
    name: 'Daniel Jack',
    job: 'Consultant bei Löwenfels Partner',
    image: 'Daniel.png',
    quote:
      '"Als langjähriger Vorgesetzter habe ich David stets als top motivierten Mitarbeiter erlebt. David war als Fronten & UX/UI Engineering bei der Arpage tätig. Er hat stets mit Begeisterung und viel Kreativität seine Aufgaben auf höchstem Niveau umgesetzt... More on Linked-in\u2026"',
  },
  {
    id: 'emre',
    name: 'Emre Avsar',
    job: 'Senior IT Software Engineer by UBS',
    image: 'Emre.png',
    quote:
      '"In terms of finding the matching puzzle piece, David is the professional you\u2018re looking for. One cannot ignore his senior skills in UX and UI design. He\u2018s just bringing nice designs which match perfectly in the application out of nowhere. I\u2018d love to work with him again...More on Linked-in"',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-block">
        <div className="testimonial-header">
          <div className="testimonial-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/${testimonial.image}`}
              alt={`${testimonial.name} portrait`}
            />
          </div>
          <div className="testimonial-info">
            <strong>{testimonial.name}</strong>
            <p className="job-description">{testimonial.job}</p>
          </div>
        </div>
        <p className="testimonial-quote">{testimonial.quote}</p>
      </div>
    </div>
  );
}

export default function AboutTestimonials() {
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

    const slides = viewport.querySelectorAll('.testimonial-slide');
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
    const slide = viewport?.querySelectorAll('.testimonial-slide')[index];
    if (!viewport || !slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <div className="block">
      <div className="additional-text-box block">
        <p className="title">. Testimonials</p>
      </div>

      <section className="testimonial-section" aria-label="Testimonials">
        <div className="testimonial-carousel-shell">
          <div className="testimonial-carousel-fade testimonial-carousel-fade--left" aria-hidden="true" />
          <div className="testimonial-carousel-fade testimonial-carousel-fade--right" aria-hidden="true" />
          <div
            className={`testimonial-carousel-viewport${isDragging ? ' is-dragging' : ''}`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDragging}
          >
            <div className="testimonial-carousel-track">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-slide" key={testimonial.id} data-index={index}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="testimonial-carousel-dots" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={`testimonial-carousel-dot${
                index === activeIndex ? ' testimonial-carousel-dot--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
