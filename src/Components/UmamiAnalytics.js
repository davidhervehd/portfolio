import { useEffect } from 'react';
import {
  isPortfolioOwner,
  removeUmamiScript,
  UMAMI_SCRIPT_ID,
  UMAMI_SCRIPT_SRC,
  UMAMI_WEBSITE_ID,
} from '../utils/analytics';

export default function UmamiAnalytics() {
  useEffect(() => {
    if (isPortfolioOwner()) {
      removeUmamiScript();
      return undefined;
    }

    if (document.getElementById(UMAMI_SCRIPT_ID)) {
      return undefined;
    }

    const script = document.createElement('script');
    script.id = UMAMI_SCRIPT_ID;
    script.defer = true;
    script.src = UMAMI_SCRIPT_SRC;
    script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
    document.head.appendChild(script);

    return undefined;
  }, []);

  return null;
}
