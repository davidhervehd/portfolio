const publicUrl = process.env.PUBLIC_URL;

export const CV_FILES = {
  en: `${publicUrl}/img/CV_Hervé_David_2026_EN.pdf`,
  de: `${publicUrl}/img/CV_Hervé_David_2026_DE.pdf`,
};

export function openCvPdf(language) {
  const url = CV_FILES[language];
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}
