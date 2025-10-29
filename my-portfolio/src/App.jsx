import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.jsx"
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Navigation from "./components/Layout/Navigation.jsx";
import Footer from "./components/Layout/Footer.jsx";
import "./styles/Header.css"
import "./styles/contact.css"
import "./styles/global.css"

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

