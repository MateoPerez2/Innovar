import React from 'react';
import './ServiceTextMapUnique.css';
import pngImage from '/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/Group 16.png';

function ServiceTextMapUnique() {
  return (
    <div className="service-text-map-unique" id="latam">
      <div className="svg-line-container">
        <svg
          width="1620"
          height="1"
          viewBox="0 0 1620 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.18557e-08"
            y1="0.75"
            x2="1620"
            y2="0.750142"
            stroke="#00D7F4"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className="service-content-container">
        <div className="service-text-map-content-unique">
          <h2>Nuestra experiencia en América Latina</h2>
          <p>
            Una región tan compleja como atractiva para hacer negocios, desde
            una<strong> expertise local y con perspectiva expansiva.</strong>
          </p>
          <div className="locations-unique">
            ARGENTINA<span>|</span>BOLIVIA<span>|</span>CHILE<span>|</span>PARAGUAY<span>|</span>PERÚ<span>|</span>URUGUAY
          </div>
        </div>
        <div className="service-text-map-image-unique">
          <img src={pngImage} alt="Map illustration" />
        </div>
      </div>
    </div>
  );
}

export default ServiceTextMapUnique;
