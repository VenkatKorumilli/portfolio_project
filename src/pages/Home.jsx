import React from "react";
import { ReactTyped } from "react-typed";


const Home = ({ isMobile }) => {
  return (
    <div
      className="d-flex home-bg justify-content-start align-items-center vh-100 home-section"
      style={{ gap: isMobile ? "1rem" : "2rem", padding: isMobile ? "10px" : "0" }}
    >
      <div style={isMobile ? { marginLeft: "15px", marginTop: "15px" } : { marginLeft: "35px" }}>
        <div className={isMobile ? "fs-3 fw-bold text-white" : "fs-1 fw-bold text-white"}>I'm Venkat</div>
        <div className="text-white fs-1">
          <h1 style={{ fontSize: isMobile ? "1.5rem" : "inherit" }}>
            I'm a{" "}
            <ReactTyped
              strings={["Frontend Developer", "Backend Developer", "Full-stack Developer"]}
              typeSpeed={100}
              backSpeed={50}
              loop
              cursorChar="|"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
