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

export const trackNextUseCase = (targetStudyName) => {
  if (targetStudyName) {
    trackEvent(`Next Use Case - ${targetStudyName}`);
  }
};

export const trackPreviousUseCase = (targetStudyName) => {
  if (targetStudyName) {
    trackEvent(`Previous Use Case - ${targetStudyName}`);
  }
};
