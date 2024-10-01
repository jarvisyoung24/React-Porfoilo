import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Current student</h3>
          <p>June 2024 - Present</p>
          <p>Responsible for fullstack web development projects, working with others and problem solving</p>
        </div>
        {/* <div className="resume-item">
          <h3>Frontend Developer at ABC Inc</h3>
          <p>Jan 2021 - May 2022</p>
          <p>Built responsive and dynamic user interfaces using React and Bootstrap.</p>
        </div> */}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>High school diploma</h3>
          <p>XYZ University, 2018 - 2022</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Redux</li>
          <li>Node.js, Express</li>
          <li>MongoDB, MySQL</li>
          <li>HTML5, CSS3, Bootstrap</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <div className="resume-item">
          <h3>Full-Stack Web Development Bootcamp</h3>
          <p>Completed a 12-week coding bootcamp focused on JavaScript, React, and backend technologies.</p>
        </div>
      </section>

    </div>
  );
};

export default Resume;