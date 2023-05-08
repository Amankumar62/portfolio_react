import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ErrorPage } from "./ErrorPage";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const activeStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive && "#65B891",
      borderRadius: "10px",
      textAlign: "center",
      color: darkTheme && "#fff",
      transition: "backgroundColor 150ms ease-in",
    };
  };

  const toggleTheme = () => {
    setDarkTheme(() => !darkTheme);
  };
  if (darkTheme) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  return (
    <div className="App">
      <nav
        className="navigation"
        style={{
          backgroundColor: darkTheme && "#111",
          color: darkTheme && "#fff",
        }}
      >
        <h2>
          Aman.<span style={{ color: "#65B891" }}>dev</span>
        </h2>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
        <div className="hamburger">
          <label for="nav-toggle" className="hamburger">
            <GiHamburgerMenu />
          </label>
        </div>

        <label id="toggle-theme" onClick={() => toggleTheme()}>
          {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </label>

        <div
          className="nav-links"
          style={{ backgroundColor: darkTheme && "#111" }}
        >
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
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
