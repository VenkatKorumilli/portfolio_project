import { Outlet } from "react-router-dom";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Sidebar />
      <div
        id="home"
        style={{
          marginLeft: "240px",
        }}
      >
        <Home></Home>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
