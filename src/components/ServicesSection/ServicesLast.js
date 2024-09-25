import React from 'react';
import './ServicesLast.css';
import image from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta8.jpeg';

const ServicesLast = () => {
  return (
    <div className="services-last-section">
      <div className="services-last-item">
        <div className="services-last-text">
          <h3>Gestión de Financiamiento de Recursos en Salud</h3>
          <p>
            Programas de control de fuentes de financiamiento de coberturas de salud, y monitoreo del efectivo cumplimiento de contratos del beneficio de cobertura médica a empresas.
          </p>
        </div>
        <div className="services-last-image">
          <img src={image} alt="Gestión de Financiamiento de Recursos en Salud" />
        </div>
      </div>
    </div>
  );
};

export default ServicesLast;
