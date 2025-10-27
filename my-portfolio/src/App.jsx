import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heeader from "./components/Layout/Header.jsx"
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Navigation from "./components/Layout/Navigation.jsx";
import Footer from "./components/Layout/Footer.jsx";
import "./styles/Header.css"

function App() {
  return (
    <Router>
      <Navigation />
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

