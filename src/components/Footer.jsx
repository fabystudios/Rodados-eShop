import React from 'react';
// import './Footer.css'; 
// Personalizá estilos si querés
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import "../styles/style.css"; 
import logo from '../assets/mascota.png';  
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="logo" style={{ width: '10%' }} />
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Rodados eShop. <br />Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
