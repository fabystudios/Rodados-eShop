import React from 'react';
import publicidadImg from '../assets/publicidad.jpeg';  
import '../styles/style.css';  

const Main = () => {
  return (
    <section className="publicidad">
      <img
        src={publicidadImg}
        alt="Publicidad"
        className="publicidad-img"
      />
    </section>
  );
};

export default Main;