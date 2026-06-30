import React from 'react';

export default function CaseStudyIntro({
  boxClassName,
  projectName,
  projectCategory,
  projectSubtitle,
  headline,
  headlineClassName,
  logoSrc,
  logoAlt = '',
  children,
}) {
  const headerText = (
    <>
      <p className="case-study-project-name">{projectName}</p>
      {projectCategory ? (
        <p className="case-study-project-category">{projectCategory}</p>
      ) : null}
      <p className="case-study-project-subtitle">{projectSubtitle}</p>
    </>
  );

  return (
    <div className={boxClassName}>
      <div
        className={
          logoSrc
            ? 'case-study-project-header case-study-project-header--with-logo'
            : 'case-study-project-header'
        }
      >
        {logoSrc ? (
          <>
            <img
              src={logoSrc}
              alt={logoAlt}
              className="case-study-project-logo"
            />
            <div className="case-study-project-header-text">{headerText}</div>
          </>
        ) : (
          headerText
        )}
      </div>
      <p className={headlineClassName}>{headline}</p>
      {children}
    </div>
  );
}
