import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="header-footer">
        <h2>Social</h2>
      </div>
      <div className="content-foot"></div>
      <div className="sosmed">
        <a href="https://www.instagram.com/shhantana/#">
          <div
            className="icon-sosmed"
            style={{ backgroundImage: "url(/images/Ig.png)" }}
          ></div>
        </a>
        <a href="https://github.com/shantanami">
          <div
            className="icon-sosmed"
            style={{ backgroundImage: "url(/images/Github.png)" }}
          ></div>
        </a>
        <a href="https://wa.me/+6282114830406">
          <div
            className="icon-sosmed"
            style={{ backgroundImage: "url(/images/Wa.png)" }}
          ></div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
