import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const [isMobile] = useState(window.outerWidth <= 500);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {(!isMobile || isSidebarOpen) && (
        <Sidebar
          isMobile={isMobile}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      <div
        id="home"
        style={{
          marginLeft: isMobile ? "0" : "250px",
        }}
      >
        {isMobile && (
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        )}
        <Home isMobile={isMobile} />
      </div>

      <div id="about">
        <About isMobile={isMobile} />
      </div>

      <div id="skills">
        <Skills isMobile={isMobile} />
      </div>

      <div id="projects">
        <Project isMobile={isMobile} />
      </div>

      <div id="contact">
        <Contact isMobile={isMobile} />
      </div>
    </div>
  );
}

export default App;
