import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [isMobile, setIsmobile] = useState();
    
  useEffect(() => {
    if (window.outerWidth <= 500) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  }, [window]);

  function close(){
  
  }

  return (
    <div
      className="sidebar d-flex flex-column justify-content-start align-items-start vh-100 p-3"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "250px",
        zIndex: 1040,
      }}
    >    
      <div className="d-flex gap-5 ">
      <div className="fw-bold fs-3 navbar-brand mb-4 text-light">
          My <span className="sidebar-name text-light">Portfolio</span>
        </div>
        <div>
        {
        isMobile ? <i className="bi bi-x fs-1 text-light" onClick={()=>{close()}}></i> : ""
        }
        </div>
      </div>
      <hr style={{ borderTop: '1px solid #f8f9fa' }} />

      <a
        href="#home"
        className={`sidebar-btn mb-3 text-decoration-none fs-5  ${
          active === "home" ? " active" : ""
        }`}
        onClick={() => setActive("home")}
      >
        <span className="ms-1">Home</span>
      </a>
      <a
        href="#about"
        className={`sidebar-btn mb-3 text-decoration-none fs-5${
          active === "about" ? " active" : ""
        }`}
        onClick={() => setActive("about")}
      >
        <span className="ms-1">About</span>
      </a>
      <a
        href="#skills"
        className={`sidebar-btn mb-3 text-decoration-none fs-5${
          active === "skills" ? " active" : ""
        }`}
        onClick={() => setActive("skills")}
      >
        <span className="ms-1">Skills</span>
      </a>
      <a
        href="#projects"
        className={`sidebar-btn mb-3 text-decoration-none fs-5${
          active === "projects" ? " active" : ""
        }`}
        onClick={() => setActive("projects")}
      >
        <span className="ms-1">Projects</span>
      </a>
      <a
        href="#contact"
        className={`sidebar-btn text-decoration-none fs-5${
          active === "contact" ? " active" : ""
        }`}
        onClick={() => setActive("contact")}
      >
        <span className="ms-1">Contact</span>
      </a>
    </div>
    

  );
};

export default Sidebar;
