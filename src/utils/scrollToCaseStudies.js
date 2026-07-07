export function getCaseStudiesScrollTarget() {
  return document.getElementById('case-studies-heading')
    || document.getElementById('case-studies');
}

export function getNavbarOffset() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-height')
    .trim();
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 90;
}

export function scrollToCaseStudiesSection(behavior = 'smooth') {
  const target = getCaseStudiesScrollTarget();
  if (!target) return false;

  const top = target.getBoundingClientRect().top
    + window.scrollY
    - getNavbarOffset()
    - 4;

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  });

  return true;
}
