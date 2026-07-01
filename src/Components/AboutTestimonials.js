import React from 'react';
import AboutCarouselDots from './AboutCarouselDots';
import { useAboutCarousel } from '../hooks/useAboutCarousel';

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
  const {
    scrollRef,
    isDragging,
    activePageIndex,
    pageCount,
    goToPage,
    handleMouseDown,
    stopDragging,
  } = useAboutCarousel({
    totalSlides: testimonials.length,
    slideSelector: '.testimonial-slide',
    trackSelector: '.testimonial-carousel-track',
  });

  return (
    <div className="block about-testimonials-wrapper">
      <div className="additional-text-box block">
        <p className="title">Testimonials</p>
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

        <AboutCarouselDots
          pageCount={pageCount}
          activePageIndex={activePageIndex}
          onGoToPage={goToPage}
          classPrefix="testimonial-carousel"
          ariaLabel="Testimonial slides"
          getPageAriaLabel={(pageIndex) => `Go to testimonial page ${pageIndex + 1}`}
        />
      </section>
    </div>
  );
}
