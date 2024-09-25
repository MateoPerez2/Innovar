import React from 'react';
import ClientsCarousel from './ClientsCarousel';
import ContactForm from './ContactForm';
import './ClientsContact.css';

function ClientsContact() {
  return (
    <section className="contactos">
      <ClientsCarousel />
      <ContactForm />
    </section>
  );
}

export default ClientsContact;
