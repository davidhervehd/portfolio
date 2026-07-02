export const UMAMI_SCRIPT_SRC = 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = '2f7c340c-f296-4d5a-aad6-2734ea77f2f2';
export const UMAMI_SCRIPT_ID = 'umami-analytics-script';

export const isPortfolioOwner = () => (
  typeof window !== 'undefined'
  && localStorage.getItem('portfolioOwner') === 'true'
);

export const removeUmamiScript = () => {
  if (typeof document === 'undefined') return;

  document.getElementById(UMAMI_SCRIPT_ID)?.remove();
  document
    .querySelectorAll(`script[src="${UMAMI_SCRIPT_SRC}"]`)
    .forEach((script) => script.remove());

  if (typeof window !== 'undefined') {
    delete window.umami;
  }
};

export const trackEvent = (eventName) => {
  if (isPortfolioOwner()) return;

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
