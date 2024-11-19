import React from "react";

const Photography = () => {
  return (
    <section className="photography">
      <div className="header-photography">
        <h2>My Collection</h2>
      </div>
      <hr />
      <div className="gallery">
        <div
          className="picture-card"
          style={{ backgroundImage: 'url("/images/Trailblazing.jpg")' }}
          onclick="showModal('Trailblazing.jpg')"
        ></div>
        <div
          className="picture-card"
          style={{ backgroundImage: 'url("/images/Yearning.jpg")' }}
          onclick="showModal('Yearning.jpg')"
        ></div>
        <div
          className="picture-card"
          style={{ backgroundImage: 'url("/images/Mystic_Force.jpg")' }}
          onclick="showModal('Mystic Force.jpg')"
        ></div>
        <div
          className="picture-card"
          style={{ backgroundImage: 'url("/images/Yobel.jpg")' }}
          onclick="showModal('Yobel.jpg')"
        ></div>
      </div>
    </section>
  );
};

export default Photography;
