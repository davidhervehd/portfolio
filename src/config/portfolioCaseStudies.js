/**
 * Portfolio case study visibility and navigation order.
 * Set enabled: false to temporarily hide a case study without removing code.
 */
export const PORTFOLIO_CASE_STUDIES = [
  {
    key: 'vertriebsportal',
    route: '/vertriebsportal',
    homeBlock: 1,
    enabled: true,
  },
  {
    key: 'smart-home',
    route: '/digital_strom',
    homeBlock: 2,
    enabled: true,
  },
  {
    key: 'esmart',
    route: '/esmart',
    homeBlock: 3,
    enabled: true,
  },
  {
    key: 'clarioforms',
    route: '/pet_health_data',
    homeBlock: 4,
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
