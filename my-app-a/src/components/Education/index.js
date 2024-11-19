import React from "react";

const Education = () => {
  return (
    <section className="education">
      <div className="header-education">
        <h2>EDUCATION</h2>
        <h2 className="number">03</h2>
      </div>
      <hr />
      <div className="timeline">
        <div className="entry">
          <h5>Klabat University</h5>
          <p>
            Current Education (2023 - Now)
            <br />
            Computer Science
          </p>
        </div>
        <div className="entry">
          <h5>Senior High School 1 Bitung</h5>
          <p>
            Previous Education (2019 - 2022)
            <br />
            Science and Math
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
