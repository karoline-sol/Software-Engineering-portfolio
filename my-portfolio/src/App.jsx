
import React , { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.jsx"
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./components/Contact/Resume.jsx"
import Footer from "./components/Layout/Footer.jsx";
//import { projects } from "./data/projects.js"
//css imports
import "./styles/global.css"
import "./styles/Header.css"
import "./styles/portfolio.css"
import "./styles/contact.css"
import "./styles/resume.css"


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
    <Router basename="/Software-Engineering-portfolio/">
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

