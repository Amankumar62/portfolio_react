import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
function App() {
  const activeStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive && "#65B891",
      borderRadius: "10px",
      textAlign: "center",
      color: isActive && "#fff",
      transition: "all 150ms ease-in",
    };
  };
  return (
    <div className="App">
      <nav className="navigation">
        <h2>
          Aman.<span style={{ color: "#65B891" }}>dev</span>
        </h2>
        <div>
          <NavLink style={activeStyle} to="/">
            Home
          </NavLink>
          <NavLink style={activeStyle} to="/projects">
            Project
          </NavLink>
          <NavLink style={activeStyle} to="/Blog">
            Blog
          </NavLink>
          <NavLink style={activeStyle} to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
