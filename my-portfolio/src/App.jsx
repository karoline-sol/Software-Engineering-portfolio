
import React , { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "~/components/Layout/Header.jsx"
import Home from "~/Pages/Home.jsx";
import Portfolio from "~/Pages/Portfolio.jsx";
import Contact from "~/Pages/Contact.jsx";
import Resume from "~/components/Contact/Resume.jsx"
import Footer from "~/components/Layout/Footer.jsx";
//import { projects } from "~/data/projects.js"
//css imports
import "~/Styles/global.css"
import "~/Styles/Header.css"
import "~/Styles/portfolio.css"
import "~/Styles/contact.css"
import "~/Styles/resume.css"


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
          <Route path="/my-portfolio" element={<Portfolio />} />
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

