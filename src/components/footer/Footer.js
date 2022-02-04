import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Nicolás Capell</h1>
        <p>Córdoba Capital, Argentina</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        <p>nicocapell@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Capell</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/nicol%C3%A1s-gabriel-capell-4220751b4/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;