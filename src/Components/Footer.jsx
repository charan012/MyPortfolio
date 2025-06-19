import "./footer.css";
import React from "react"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <hr className="hrl" />
      <div className="footer-bottom">
        <p style={{ color: "#a0a0a0" }}>
          &copy; {new Date().getFullYear()} CharanKantamsetti. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
