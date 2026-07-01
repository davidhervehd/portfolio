import React from 'react';

export default function AboutCarouselDots({
  pageCount,
  activePageIndex,
  onGoToPage,
  classPrefix,
  ariaLabel,
  getPageAriaLabel = (pageIndex) => `Go to page ${pageIndex + 1}`,
}) {
  return (
    <div className={`${classPrefix}-dots`} role="tablist" aria-label={ariaLabel}>
      {Array.from({ length: pageCount }, (_, pageIndex) => (
        <button
          key={`${classPrefix}-page-${pageIndex}`}
          type="button"
          className={`${classPrefix}-dot${
            pageIndex === activePageIndex ? ` ${classPrefix}-dot--active` : ''
          }`}
          onClick={() => onGoToPage(pageIndex)}
          aria-label={getPageAriaLabel(pageIndex)}
          aria-selected={pageIndex === activePageIndex}
          role="tab"
        />
      ))}
    </div>
  );
}
