import React from 'react';
import './HeroSection.css';

// Only keep one image in the array
const images = [
  {
    src: require('/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/Mask group.jpg'),
    title: "Transformamos ideas en negocios",
    subtitle: "Los diseñamos, estructuramos e impulsamos, construyendo puentes hacia el crecimiento y la expansión."
  }
];

const HeroSection = () => {
  const currentImage = images[0]; // Since we only have one image

  return (
    <div className="hero-section">
      <div className="slides-container">
        <div className="slide">
          <img src={currentImage.src} alt="Hero" />
          <div className="hero-title">
            <h1>{currentImage.title}</h1>
            <h2>{currentImage.subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
