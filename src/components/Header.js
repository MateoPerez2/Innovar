import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img
            src={require('/Users/mateoperez/Documents/Web InnovAr/my-react-app copy/src/assets/Capa_1 (1).png')}
            alt="InnovAr Logo"
          />
        </div>
        <div className="menu-container">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#servicio" onClick={closeMenu}>Servicios</a></li>
            <li><a href="#latam" onClick={closeMenu}>LATAM</a></li>
            <li><a href="#clientes" onClick={closeMenu}>Clientes</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          </ul>
          <svg
            className={`ham hamRotate ham1 ${isOpen ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="55"
            onClick={toggleMenu}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
      </nav>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Header;
