import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Links from './Components/Links';
import Contact from './Components/Services';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/links" element={<Links />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
