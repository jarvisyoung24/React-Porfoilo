import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
      </header>
      <section className="about-content">
        <p>
          Hello! I am a full-stack developer with a passion for creating! i have always have a passion for creating and i am always looking for new ways to express my creativity.
           I am a fast learner and i am a great team player! I am always looking for new ways to improve my skills.
           I joined a coding bootcamp to learn more about coding and the industry as a whole
           i am very determined, motivated and will always go above and beyond to get the job done.
        </p>
        {/* <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="team-member1.jpg" // Replace with actual image paths
              alt="Team Member 1"
              className="team-member-image"
            />
            {/* <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img
              src="team-member2.jpg" // Replace with actual image paths
              alt="Team Member 2"
              className="team-member-image"
            />
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
          {/* Add more team members as needed */}
        {/* </div> */} 
      </section>
      {/* <footer className="about-footer">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default About;