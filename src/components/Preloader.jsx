import React from 'react';

const Preloader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <svg className="animate-spin h-16 w-16 text-blue-900" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" stroke="#1A237E" strokeWidth="6" opacity="0.2" />
      <path d="M32 4a28 28 0 0128 28" stroke="#FFD700" strokeWidth="6" strokeLinecap="round" />
    </svg>
    <span className="ml-4 text-xl font-bold text-blue-900">Loading SIP...</span>
  </div>
);

export default Preloader;
