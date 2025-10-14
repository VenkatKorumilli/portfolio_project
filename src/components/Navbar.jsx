import React from 'react';

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: '#ffffff', 
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1030, // Ensure it's above other content
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span
          className="navbar-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '30px',
            color: '#2c3e50',
          }}
        >
          Venkat
        </span>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
