import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Software - Engineering Portfolio. All rights reserved.</p>
    </footer>
  );
}
