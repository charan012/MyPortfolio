import { Link } from "react-scroll";
import "./Nav.css";
import React from "react"; 
import logo from "../assets/images/Logo_Design.png";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  useEffect(() => {
    const logoTooltip = document.querySelector('[data-bs-toggle="tooltip"]');
    if (logoTooltip) {
      new window.bootstrap.Tooltip(logoTooltip);
    }
  }, []);

  return (
    <nav className="navbar navbar-default navbar-expand-lg nav-menu">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Home"
        >
          <img src={logo} alt="Logo" style={{ height: "45px" }} />
        </Link>

        <button
          className="navbar-toggler nav-button"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <div className="line1 ham"></div>
          <div className="line2 ham"></div>
          <div className="line3 ham"></div>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="myNavbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link m-2 menu-item ln"
                to="/"
                smooth={true}
                duration={800}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link m-2 menu-item ln"
                to="/about"
                smooth={true}
                duration={800}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link m-2 menu-item ln"
                to="/projects"
                smooth={true}
                duration={800}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link m-2 menu-item ln"
                to="/skills"
                smooth={true}
                duration={800}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link m-2 menu-item ln"
                to="/contact"
                smooth={true}
                duration={800}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
