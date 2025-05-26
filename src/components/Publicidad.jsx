import React from 'react';
import publicidadImg from '../assets/publicidad.jpeg';  
import '../styles/style.css';  


const Publicidad = () => {
return (
    <section className="publicidad" style={{ backgroundColor: 'black'}}>
        <img
            src={publicidadImg}
            alt="Publicidad"
            style={{ width: '100%', maxWidth: '1200px', borderRadius: '15px', background: 'black' }}
        />
    </section>
);
};

export default Publicidad;
