import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_MAILTO } from '../config/contactMailto';

export default function Contact() {
  return (
    <section>
      <NavLink to="/home" className="active">
        Home
      </NavLink>
      <NavLink to="/portfolio" className="active">
        Portfolio
      </NavLink>
      <NavLink to="/about_me" className="active">
        About me
      </NavLink>
      <a href={CONTACT_MAILTO} className="active">
        Contact
      </a>
    </section>
  );
}

