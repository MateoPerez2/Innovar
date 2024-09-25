import React from 'react';
import './ServiceCard.css';
import carta from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta5.jpeg'; // Ensure the path is correct relative to the src directory

const services = [
  {
    title: 'Desarrollo de negocios y estrategias',
    subtitle: 'Modelos innovadores y customizados a cada cliente.'
  },
  {
    title: 'Expansión',
    subtitle: 'Impulso del negocio hasta su etapa de implementación y acceso a nuevas oportunidades de mercado.'
  },
  {
    title: 'Confección de Business Plan detallados',
    subtitle: 'Análisis de la viabilidad del negocio y hoja de ruta.'
  },
  {
    title: 'Comercialización',
    subtitle: 'Detección de oportunidades y construcción de puentes comerciales de generación de valor.'
  }
];

const ServiceCard = () => {
  return (
    <div className="custom-services-section">
      <div className="custom-service-rectangle">
        <div className="custom-text-container">
          <h2 className="custom-section-subtitle">Gestión comercial y de negocios</h2>
          <div className="custom-text-grid">
            {services.map((service, index) => (
              <div key={index} className="custom-text-item">
                <h3 className="custom-service-title">{service.title}</h3>
                <p className="custom-service-subtitle">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="custom-image-container">
          <img src={carta} alt="Service Image" className="custom-image" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
