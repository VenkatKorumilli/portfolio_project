import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./pages/Skills.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
const router = createBrowserRouter([
{
path:"/",
element:<App></App>,
children:[
{
index:true,
element:<Home/>
},
{
path:"/about",
element:<About/>
},
{
path:"/skills",
element:<Skills/>
},
{
path:"/project",
element:<Project/>
},
{
path:"/contact",
element:<Contact/>
},
]
}
])

createRoot(document.getElementById("root")).render(
<RouterProvider router={router}>
</RouterProvider>
)
;
