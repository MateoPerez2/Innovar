import React, { useState } from 'react';
import './Profiles.css';
import ProfilesCarousel from './ProfilesCarousel';

const ProfilesSection = () => {
  const [showCV, setShowCV] = useState({ horacio: false, sol: false });

  const toggleCV = (name) => {
    setShowCV((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  return (
    <div className="profiles-section">
      <section className="about-us" id="nosotros">
        <h2 className="about-us-title">Nosotros</h2>
        <p className="about-us-description">
          Somos un equipo de profesionales con trayectoria en distintas áreas de empresas locales e internacionales en el sector de la salud, especializados en el desarrollo de <strong>negocios eficientes y sostenibles</strong> . Llevamos la innovación en nuestro ADN y la aplicamos a nuestras propuestas de valor promoviendo una cultura emprendedora.
        </p>
      </section>
      <h2 className="seccion-title">Socios Fundadores</h2>
      <div className="profiles-container">
        <div className="profile">
          <div className={`profile-content ${showCV.horacio ? 'show' : ''}`}>
            <img src={require('/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/WhatsApp Image 2024-08-16 at 10.45.14.jpeg')} alt="Horacio Apellido" className="profile-image" />
            <div className="profile-info">
              <h3 className="profile-name">Horacio Raiman</h3>
              <p className="profile-subtitle">Director de <strong>InnovAr</strong></p>
            </div>
            <div className="cv-section">
              <p>A cargo de proyectos en instancia de elaboración estratégica, llevado éstos a niveles de ejecución. Líder en la co-construcción de planes de desarrollo de negocio y su expansión.
Licenciado en Organización de Empresas en UADE (Argentina) y Master in Community Medicine en Mount Sinai Med School (NYU)
Funciones ejecutivas en la Global Health Unit de Aetna International, AMSA, SPM y Galeno Argentina; Dirección Ejecutiva de Medifé, Presidente de Fundación Medifé y Dirección Comercial del Grupo ASE.</p>
              <br />
              <a href="https://www.linkedin.com/in/horacio-manuel-raiman-b00b619/" target="_blank" rel="noopener noreferrer" className="linkedin-container">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                  <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                  <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="more-info-button" aria-label="More information about Horacio Apellido" onClick={() => toggleCV('horacio')}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#00D7F4"/>
              <line x1="24.354" y1="14" x2="24.354" y2="34.779" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="24.4248" x2="34.779" y2="24.4248" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="profile">
          <div className={`profile-content ${showCV.sol ? 'show' : ''}`}>
            <img src={require('/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/WhatsApp Image 2024-08-12 at 10.41.13.jpeg')} alt="Sol Apellido" className="profile-image" />
            <div className="profile-info">
              <h3 className="profile-name">María Sol Pervanas</h3>
              <p className="profile-subtitle">Directora de <strong>InnovAr</strong></p>
            </div>
            <div className="cv-section">
              <p>A cargo de proyectos de desarrollo comercial conformando y conduciendo equipos consultivos, elaborando estrategias de despliegue de planes comerciales exitosos. Experta en desarrollo de productos en mercados de América Latina. Abogada especialista en Derecho Empresarial egresada en la Universidad de Buenos Aires, y Master en Dirección Comercial en UADE (Argentina). Trayectoria en cargos gerenciales en empresas de Salud.</p>
              <br />
              <a href="https://www.linkedin.com/in/maria-sol-pervanas-a1747150/" target="_blank" rel="noopener noreferrer" className="linkedin-container">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                  <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                  <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="more-info-button" aria-label="More information about Sol Apellido" onClick={() => toggleCV('sol')}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#00D7F4"/>
              <line x1="24.354" y1="14" x2="24.354" y2="34.779" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="24.4248" x2="34.779" y2="24.4248" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      <ProfilesCarousel />
    </div>
  );
};

export default ProfilesSection;
