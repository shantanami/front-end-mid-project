import React from "react";

const Interest = () => {
  return (
    <section className="interests">
      <div className="header-interests">
        <h2>INTERESTS</h2>
        <h2 className="number">04</h2>
      </div>
      <hr />
      <div className="icons">
        <div className="icon">
          <img src="/images/Cams.jpg" alt="Interest1" />
          <p>Photography</p>
        </div>
        <div className="icon">
          <img src="/images/VideoEditing.png" alt="Interest2" />
          <p>Video Editing</p>
        </div>
        <div className="icon">
          <img src="/images/Animation.png" alt="Interest3" />
          <p>Animation</p>
        </div>
      </div>
    </section>
  );
};

export default Interest;
