import React from 'react';
import './ServiceTextImage.css';
import image1 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta7.png';

const ServiceTextImage = () => {
  return (
    <div className="unique-service-section">
      <div className="unique-service-item">
        <div className="unique-service-text">
          <h3>Gestión de salud corporativa</h3>
          <p>
            Relevamientos de coberturas médicas locales e internacionales, de servicios relacionados al eje salud de colaboradores del cliente y de beneficios corporativos. Asesoramiento sobre cómo combinar de manera eficiente las distintas capas de cobertura.
          </p>
          <p>Gestión de programas de Fidelización y de soluciones de Prevención de Salud.</p>
        </div>
        <div className="unique-service-image">
          <img src={image1} alt="Gestión de salud corporativa" />
        </div>
      </div>
    </div>
  );
}

export default ServiceTextImage;
