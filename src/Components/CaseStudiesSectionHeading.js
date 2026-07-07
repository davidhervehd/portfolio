import React from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform } from 'framer-motion';
import '../Styles_css/SectionHeading.css';

const LINE_SCROLL_INDEX = 0.5;
const TITLE_SCROLL_INDEX = 0.725;

function getScrollRange(scrollIndex) {
  return [(scrollIndex - 0.5) * 400, (scrollIndex + 0.5) * 400];
}

export default function CaseStudiesSectionHeading({ scrollY }) {
  const lineRange = getScrollRange(LINE_SCROLL_INDEX);
  const titleRange = getScrollRange(TITLE_SCROLL_INDEX);

  const lineOpacity = useTransform(scrollY, lineRange, [0, 1]);
  const lineX = useTransform(scrollY, lineRange, [80, 0]);
  const titleOpacity = useTransform(scrollY, titleRange, [0, 1]);
  const titleX = useTransform(scrollY, titleRange, [60, 0]);

  return (
    <div className="section-heading" id="case-studies-heading">
      <motion.div
        className="section-heading-line"
        aria-hidden="true"
        style={{
          opacity: lineOpacity,
          x: lineX,
        }}
      />
      <motion.h2
        className="section-heading-title"
        style={{
          opacity: titleOpacity,
          x: titleX,
        }}
      >
        Case Studies
      </motion.h2>
    </div>
  );
}

CaseStudiesSectionHeading.propTypes = {
  scrollY: PropTypes.object.isRequired,
};
