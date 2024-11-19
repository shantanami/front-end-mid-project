import React from "react";

import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda
import { Fade } from "react-awesome-reveal";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const profileRef = ref(database, "profile/");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);

  return (
    <div className="profile">
      <div className="photo">
        <img
          src={`data:image/jpeg;base64, ${profile.imageProfile}`}
          alt="Profile"
        />
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
          <li>{profile.fullName}</li>
          <li>{profile.address}</li>
          <li>{profile.dateOfBirth}</li>
          <li>{profile.nationality}</li>
          <li>{profile.languages}</li>
          <li>{profile.phone}</li>
          <li>{profile.email}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
