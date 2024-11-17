import React from "react";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full text-center">
          <h3>About</h3>
          <h1>More About Me</h1>
          <div style={{ textAlign: "center" }}>
            <img
              src="images/Mikha.jpg"
              alt="Mikha Kussoy"
              style={{ width: "450px", height: "200px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full left">
          <h3>Personal Information</h3>
          <ul style={{ fontSize: "15px" }}>
            <li>
              <strong>Full Name:</strong> Mikha Shantana Miracle Kussoy
            </li>
            <li>
              <strong>Date of Birth:</strong> March 31, 2004
            </li>
            <li>
              <strong>Place of Birth:</strong> Bitung, North Sulawesi
            </li>
            <li>
              <strong>Gender:</strong> Female
            </li>
            <li>
              <strong>Nationality:</strong> Indonesian
            </li>
            <li>
              <strong>Address:</strong> Beringin Road, Girian Weru II
            </li>
          </ul>

          <div style={{ marginTop: "20px" }}>
            <p className="lead" style={{ fontSize: "15px", marginTop: 0 }}>
              I am passionate about exploring new ideas, continuously learning,
              and applying creativity in everything I do. My journey has been
              shaped by diverse experiences that have helped me grow both
              personally and professionally. Whether it's through academic
              achievements or hands-on projects, I strive to push boundaries and
              innovate. With a focus on design, technology, and collaboration, I
              aim to contribute meaningfully to the world around me.
            </p>
          </div>
        </div>

        <div className="col-six tab-full right">
          <h3>Skills</h3>
          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>JS</strong>
            </li>
            <li>
              <div className="progress percent95">
                <span>95%</span>
              </div>
              <strong>Python</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>HTML/CSS</strong>
            </li>
            <li>
              <div className="progress percent95">
                <span>95%</span>
              </div>
              <strong>Photography</strong>
            </li>
            <li>
              <div className="progress percent75">
                <span>75%</span>
              </div>
              <strong>Illustrative Sketching</strong>
            </li>
            <li>
              <div className="progress percent80">
                <span>80%</span>
              </div>
              <strong>Video Editing</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="row about-content about-content--timeline">
        <div className="col-full text-center">
          <h3>Education</h3>
        </div>

        <div className="col-six tab-full left">
          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">Previous (2019 - 2022)</p>
                <h3>Senior High School 1 Bitung</h3>
                <h5>Major: Science</h5>
              </div>
              <div className="timeline__desc">
                <p>Wolter Monginsidi Road, Bitung, North Sulawesi.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-six tab-full right">
          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">Current (2023 - Now)</p>
                <h3>The University of Klabat</h3>
                <h5>Major: Informatics</h5>
              </div>
              <div className="timeline__desc">
                <p>Arnold Mawuntu Road, Airmadidi, North Sulawesi.</p>
              </div>
            </div>
          </div>

          <div
            className="row about-content about-content--buttons"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              className="col-six tab-full"
              style={{ textAlign: "center", display: "inline-block" }}
            >
              <a
                href="#0"
                className="btn btn--primary"
                style={{ width: "auto", display: "inline-block" }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
