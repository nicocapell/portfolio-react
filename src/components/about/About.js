import React from 'react';
import './About.css';



const About = () => {
  return (
  
  <div className='about-container'>
      <div className='about-desc'>
          <h3>
              Algo sobre mí
          </h3>
          <p> 
          Diseñar prototipos con conocimiento básicos de UX para una web. 
          Frameworks y SASS.
          Crear y realizar mantenimiento a una página y aplicación web. 
          Asesoramiento a lo que el cliente necesite.
          Optimizar estilos de páginas web. Trabajo en equipo, usando un controlador de versiones y manejo de repositorio. Manejar un servidor y configurarlos con el dominio al que debe apuntar. 
          Conocimientos básicos de SEO y Seguridad Web.

          JavaScript

          React Js

          </p>
      </div>


      <div className='about-edu'>
          <h2>Educación</h2>
          <ul>
              <li>
              Instituto Privado Diocesano Dr Alexis Carrel. Bachiller en Economía y Administración.
2011-2016
              </li>
              <li>
              Universidad Nacional de Córdoba. 
              Licenciatura en Cine y Televisión
2017-Actualidad
              </li>
          </ul>
      </div>


      <div className='about-certi' > 

      <h2>Certificaciones</h2>

      <ul> 

        <li>Desarrollo web. Coderhouse </li>
        <li>JavaScript. Coderhouse</li>
        <li>ReactJs. Corderhouse</li>
        <li> Aprende SCRUM. LinkedIn Learning </li>
        <li> GitHub para programadores. LinkedIn Learning </li>
        <li> JavaScript esencial. LinkedIn Learning </li>
        <li> Fundamentos del desarrollo web: Full Stack o Front-end. LinkedIn Learning </li>

      </ul>
      

      </div>

  


  </div>
  
  );
};

export default About;
