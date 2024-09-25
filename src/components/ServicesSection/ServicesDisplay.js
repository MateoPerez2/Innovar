import React, { useState, useRef, useEffect } from 'react';
import './ServicesDisplay.css';
import ServiceCard from './ServiceCard';
import ServiceTextIcons from './ServiceTextIcons';
import ServiceTextImage from './ServiceTextImage';
import ServicesLast from './ServicesLast';
import carta from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta.png';
import carta2 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta2.png';
import carta6 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta6.jpg';
import carta5 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta5.jpeg'
import carta7 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta7.png'
import carta8 from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/carta8.jpeg'

const ServicesDisplay = () => {
    const [activeService, setActiveService] = useState(null);
    const cardsRef = useRef(null);
    const detailsRef = useRef(null);

    const services = [
        { id: 1, name: '', title: 'Gestión comercial y de negocios', component: <ServiceCard />, image: carta5 },
        { id: 2, name: '', title: 'Soluciones tecnológicas en salud', component: <ServiceTextIcons />, image: carta6 },
        { id: 3, name: '', title: 'Gestión de salud corporativa', component: <ServiceTextImage />, image: carta7 },
        { id: 4, name: '', title: 'Gestión de Financiamiento de Recursos en Salud', component: <ServicesLast />, image: carta8 }
    ];

    const handleCardClick = (serviceId) => {
        if (serviceId === activeService) {
            setActiveService(null);
        } else {
            setActiveService(serviceId);
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handleCloseClick = () => {
        setActiveService(null);
        setTimeout(() => {
            cardsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    return (
        <div className="services-display">
            <h1 className='services-title'>Servicios</h1>
            <div className="services-cards-container" ref={cardsRef}>
                {services.map(service => (
                    <div key={service.id} className="service-card-wrapper">
                        <div
                            className={`service-card ${activeService === service.id ? 'service-card-selected' : ''}`}
                            onClick={() => handleCardClick(service.id)}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <h3 className="service-card-number">{service.name}</h3>
                            <svg
                                className="service-card-button"
                                width="36"
                                height="36"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="24" cy="24" r="23.5" fill="black" fillOpacity="0.5" stroke="#00D7F4" />
                                <line x1="24.1501" y1="13.813" x2="24.1501" y2="34.592" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="13.7959" y1="24.2378" x2="34.5749" y2="24.2378" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="service-card-footer">
                            <svg width="3" height="45" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" x2="1" y2="58" stroke="#00D7F4" strokeWidth="2" />
                            </svg>
                            <p className="service-card-title">{service.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            {activeService && (
                <div className="service-details-container visible" ref={detailsRef}>
                    <div className="service-details">
                        <svg
                            className="close-button"
                            width="36"
                            height="36"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleCloseClick}
                        >
                            <circle cx="24" cy="24" r="23" fill="black" fillOpacity="0.5" stroke="#00D7F4" strokeWidth="2" />
                            <line x1="13.7959" y1="24.2378" x2="34.5749" y2="24.2378" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {services.find(service => service.id === activeService).component}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesDisplay;
