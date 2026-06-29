import React from 'react';

export default function CaseStudyIntro({
  boxClassName,
  projectName,
  projectCategory,
  projectSubtitle,
  headline,
  headlineClassName,
  children,
}) {
  return (
    <div className={boxClassName}>
      <div className="case-study-project-header">
        <p className="case-study-project-name">{projectName}</p>
        {projectCategory ? (
          <p className="case-study-project-category">{projectCategory}</p>
        ) : null}
        <p className="case-study-project-subtitle">{projectSubtitle}</p>
      </div>
      <p className={headlineClassName}>{headline}</p>
      {children}
    </div>
  );
}
