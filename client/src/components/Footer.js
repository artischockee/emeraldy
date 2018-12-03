import React from 'react';
// import { Route } from 'react-router-dom';

const Footer = ({ value, increment, decrement, nullify }) => (
  <footer className="footer">
    <div className="section-wrapper">
      <div className="footer__credits">
        <p>Proudly made by @artischocke</p>
        <p>&copy; 2018</p>
      </div>
    </div>
  </footer>
);

export default Footer;