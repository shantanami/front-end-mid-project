<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="cv_mikha_style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <title>CV - Mikha</title>
  {/* Bagian Header */}
  <div className="atas">
    <h2>PROFILE</h2>
  </div>
  <div className="profile">
    <div className="photo">
      <img src="/image/mikha.jpg" alt="profile" />
      <div className="badge" />
    </div>
    <h1 id="nama">
      <span className="first-name">About</span>
      <br />
      <span className="last-name"> Mikha </span>
    </h1>
    <div className="profesi"> College Student</div>
    <nav className="email">
      <ul>
        <li>Full Name: Mikha Shantana Miracle Kussoy</li>
        <li>Address: Beringin Road, Girian, North Sulawesi</li>
        <li>Date of Birth: March, 31 2004</li>
        <li>Nationality: Indonesian</li>
        <li>Languages: Indonesian and English</li>
        <li>Phone: +6282114830406</li>
        <li>Email: mikhashantana@gmail.com</li>
      </ul>
    </nav>
  </div>
  <div className="more-info">
    <h2>MORE INFO</h2>
  </div>
  {/* Bagian Skills */}
  <section className="skills">
    <div className="header">
      <h2>Skills</h2>
      <h2 className="section-number">01</h2>
    </div>
    <hr />
    <div className="content">
      <h5>UI/UX Design</h5>
      <p>
        Skilled in using Figma to create interactive prototypes that show how
        designs work and look. Experienced in making wireframes, mockups, and
        clickable prototypes to test user experiences. Able to work with teams
        to improve designs based on feedback and make sure they meet project
        goals.
      </p>
      <h5>Multimedia and Editing</h5>
      <p>
        I have strong skills in multimedia and editing, with proficiency in
        using Canva to design visually appealing graphics, presentations, and
        marketing materials. I am experienced in creating custom layouts,
        selecting fonts, and editing images to produce high-quality content that
        aligns with brand guidelines and effectively communicates the intended
        message.
      </p>
      <h5>JavaScript</h5>
      <p>
        "Skilled in JavaScript, specializing in building React applications
        integrated with Firebase. Experienced in creating dynamic and responsive
        user interfaces, managing state, and handling real-time data with
        Firebase. Proficient in using modern ES6+ features for clean and
        efficient coding. Focused on delivering interactive, user-friendly web
        applications with a strong emphasis on performance and scalability."
      </p>
    </div>
  </section>
  <section className="education">
    <div className="header-education">
      <h2>EDUCATION</h2>
      <h2 className="number">03</h2>
    </div>
    <hr />
    <div className="timeline">
      <div className="entry">
        <h5>Klabat University</h5>
        <p>
          Current Education (2023 - Now)
          <br />
          Computer Science
        </p>
      </div>
      <div className="entry">
        <h5>Senior High School 1 Bitung</h5>
        <p>
          Previous Education (2019 - 2022)
          <br />
          Science and Math
        </p>
      </div>
    </div>
  </section>
  {/* Interest */}
  <section className="interests">
    <div className="header-interests">
      <h2>INTERESTS</h2>
      <h2 className="number">04</h2>
    </div>
    <hr />
    <div className="icons">
      <div className="icon">
        <img src="/image/Cam.jpg" alt="Interest1" />
        <p>Photography</p>
      </div>
      <div className="icon">
        <img src="/image/VideoEditing.png" alt="Interest2" />
        <p>Video Editing</p>
      </div>
      <div className="icon">
        <img src="/image/Animation.png" alt="Interest3" />
        <p>Animation</p>
      </div>
    </div>
  </section>
  <div className="judul-photography">
    <h2>PHOTOGRAPHY</h2>
  </div>
  {/* Bagian Photography */}
  <section className="photography">
    <div className="header-photography">
      <h2>My Collection</h2>
    </div>
    <hr />
    <div className="gallery">
      <div
        className="picture-card"
        style={{ backgroundImage: 'url("/image/Trailblazing.jpg")' }}
        onclick="showModal('Trailblazing.jpg')"
      ></div>
      <div
        className="picture-card"
        style={{ backgroundImage: 'url("/image/Yearning.jpg")' }}
        onclick="showModal('Yearning.jpg')"
      ></div>
      <div
        className="picture-card"
        style={{ backgroundImage: 'url("/image/Mystic Force.jpg")' }}
        onclick="showModal('Mystic Force.jpg')"
      ></div>
      <div
        className="picture-card"
        style={{ backgroundImage: 'url("/image/Yobel.jpg")' }}
        onclick="showModal('Yobel.jpg')"
      ></div>
    </div>
  </section>
  <div id="imageModal" className="modal" onclick="closeModal()">
    <span className="close">×</span>
    <img className="modal-content" id="modalImage" />
  </div>
  <section className="footer">
    <div className="header-footer">
      <h2>Social</h2>
    </div>
    <div className="content-foot"></div>
    <div className="sosmed">
      <a href="https://www.instagram.com/shhantana/#">
        <div
          className="icon-sosmed"
          style={{ backgroundImage: "url(/image/Insta.png)" }}
        ></div>
      </a>
      <a href="https://github.com/shantanami">
        <div
          className="icon-sosmed"
          style={{ backgroundImage: "url(/image/github_logo.png)" }}
        ></div>
      </a>
      <a href="https://wa.me/+6282114830406">
        <div
          className="icon-sosmed"
          style={{ backgroundImage: "url(/image/Wa.png)" }}
        ></div>
      </a>
    </div>
  </section>
</div>;
