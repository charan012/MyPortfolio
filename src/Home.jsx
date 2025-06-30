import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import "./Home.css";
import React from "react"; 
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div id="/" className="home-container">
        <div className="home text-white">
          <div className="container d-flex">
            <div className="home-text">
              <h1 className="fade-in-bottom">
                Hi, I'm <br /> Charan Kantamsetti
              </h1>

              <div className="fade-in-bottom-delayed">
                <h5 className="home-con">Full Stack Developer | UI Designer</h5>
                <hr className="home-hr" />
                <p className="home-description">
                  I design and develop modern, responsive web applications and
                  mobile platforms. <br />
                  Let's build something great together.
                </p>
                <div className="home-buttons">
                  <Link
                    to="/contact"
                    className="btn btn-outline-dark home-btn"
                    style={{ color: "#3dff98", fontWeight: "bold" }}
                    smooth={true}
                    duration={800}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="/about">
        <About />
      </div>

      <div id="/projects">
        <Projects />
      </div>

      <div id="/skills">
        <Skills />
      </div>

      <div className="wrapper">
        <div className="fixed-bg bg-2">
          <h1 className="qhr">❝</h1>
          <div className="quote-container">
            <p>
              ❝ The only thing we know about the future
              <br /> is that it will be different.❞
            </p>
            <hr className="hrr" />
            <span className="author">Peter Drucker</span>
          </div>
        </div>
      </div>

      <div id="/contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
