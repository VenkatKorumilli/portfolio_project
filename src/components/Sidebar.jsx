import React, { useState } from "react";

const Sidebar = ({ isMobile, setIsSidebarOpen }) => {
  const [active, setActive] = useState("home");

  return (
    <div
      className="sidebar d-flex flex-column justify-content-start align-items-start vh-100 p-3 text-light"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "250px",
        zIndex: 1040,
      }}
    >
      <div className="d-flex justify-content-between w-100 align-items-center mb-4">
        <div className="fw-bold fs-3 navbar-brand text-light">
          My <span className="sidebar-name text-light">Portfolio</span>
        </div>
        {isMobile && (
          <i
            className="bi bi-x fs-1 text-light"
            style={{ cursor: "pointer" }}
            onClick={() => setIsSidebarOpen(false)} // close sidebar
          ></i>
        )}
      </div>

      <hr style={{ borderTop: "1px solid #f8f9fa", width: "100%" }} />

      {[
        "home",
        "about",
        "skills",
        "projects",
        "contact"
      ].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`sidebar-btn mb-3 text-decoration-none fs-5 text-light ${
            active === item ? "active" : ""
          }`}
          onClick={() => {
            setActive(item);
            if (isMobile) setIsSidebarOpen(false); // auto-close on mobile nav
          }}
        >
          <span className="ms-1 text-capitalize">{item}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
