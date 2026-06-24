import React from 'react';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <div>
      <section className="contact-page" style={{ padding: '120px 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact</h1>
        <p>Feel free to reach out — I&apos;d love to hear from you.</p>
        <p><strong>Email:</strong> info@davidherve.ch</p>
        <p><strong>Phone:</strong> 076 320 55 55</p>
        <p><strong>Location:</strong> Eichbühlstrasse 25, 8004 Zürich</p>
      </section>
      <Footer />
    </div>
  );
}
