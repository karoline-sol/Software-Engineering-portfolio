import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.jsx"
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Layout/Footer.jsx";
//css imports
import "./styles/global.css"
import "./styles/Header.css"
import "./styles/projectgallery.css"
import "./styles/projectcard.css"
import "./styles/contact.css"


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

