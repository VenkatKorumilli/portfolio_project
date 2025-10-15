import React from 'react';

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: '#3d6491ff', 
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1030, 
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span
          className="navbar-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '30px',
            color: 'white',
          }}
        >
          Venkat
        </span>
     <button
  className="navbar-toggler"
  type="button"
  aria-label="Toggle navigation"
  aria-controls="sidebarMenu"
  aria-expanded="false"
  onClick={() => setIsSidebarOpen(true)}
>
  <span 
    className="navbar-toggler-icon" 
    style={{ filter: 'invert(1) brightness(2)' }}
  ></span>
</button>

      </div>
    </nav>
  );
};

export default Navbar;
