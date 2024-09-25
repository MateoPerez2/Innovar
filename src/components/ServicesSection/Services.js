import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceTextIcons from './ServiceTextIcons';
import ServiceTextImage from './ServiceTextImage';
import ServicesDisplay from './ServicesDisplay';
import ServiceTextMapUnique from './ServiceTextMap';
import './Services.css';  // Import the CSS file

function Services() {
  return (
    <section className="services" id="servicio">
      <ServicesDisplay />
      <ServiceTextMapUnique />
    </section>
  );
}

export default Services;
