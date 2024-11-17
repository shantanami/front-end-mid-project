<div>
  {/*[if lt IE 9]><html class="no-js oldie" lang="en"> <![endif]*/}
  {/*[if IE 9]><html class="no-js oldie ie9" lang="en"> <![endif]*/}
  {/*[if (gte IE 9)|!(IE)]><!*/}
  {/*<![endif]*/}
  {/*- basic page needs
    ================================================== */}
  <meta charSet="utf-8" />
  <title>Mikha's</title>
  <meta name="description" content />
  <meta name="author" content />
  {/* mobile specific metas
    ================================================== */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* CSS
    ================================================== */}
  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/vendor.css" />
  <link rel="stylesheet" href="css/main.css" />
  {/* script
    ================================================== */}
  {/* favicons
    ================================================== */}
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  {/* header
    ================================================== */}
  <header className="s-header">
    <nav className="header-nav-wrap">
      <ul className="header-nav">
        <li className="current">
          <a className="smoothscroll" href="#home" title="home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about" title="about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#works" title="works">
            Works
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact" title="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <a className="header-menu-toggle" href="#0">
      <span>Menu</span>
    </a>
  </header>
  {/* end s-header */}
  {/* home
   ================================================== */}
  <section
    id="home"
    className="s-home page-hero target-section"
    data-parallax="scroll"
    data-image-src="images/bgl.jpg"
    data-natural-width={3000}
    data-natural-height={2000}
    data-position-y="center"
  >
    <div className="overlay" />
    <div className="shadow-overlay" />
    <div className="home-content">
      <div className="row home-content__main">
        <h3>Hello There</h3>
        <h1>
          I am Mikha, <br />
          an active student <br />
          based at The University of Klabat.
        </h1>
        <div className="home-content__buttons">
          <a href="#works" className="smoothscroll btn btn--stroke">
            Latest Projects
          </a>
          <a href="#about" className="smoothscroll btn btn--stroke">
            More About Me
          </a>
        </div>
        <div className="home-content__scroll">
          <a href="#about" className="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
    </div>
    {/* end home-content */}
    {/* end home-social */}
  </section>
  {/* end s-home */}
  {/* About */}
  <section id="about" className="s-about target-section">
    <div className="row narrow section-intro has-bottom-sep">
      <div className="col-full text-center">
        <h3>About</h3>
        <h1>More About Me</h1>
        <div style={{ textAlign: "center" }}>
          <img
            src="images/aboutme.jpg"
            alt="Mikha Kussoy"
            style={{ width: 450, height: 200, marginBottom: 20 }}
          />
        </div>
      </div>
    </div>
    <div className="row about-content">
      <div className="col-six tab-full left">
        <h3>Personal Information</h3>
        <ul style={{ fontSize: 15 }}>
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
        {/* Space below email address */}
        <div style={{ marginTop: 20 }}>
          {/* Paragraph for "I am passionate..." text with adjusted font size */}
          <p className="lead" style={{ fontSize: 15, marginTop: 0 }}>
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
    {/* Timeline Section */}
    <div className="row about-content about-content--timeline">
      <div className="col-full text-center">
        <h3>Education</h3>
      </div>
      <div className="col-six tab-full left">
        <div className="timeline">
          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <p className="timeline__timeframe">Previous (2019 - 2022)</p>
              <h3>Senior High School 1 Bitung</h3>
              <h5>Major: Science</h5>
            </div>
            <div className="timeline__desc">
              <p>Wolter Monginsidi Road, Bitung, North Sulawesi.</p>
            </div>
          </div>
          {/* More timeline blocks here */}
        </div>
      </div>
      <div className="col-six tab-full right">
        <div className="timeline">
          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <p className="timeline__timeframe">Current (2023 - Now)</p>
              <h3>The University of Klabat</h3>
              <h5>Major: Informatics</h5>
            </div>
            <div className="timeline__desc">
              <p>Arnold Mawuntu Road, Airmadidi, North Sulawesi.</p>
            </div>
          </div>
          {/* More timeline blocks here */}
        </div>
        {/* Buttons Section */}
        <div
          className="row about-content about-content--buttons"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
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
  {/* About */}
  {/* works
    ================================================== */}
  <section id="works" className="s-works target-section">
    <div className="row narrow section-intro has-bottom-sep">
      <div className="col-full">
        <h3>Additional Portofolio</h3>
        <h1>See My Projects</h1>
        <p className="lead">
          Avid photographer with a love for storytelling through images and an
          eye for composition.
        </p>
      </div>
    </div>
    <div className="row masonry-wrap">
      <div className="masonry">
        <div className="masonry__brick">
          <div className="item-folio">
            <div className="item-folio__thumb">
              <a
                href="images/partytonight.jpg"
                className="thumb-link"
                title="partytonight"
                data-size="1050x1500"
              >
                <img
                  src="images/partytonight.jpg"
                  srcSet="
                images/partytonight.jpg    1x,
                images/partytonight@2x.jpg 2x
              "
                  alt
                />
                <span className="shadow-overlay" />
              </a>
            </div>
            <div className="item-folio__text">
              <h3 className="item-folio__title">Trailblazing</h3>
            </div>
            <a
              href="https://www.behance.net/"
              className="item-folio__project-link"
              title="Project link"
            >
              <i className="im im-link" />
            </a>
            <div className="item-folio__caption">
              <p>A night to remember.</p>
            </div>
          </div>
          {/* end item-folio */}
        </div>
        {/* end masonry__brick */}
        <div className="masonry__brick">
          <div className="item-folio">
            <div className="item-folio__thumb">
              <a
                href="images/yr.jpg"
                className="thumb-link"
                title="Yearning"
                data-size="1050x1500"
              >
                <img
                  src="images/yr.jpg"
                  srcSet="images/yr.jpg 1x, images/yr@2x.jpg 2x"
                  alt
                />
                <span className="shadow-overlay" />
              </a>
            </div>
            <div className="item-folio__text">
              <h3 className="item-folio__title">Yearning</h3>
            </div>
            <a
              href="https://www.behance.net/"
              className="item-folio__project-link"
              title="Project link"
            >
              <i className="im im-link" />
            </a>
            <div className="item-folio__caption">
              <p>
                Staring at the moonlit waves, I felt a deep yearning for a world
                beyond the horizon, where dreams and reality intertwine like the
                endless ocean at night.
              </p>
            </div>
          </div>
          {/* end item-folio */}
        </div>
        {/* end masonry__brick */}
        <div className="masonry__brick">
          <div className="item-folio">
            <div className="item-folio__thumb">
              <a
                href="images/pr.jpg"
                className="thumb-link"
                data-size="1050x1500"
              >
                <img
                  src="images/pr.jpg"
                  srcSet="images/pr.jpg 1x, images/pr@2x.jpg 2x"
                  alt
                />
                <span className="shadow-overlay" />
              </a>
            </div>
            <div className="item-folio__text">
              <h3 className="item-folio__title">Mystic Force</h3>
            </div>
            <a
              href="https://www.behance.net/"
              className="item-folio__project-link"
              title="Project link"
            >
              <i className="im im-link" />
            </a>
            <span className="item-folio__caption">
              <p>Like some kind of magnet, you're a mystic force.</p>
            </span>
          </div>
          {/* end item-folio */}
        </div>
        {/* end masonry__brick */}
        <div className="masonry__brick">
          <div className="item-folio">
            <div className="item-folio__thumb">
              <a
                href="images/yb.jpg"
                className="thumb-link"
                data-size="1050x1500"
              >
                <img
                  src="images/yb.jpg"
                  srcSet="images/yb.jpg 1x, images/yb@2x.jpg 2x"
                  alt
                />
                <span className="shadow-overlay" />
              </a>
            </div>
            <div className="item-folio__text">
              <h3 className="item-folio__title">Yobel</h3>
            </div>
            <a
              href="https://www.behance.net/"
              className="item-folio__project-link"
              title="Project link"
            >
              <i className="im im-link" />
            </a>
            <span className="item-folio__caption">
              <p>Tranquil atmosphere.</p>
            </span>
          </div>
          {/* end item-folio */}
        </div>
        {/* end masonry__brick */}
      </div>
    </div>
    {/* end masonry */}
  </section>
  {/* end works */}
  {/* s-stats
    ================================================== */}
  <section id="contact" className="s-contact target-section">
    <div className="overlay" />
    <div className="row narrow section-intro">
      <div className="col-full">
        <h3>Contact</h3>
        <h1>Say Hello.</h1>
        <h3>Phone: +6282114830406</h3>
        <h3>Email: mikhashantana@gmail.com</h3>
      </div>
    </div>
  </section>
  {/* end s-contact */}
  {/* footer
================================================== */}
  <footer>
    <div className="row">
      <div className="col-full">
        <ul className="footer-social">
          <li>
            <a href="https://www.instagram.com/shhantana" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/shantanami" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row footer-bottom">
      <div className="col-twelve">
        <div className="copyright">
          <span>Copyright © 2024 by Mikha. All rights reserved.</span>
        </div>
        <div className="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="im im-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
    {/* end footer-bottom */}
  </footer>
  {/* end footer */}
  {/* photoswipe background
    ================================================== */}
  <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
    <div className="pswp__bg" />
    <div className="pswp__scroll-wrap">
      <div className="pswp__container">
        <div className="pswp__item" />
        <div className="pswp__item" />
        <div className="pswp__item" />
      </div>
      <div className="pswp__ui pswp__ui--hidden">
        <div className="pswp__top-bar">
          <div className="pswp__counter" />
          <button
            className="pswp__button pswp__button--close"
            title="Close (Esc)"
          />
          <button className="pswp__button pswp__button--share" title="Share" />
          <button
            className="pswp__button pswp__button--fs"
            title="Toggle fullscreen"
          />
          <button
            className="pswp__button pswp__button--zoom"
            title="Zoom in/out"
          />
          <div className="pswp__preloader">
            <div className="pswp__preloader__icn">
              <div className="pswp__preloader__cut">
                <div className="pswp__preloader__donut" />
              </div>
            </div>
          </div>
        </div>
        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div className="pswp__share-tooltip" />
        </div>
        <button
          className="pswp__button pswp__button--arrow--left"
          title="Previous (arrow left)"
        />
        <button
          className="pswp__button pswp__button--arrow--right"
          title="Next (arrow right)"
        />
        <div className="pswp__caption">
          <div className="pswp__caption__center" />
        </div>
      </div>
    </div>
  </div>
  {/* end photoSwipe background */}
  <div id="preloader">
    <div id="loader" />
  </div>
  {/* Java Script
    ================================================== */}
</div>;
