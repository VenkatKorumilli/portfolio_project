import React from "react";
import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <div 
      className="d-flex home-bg justify-content-start align-items-center vh-100 home-section"
      style={{ gap: "2rem"}} 
    >
      <div style={{marginLeft:"35px"}}>
        <div className="fs-1 text-white fw-bold">I'm Venkat</div>
        <div className="text-white">
          <h1>
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
