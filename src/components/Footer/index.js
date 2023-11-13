import React from 'react';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="social-links">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-play"></i>
      </div>
    </footer>
  );
}

export default Footer;