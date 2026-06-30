import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import CvDownloadModal from '../Components/CvDownloadModal';
import { trackEvent } from '../utils/analytics';

const CvModalContext = createContext(null);

export function CvModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCvModal = useCallback(() => {
    trackEvent('Download CV');
    setIsOpen(true);
  }, []);
  const closeCvModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openCvModal, closeCvModal, isOpen }),
    [openCvModal, closeCvModal, isOpen],
  );

  return (
    <CvModalContext.Provider value={value}>
      {children}
      <CvDownloadModal isOpen={isOpen} onClose={closeCvModal} />
    </CvModalContext.Provider>
  );
}

export function useCvModal() {
  const context = useContext(CvModalContext);
  if (!context) {
    throw new Error('useCvModal must be used within a CvModalProvider');
  }
  return context;
}
