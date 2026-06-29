import { useEffect } from 'react';
import { CONTACT_MAILTO } from '../config/contactMailto';

export default function Contact() {
  useEffect(() => {
    window.location.href = CONTACT_MAILTO;
  }, []);

  return null;
}
