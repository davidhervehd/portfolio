import { useCallback, useEffect, useRef, useState } from 'react';

export const ABOUT_CAROUSEL_MOBILE_BREAKPOINT = 768;

export function getVisibleSlideCount(viewport, slides, trackSelector) {
  if (!slides.length) return 1;

  if (window.innerWidth <= ABOUT_CAROUSEL_MOBILE_BREAKPOINT) {
    return 1;
  }

  const track = viewport.querySelector(trackSelector);
  const gap = track ? parseFloat(getComputedStyle(track).gap) || 0 : 0;
  const slideWidth = slides[0].offsetWidth;
  const slideStep = slideWidth + gap;
  const visible = Math.floor((viewport.clientWidth + gap) / slideStep);

  return Math.max(1, Math.min(visible, slides.length));
}

export function getPageCount(totalSlides, visibleCount, isMobile) {
  if (isMobile) {
    return totalSlides;
  }

  return Math.max(1, totalSlides - visibleCount + 1);
}

export function slideIndexToPageIndex(slideIndex, pageCount, isMobile) {
  if (isMobile) {
    return slideIndex;
  }

  return Math.min(slideIndex, pageCount - 1);
}

export function pageIndexToSlideIndex(pageIndex, totalSlides, visibleCount, isMobile) {
  if (isMobile) {
    return pageIndex;
  }

  return Math.min(pageIndex, totalSlides - visibleCount);
}

export function useAboutCarousel({ totalSlides, slideSelector, trackSelector }) {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [pageCount, setPageCount] = useState(totalSlides);
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

    const slides = viewport.querySelectorAll(slideSelector);
    if (!slides.length) return;

    const isMobile = window.innerWidth <= ABOUT_CAROUSEL_MOBILE_BREAKPOINT;
    const visibleCount = getVisibleSlideCount(viewport, slides, trackSelector);
    const nextPageCount = getPageCount(totalSlides, visibleCount, isMobile);

    const scrollLeft = viewport.scrollLeft;
    let closestSlideIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSlideIndex = index;
      }
    });

    setPageCount(nextPageCount);
    setActivePageIndex(slideIndexToPageIndex(closestSlideIndex, nextPageCount, isMobile));
  }, [slideSelector, totalSlides, trackSelector]);

  useEffect(() => {
    const viewport = scrollRef.current;
    if (!viewport) return undefined;

    updateActiveIndex();
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

  const handleMouseDown = useCallback((event) => {
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
  }, []);

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

  const goToPage = useCallback((pageIndex) => {
    const viewport = scrollRef.current;
    const slides = viewport?.querySelectorAll(slideSelector);
    if (!viewport || !slides?.length) return;

    const isMobile = window.innerWidth <= ABOUT_CAROUSEL_MOBILE_BREAKPOINT;
    const visibleCount = getVisibleSlideCount(viewport, slides, trackSelector);
    const slideIndex = pageIndexToSlideIndex(
      pageIndex,
      totalSlides,
      visibleCount,
      isMobile,
    );
    const slide = slides[slideIndex];
    if (!slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });
    setActivePageIndex(pageIndex);
  }, [slideSelector, totalSlides, trackSelector]);

  return {
    scrollRef,
    isDragging,
    activePageIndex,
    pageCount,
    goToPage,
    handleMouseDown,
    stopDragging,
  };
}
