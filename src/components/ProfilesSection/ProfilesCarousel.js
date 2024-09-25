import React from 'react';
import './ProfilesCarousel.css';

const ProfilesCarousel = () => {
  const profiles = [
    {
      name: 'Romina Lapicki',
      image: 'https://i.ibb.co/ByNLbY7/Romina-Lapicki.jpg',
      description: 'Especialista en Tecnología y Salud Digital con más de 15 años de experiencia en el sector. MBA en UCEMA. Docente de post grado en Economía y Negocios.',
      linkedin: 'https://www.linkedin.com/in/rlapicki/'
    },
    {
      name: 'Victoria Mingote',
      image: 'https://i.ibb.co/XpZRBJ0/Victoria-Mingote.jpg',
      description: 'Ejecutiva con más de 30 años de trayectoria en Empresas de Salud en las Áreas de Tecnología, Operaciones y Control de Gestión. Líder de proyectos complejos de cambio tecnológicos. Experta en Procesos, Transformación Digital y Gestión basada en Información.',
      linkedin: 'https://www.linkedin.com/in/victoria-mingote-9784a21b/'
    },
    {
      name: 'Manuel Bagur',
      image: 'https://i.ibb.co/mvb4CSL/Manuel-bagur.jpg',
      description: 'Economista (UNLP), experto en el desarrollo e implementación de planes expansivos en Argentina y América Latina. Especialista en negocios internacionales. Accionista y miembro activo en Directorios de empresas de Salud.',
      linkedin: 'https://www.linkedin.com/in/manuel-bagur-2a925610/'
    },
    {
      name: 'Fabiana Casin',
      image: 'https://i.ibb.co/g4MgwJM/Fabiana-casin.jpg',
      description: 'Profesional de negocios en el campo de la Industria Farmacéutica, con experiencia multinacional en el desarrollo de mercados tanto en Argentina como en América Latina, para los verticales de Droguería y Enfermedades Crónicas.',
      linkedin: 'https://www.linkedin.com/in/fabiana-casin-032263a/'
    },
    {
      name: 'Diego Glanczpigel',
      image: 'https://i.ibb.co/M8r0kzH/Diego.jpg',
      description: 'Especialista en negocios del sector Farmacéutico con más de 20 años en empresas multinacionales en el campo de la Investigación Clínica. Licenciado en Marketing, MBA en UCEMA y Adam Smith Business School.',
      linkedin: 'https://www.linkedin.com/in/diegoglancszpigel/'
    },
    {
      name: 'Emma Weigandt',
      image: 'https://i.ibb.co/qgLbhyV/Emma-Weigandt.jpg',
      description: 'Profesional de Marketing y Publicidad (UADE) con más de 15 años de experiencia en agencias y anunciantes para Argentina y la región. Especializada en consultoría de mercado, de comportamiento del consumidor, y de assets propios para la gestión de campañas efectivas y con resultados medibles.',
      linkedin: 'https://www.linkedin.com/in/emma-weigandt/'
    },
    
    {
      name: 'Leyla Magdycz',
      image: 'https://i.ibb.co/fqRfNT3/MG-0267-2-1.png',
      description: 'Diseñadora gráfica independiente, especialista en Branding Empresarial. Con más de 5 años de experencia en el sector, graduada en FADU Universidad de Buenos Aires, con una certificación en Diseño UX/UI de Coderhouse. Enfocada en crear identidades visuales que no solo destacan, sino que también reflejan los valores y la misión de las empresas con las que colabora.',
      linkedin: 'https://www.linkedin.com/in/leylamgz/'
    }
    
  ];

  return (
    <div className="profiles-grid">
      <div className="titleProfile">Profesionales Asociados</div>
      <div className="grid-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.image} alt={profile.name} />
            <div className="profile-name-link">
              <h2>{profile.name}</h2>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <svg className="linkedin-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                  <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                  <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,0.912-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                </svg>
              </a>
            </div>
            <p>{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesCarousel;
