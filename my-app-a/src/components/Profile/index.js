import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="photo">
        <img src="/images/Profile.jpg" alt="profile" />
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
  );
};

export default Profile;
