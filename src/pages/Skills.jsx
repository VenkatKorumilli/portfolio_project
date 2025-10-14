import React from 'react';

const skills = [
  { src: '/html-5.png', label: 'HTML' },
  { src: '/css-3.png', label: 'CSS' },
  { src: '/js.png', label: 'JavaScript' },
  { src: '/react.png', label: 'React.js' },
  { src: '/node.png', label: 'Node.js' },
  { src: '/express.png', label: 'Express.js' },
  { src: '/mongodb-icon.webp', label: 'MongoDB' }
];

const Skills = () => (
  <div className="container" style={{ marginLeft: '250px', padding: '1.5rem 2rem', marginTop: "30px" }}>
    <h2 className="mb-3 fw-bold">My Technical Skills</h2>
    <p className="mb-4 text-muted fs-5">
      I have experience working with modern web technologies spanning frontend and backend development.
      These skills enable me to build responsive and dynamic full-stack applications.
    </p>
    <div className="row text-center g-3">
      {skills.map(({ src, label }) => (
        <div key={label} className="col-6 col-md-3 col-lg-2 d-flex flex-column align-items-center">
          <img src={src} alt={label} className="img-fluid rounded mb-2" style={{ maxHeight: '85px' }} />
          <div className="fw-semibold fs-6">{label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
