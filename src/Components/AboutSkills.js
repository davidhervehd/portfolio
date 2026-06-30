import React from 'react';

const publicUrl = process.env.PUBLIC_URL;

const CORE_EXPERTISE = [
  {
    id: 'product-ux',
    title: 'Product & UX',
    iconSrc: 'Icon_layers.svg',
    iconAlt: 'Product and UX icon',
    skills: [
      'UX Research',
      'Product Strategy',
      'Information Architecture',
      'User Flows',
      'Interaction Design',
      'Design Systems',
      'AI-assisted Product Design',
      'Usability Testing',
    ],
  },
  {
    id: 'collaboration-delivery',
    title: 'Collaboration & Delivery',
    iconSrc: 'Icon_handshake.svg',
    iconAlt: 'Collaboration and delivery icon',
    skills: [
      'Design Thinking Workshops',
      'Stakeholder Management',
      'Cross-functional Collaboration',
      'Developer Handoff',
      'Agile Product Development',
      'Design Leadership',
      'Mentoring',
      'Product Discovery',
    ],
  },
];

const SOFTWARE_TOOLS = [
  'Figma',
  'Cursor',
  'Visual Studio Code',
  'React',
  'HTML/CSS',
  'GitHub',
  'Miro',
  'Jira',
  'Photoshop',
  'Illustrator',
  'After Effects',
  'Adobe XD',
];

export default function AboutSkills() {
  return (
    <div className="about-skills-section">
      <div className="additional-text-box block">
        <p className="title">Core Expertise</p>
        <div className="about-expertise-grid">
          {CORE_EXPERTISE.map((card) => (
            <article className="about-expertise-card" key={card.id}>
              <div className="about-expertise-icon" aria-hidden="true">
                <img
                  className="about-expertise-icon-img"
                  src={`${publicUrl}/img/${card.iconSrc}`}
                  alt=""
                />
              </div>
              <h3 className="about-expertise-card-title">{card.title}</h3>
              <ul className="about-expertise-list">
                {card.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="additional-text-box block about-software-skills-block">
        <p className="title">Software Skills</p>
        <div className="about-software-chips" role="list" aria-label="Software tools">
          {SOFTWARE_TOOLS.map((tool) => (
            <span className="about-software-chip" role="listitem" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
