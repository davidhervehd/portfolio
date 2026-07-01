/**
 * Portfolio case study visibility and navigation order.
 * Set enabled: false to temporarily hide a case study without removing code.
 */
export const PORTFOLIO_CASE_STUDIES = [
  {
    key: 'vertriebsportal',
    route: '/vertriebsportal',
    trackingName: 'Vertriebsportal',
    homeBlock: 1,
    enabled: true,
  },
  {
    key: 'smart-home',
    route: '/digital_strom',
    trackingName: 'DigitalSTROM',
    homeBlock: 2,
    enabled: true,
  },
  {
    key: 'clarioforms',
    route: '/pet_health_data',
    trackingName: 'Pet Health Data',
    homeBlock: 4,
    enabled: true,
  },
  {
    key: 'esmart',
    route: '/esmart',
    trackingName: 'eSmart',
    homeBlock: 3,
    enabled: true,
  },
  {
    key: 'meine-impfungen',
    route: '/meine_impfungen',
    homeBlock: 5,
    enabled: false,
  },
];

export const getActiveCaseStudies = () =>
  PORTFOLIO_CASE_STUDIES.filter((study) => study.enabled);

export const getActiveCaseStudyRoutes = () =>
  getActiveCaseStudies().map((study) => study.route);

export const isActiveCaseStudyRoute = (pathname) =>
  getActiveCaseStudyRoutes().includes(pathname);

export const getCaseStudyTrackingName = (routeOrPathname) => {
  const study = PORTFOLIO_CASE_STUDIES.find((item) => item.route === routeOrPathname);
  return study?.trackingName ?? null;
};

export const getAdjacentCaseStudyRoutes = (currentPath) => {
  const routes = getActiveCaseStudyRoutes();
  const currentIndex = routes.indexOf(currentPath);

  if (currentIndex === -1) {
    return {
      previous: routes[routes.length - 1],
      next: routes[0],
    };
  }

  return {
    previous: currentIndex === 0 ? routes[routes.length - 1] : routes[currentIndex - 1],
    next: currentIndex === routes.length - 1 ? routes[0] : routes[currentIndex + 1],
  };
};
