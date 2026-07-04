import React from 'react';
import PropTypes from 'prop-types';
import '../Styles_css/SectionHeading.css';

export default function StaticSectionHeading({ title }) {
  return (
    <div className="section-heading">
      <span className="section-heading-line" aria-hidden="true" />
      <h2 className="section-heading-title">{title}</h2>
    </div>
  );
}

StaticSectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
