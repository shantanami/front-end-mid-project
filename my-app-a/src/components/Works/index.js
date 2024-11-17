import React from "react";

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
                  href="images/Trailblazing.jpg"
                  className="thumb-link"
                  data-size="1050x1500"
                >
                  <img
                    src="images/Trailblazing.jpg"
                    srcSet="images/Trailblazing.jpg 1x, images/Trailblazing@2x.jpg 2x"
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
                  href="images/Yearning.jpg"
                  className="thumb-link"
                  data-size="1050x1500"
                >
                  <img
                    src="images/Yearning.jpg"
                    srcSet="images/Yearning.jpg 1x, images/Yearning@2x.jpg 2x"
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
                  href="images/Mystic Force.jpg"
                  className="thumb-link"
                  data-size="1050x1500"
                >
                  <img
                    src="images/Mystic Force.jpg"
                    srcSet="images/Mystic Force.jpg 1x, images/Mystic Force@2x.jpg 2x"
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
                  href="images/Yobel.jpg"
                  className="thumb-link"
                  data-size="1050x1500"
                >
                  <img
                    src="images/Yobel.jpg"
                    srcSet="images/Yobel.jpg 1x, images/Yobel@2x.jpg 2x"
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
