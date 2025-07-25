import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Plans from './pages/Plans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      <Footer />
    </>
  );
}
