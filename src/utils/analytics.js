export const trackEvent = (eventName) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName);
  }
};

export const trackCaseStudyClick = (studyName) => {
  if (studyName) {
    trackEvent(`Case Study - ${studyName}`);
  }
};

export const trackNextUseCase = (currentStudyName) => {
  if (currentStudyName) {
    trackEvent(`Next Use Case - ${currentStudyName}`);
  }
};
