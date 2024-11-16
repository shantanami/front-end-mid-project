import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-full">
          <ul className="footer-social">
            <li>
              <a
                href="https://www.instagram.com/shhantana"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shantanami"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <i className="im im-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
