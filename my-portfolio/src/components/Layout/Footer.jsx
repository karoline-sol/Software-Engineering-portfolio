import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Software - Engineering Portfolio. All rights reserved.</p>
    </footer>
  );
}
