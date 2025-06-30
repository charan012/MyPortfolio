import "./footer.css";
import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/Logo_Design.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-center-content">
        <div className="footer-brand-horizontal">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="brand-text">
            <h2 className="brand-name">Charan K</h2>
            <p className="brand-role">Full-Stack Web Developer</p>
          </div>
        </div>

        <ul className="footer-nav-links">
          <li><Link to="/" smooth={true} duration={800}>Home</Link></li>
          <li><Link to="/about" smooth={true} duration={800}>About</Link></li>
          <li><Link to="/project" smooth={true} duration={800}>Projects</Link></li>
          <li><Link to="/skills" smooth={true} duration={800}>Skills</Link></li>
          <li><Link to="/contact" smooth={true} duration={800}>Contact</Link></li>
        </ul>

        <p className="footer-description">
          A passionate developer building web experiences that blend design
          and functionality to bring ideas to life.
        </p>
      </div>

      <hr className="hrl" />
      
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} CharanKantamsetti. All rights reserved.
        </p>

          <div className="social-icons">
          <a href="https://x.com/home"><i className="fab fa-twitter" /></a>
          <a href="https://www.instagram.com/_charan.79/"><i className="fab fa-instagram" /></a>
          <a href="https://www.linkedin.com/in/charan-kantamsetty/"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
