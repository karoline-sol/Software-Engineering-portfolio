import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { ThemeContext } from "../../App";


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Portfolio

          
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
      </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



