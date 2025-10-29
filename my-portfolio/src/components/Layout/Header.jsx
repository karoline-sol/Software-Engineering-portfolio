import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Caroline Soliman</div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



