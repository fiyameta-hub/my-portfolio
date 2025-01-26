import React, {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimony from './components/Testimony';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

      <Router>
        <div className={isDarkMode ? 'dark' : ''} >
            <Header toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Testimony" element={<Testimony />} />
            </Routes>
            <Footer />
          </div>
      </Router>

  );
}

export default App;
