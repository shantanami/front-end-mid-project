const Works = () => {
  return (
    <section id="works" className="s-works target-section">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Additional Portfolio</h3>
          <h1>See My Projects</h1>

          <p className="lead">
            Avid photographer with a love for storytelling through images and an
            eye for composition.
          </p>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry">
          {/* Item 1 */}
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
                    srcSet="images/partytonight.jpg 1x, images/partytonight@2x.jpg 2x"
                    alt=""
                  />
                  <span className="shadow-overlay"></span>
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
                <i className="im im-link"></i>
              </a>

              <div className="item-folio__caption">
                <p>A night to remember.</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
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
                    alt=""
                  />
                  <span className="shadow-overlay"></span>
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
                <i className="im im-link"></i>
              </a>

              <div className="item-folio__caption">
                <p>
                  Staring at the moonlit waves, I felt a deep yearning for a
                  world beyond the horizon, where dreams and reality intertwine
                  like the endless ocean at night.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
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
                    alt=""
                  />
                  <span className="shadow-overlay"></span>
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
                <i className="im im-link"></i>
              </a>

              <span className="item-folio__caption">
                <p>Like some kind of magnet, you're a mystic force.</p>
              </span>
            </div>
          </div>

          {/* Item 4 */}
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
                    alt=""
                  />
                  <span className="shadow-overlay"></span>
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
                <i className="im im-link"></i>
              </a>

              <span className="item-folio__caption">
                <p>Tranquil atmosphere.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
