import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.svg" alt="SIP Pro Logo" className="w-10 h-10 drop-shadow-lg transition-transform group-hover:scale-110" />
          <span className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-white to-green-400 bg-clip-text text-transparent font-montserrat drop-shadow group-hover:scale-105 transition-transform" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
            SIP <span className="font-black">Pro</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/plans" className="hover:text-yellow-300">Plans</Link>
          <Link to="/calculator" className="hover:text-yellow-300">Calculator</Link>
          <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center ml-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 bg-opacity-95 px-6 py-4 rounded-b-xl shadow-lg absolute left-0 right-0 top-full z-40 animate-fade-in-up">
          <Link to="/" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/plans" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Plans</Link>
          <Link to="/calculator" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Calculator</Link>
          <Link to="/blog" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="block py-2 text-lg font-medium hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s cubic-bezier(.23,1,.32,1) both;
        }
      `}</style>
    </nav>
  );
}
