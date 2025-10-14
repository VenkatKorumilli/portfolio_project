import React from 'react';

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-featured MERN stack e-commerce platform with product browsing, shopping cart, secure user login, and admin panel.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT","Bootstrap"],
    link: ""
  },
  {
  title: "Leads Management System",
  description: "Comprehensive web application to manage leads with features like status updates, secure user authentication, and admin panel.",
  techStack: ["MongoDB", "Express", "React", "Node.js", "JWT","Bootstrap"],
  link: ""
  },

  {
    title: "Portfolio Website",
    description: "A responsive and interactive personal portfolio site to showcase projects, skills, and contact details.",
    techStack: ["React", "Bootstrap", "Express","MongoDB"],
    link: ""
  }
];

const Project = () => (
  <div className="container py-5" style={{ marginLeft: "270px" }}>
    <h2 className="fw-bold mb-5 text-start">My Projects</h2>
    <div className="row g-6">
      {projects.map(({ title, description, techStack, link }, idx) => (
        <div className="col-12 col-md-6 col-lg-3" key={idx}>
          <div className="card h-100 shadow-sm border-0 rounded-4 project-card">
          
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">{title}</h5>
              <p className="card-text text-secondary">{description}</p>
              
              <div className="mb-3">
                <strong className="text-muted small">Tech Stack:</strong>
                <ul className="list-inline mt-1">
                  {techStack.map((tech, i) => (
                    <li key={i} className="list-inline-item badge bg-light text-dark border me-1 mb-1">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto rounded-pill px-4"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
