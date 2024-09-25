import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClientsCarousel.css';
import { PrevArrow, NextArrow } from './CustomArrow'; // Import the custom arrows

const images = [
  { src: 'https://access-one.us/wp-content/uploads/2023/08/AO_logo_A.png', alt: 'Access One', link: 'https://access-one.us', zoom: 'zoom-medium' },
  { src: 'https://i.ibb.co/GnW23NN/image-removebg-preview-18.png', alt: 'ASE', link: 'https://www.ase.com.ar/', zoom: '' },
  { src: 'https://avantlab.vc/wp-content/uploads/2020/08/Logo_295px.png', alt: 'Avantlab', link: 'https://avantlab.vc', zoom: 'zoom-medium' },
  { src: 'https://i.ibb.co/pWcmHjz/image-removebg-preview-15.png', alt: 'Apsot', link: 'https://www.apsot.com', zoom: 'zoom-large' },
  { src: 'https://i.ibb.co/S5ND5pV/bdo-logo-color.png', alt: 'BDO', link: 'https://www.bdoargentina.com/es-ar/home-es', zoom: 'zoom-extralargee' },
  { src: 'https://www.cuidarlos.com/wp-content/uploads/2021/04/logo_cuidarlos_black.png', alt: 'Cuidarlos', link: 'https://www.cuidarlos.com', zoom: '' },
  { src: 'https://www.farmanet.com.ar/wp-content/uploads/2022/03/Farmanet-Isologo-640x214.png', alt: 'Farmanet', link: 'https://www.farmanet.com.ar', zoom: 'zoom-medium' },
  { src: 'https://www.campushirsch.com.ar/pluginfile.php/1/theme_lambda/logo/1692746895/hirsch_logo_b.png', alt: 'Fundación Hirsch', link: 'https://hirsch.org.ar/', zoom: 'zoom-large' },
  { src: 'https://grupowerthein.com/wp-content/uploads/2021/06/logo-gw-azul.png', alt: 'Grupo Werthein', link: 'https://www.grupowerthein.com', zoom: 'zoom-large' },
  { src: 'https://i.ibb.co/n3s61Dn/image-3.png', alt: 'Instur', link: 'https://insitulogistica.com.ar', zoom: 'zoom-extralarge' },
  { src: 'https://i.ibb.co/kGmykxK/image-36-removebg-preview.png', alt: 'Limpiolux', link: 'https://limpiolux.com.ar', zoom: 'zoom-small' },
  { src: 'https://i.ibb.co/zbYSqqD/image-removebg-preview-20.png', alt: 'Mirgor', link: 'https://www.mirgor.com', zoom: 'zoom-small', name: 'name-mirgor' },
  { src: 'https://i.ibb.co/w7HcWPm/image-10.png', alt: 'Vacunar', link: 'https://vacunar.com.ar', zoom: 'zoom-medium' },
];

const ClientsCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />, // Use custom PrevArrow component
    nextArrow: <NextArrow />, // Use custom NextArrow component
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="clients-carousel" id="clientes">
      <h2 className="contact-carousel-title">Clientes</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`client ${image.zoom}`}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsCarousel;
