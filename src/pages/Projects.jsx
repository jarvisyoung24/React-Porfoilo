import React, { useState } from 'react';



const projectsData = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio website built with JavaScript, showcasing my skills and projects.',
      techStack: ['HTML', 'JavaScript', 'CSS'],
      githubLink: 'https://github.com/jarvisyoung24/body-boss',
      
    },
    {
      title: 'Generate Read Me',
      description: 'A read me generator using inquier.',
      techStack: [ 'Node.js', 'inquier'],
      githubLink: 'https://github.com/jarvisyoung24/Generate-Read-Me',
      
    },
    {
      title: 'Payroll generator',
      description: 'A generator that allows you to input employee information and generate a payroll.',
      techStack: ['HTML', 'JavaScript', 'CSS'],
      githubLink: 'https://github.com/jarvisyoung24/Pay-roll-generator-java-script',
    }, 

    {
      title: 'Work our tracker',
      description: 'A work out tracker that allows you to input your work out information and track your progress.',
      techStack: ['HTML', 'JavaScript', 'CSS'],
      githubLink: 'https://github.com/jarvisyoung24/body-boss',
    },
    {
      title: 'Car generator',
      description: 'A Car generator that allows you to input car information and generate a car.',
      techStack: ['HTML', 'Typescript', 'CSS'],
      githubLink: 'https://github.com/jarvisyoung24/Car-generator',
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information for any city.',
      techStack: ['HTML', 'Typescript', 'CSS'],
      githubLink: 'https://github.com/jarvisyoung24/Weather',
    },

    // Add more projects here
  ];
  
  const Projects = () => {
    return (
      <div className="container mt-5">
        <h1>My Projects</h1>
        <div className="projects-row">
          {projectsData.map((project, index) => (
            <><div className="col-md-4 mb-4" key={index}>
              <div className="card"></div></div><img src="" alt="" /><div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a> |
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"> Live Demo</a>
              </div></>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;