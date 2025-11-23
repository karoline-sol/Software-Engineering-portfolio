
import React , { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Layout/Header.jsx"
import Home from "../src/Pages/Home.jsx";
import Portfolio from "../src/Pages/Portfolio.jsx";
import Contact from "../src/Pages/Contact.jsx";
import Resume from "../src/components/Contact/Resume.jsx"
import Footer from "../src/components/Layout/Footer.jsx";
//import { projects } from "~/data/projects.js"
//css imports
import "../src/Styles/global.css"
import "../src/Styles/Header.css"
import "../src/Styles/portfolio.css"
import "../src/Styles/contact.css"
import "../src/Styles/resume.css"


export const ThemeContext = createContext();

function App() {
   const [theme, settheme] = useState('light');

   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      settheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
   } , []);
  
   useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => 
    settheme((prev) => (prev === "light" ? "dark" : "light"))

      
  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <Router basename="/">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </ThemeContext.Provider>
  );
}



export default App;

