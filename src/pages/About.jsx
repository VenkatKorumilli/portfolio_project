import React from 'react';

const About = ({ isMobile }) => (
  <div
    className='container'
    style={isMobile ? { padding: '2rem' } : { marginLeft: '250px', padding: '2rem' }}
  >
    <div className='fs-2 fw-bold mb-4'>About</div>
    <div className='fs-5 px-3'>
      Creative full-stack developer with hands-on experience in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built many impactful projects including e-commerce and real-time apps—always focused on clean code and modern design.
    </div>
  </div>
);

export default About;
