import React from "react";

import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const skillsRef = ref(database, "skills/");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);

  return (
    <section className="skills">
      <div className="header">
        <h2>Skills</h2>
        <h2 className="section-number">01</h2>
      </div>
      <hr />
      <div className="content">
        <h5>UI/UX Design</h5>
        <p>{skills.figma}</p>
        <h5>Multimedia and Editing</h5>
        <p>{skills.multimediaEditing}</p>
        <h5>JavaScript</h5>
        <p>{skills.js}</p>
      </div>
    </section>
  );
};

export default Skills;
