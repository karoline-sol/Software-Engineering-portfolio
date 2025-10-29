import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-end items-center gap-8">
      <Link
        to="/"
        className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300"
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300"
      >
        Contact
      </Link>
    </nav>
  );
}

