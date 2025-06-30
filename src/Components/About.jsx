import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <h1>About Me</h1>
      <div className="row align-items-center">
        <div className="col-md-6 about-image">
          <div className="image-wrapper">
            <img
              src="src/assets/images/About_Prof.jpg"
              alt="Profile"
              className="profile-image"
              loading="lazy"
            />
            <div className="green-border"></div>
          </div>
        </div>

        <div className="col-md-6 about-text">
          <h4 className="about-heading">
            A curious mind shaping ideas into interactive reality.
          </h4>
          <p>
            I'm a motivated Full Stack Developer with 8 months of hands-on
            experience in designing and building web applications. I’m
            proficient in both front-end and back-end technologies, with a
            strong grasp of database systems and responsive design principles.
            <br></br>I have experience developing and integrating client-server
            architectures and thrive in collaborative environments. With a solid
            foundation in software development, I’m eager to contribute to
            impactful projects and grow in a fast-paced, innovative setting.
          </p>

          <div className="timeline">
            <div className="timeline-row">
              <div className="timeline-item">
                <span className="year">
                  <span className="vertical-line"></span> 2019 - 2023
                </span>
                <div className="role">Amrita Vishwa VidyaPeetham</div>
                <p>B.Tech - CSE</p>
              </div>

              <div className="timeline-item">
                <span className="year">
                  <span className="vertical-line"></span> 2017 - 2019
                </span>
                <div className="role">Tirumala Junior College</div>
                <p>SSC - MPC</p>
              </div>
            </div>

            <div className="timeline-roww">
              <div className="timeline-item">
                <span className="year">
                  <span className="vertical-line"></span> 2014 - 2017
                </span>
                <div className="role">Bharatiya Vidya Bhavan's</div>
                <p>CBSE</p>
              </div>
            </div>
          </div>

          <button className="download-btn">
            <a
              href="public/CharanKResume.pdf"
              download="Charan_Resume.pdf"
              style={{ textDecoration: "none", color: "black" }}
            >
              Download CV <span>&#8595;</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
