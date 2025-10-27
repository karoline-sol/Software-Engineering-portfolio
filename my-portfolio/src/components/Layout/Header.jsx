import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Caroline</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
