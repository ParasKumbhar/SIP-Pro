import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">About SIP Pro</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
          SIP Pro is on a mission to democratize investing in India. Our platform empowers everyone to invest in high-performing mutual funds using Systematic Investment Plans (SIPs) with zero hidden fees or commissions.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transform transition duration-300 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Vision</h3>
          <p className="text-gray-600">To make wealth creation accessible, transparent, and rewarding for every Indian.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transform transition duration-300 animate-fade-in-up delay-400">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Mission</h3>
          <p className="text-gray-600">Deliver innovative SIP solutions, expert guidance, and a seamless digital experience for all investors.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transform transition duration-300 animate-fade-in-up delay-600">
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">Team</h3>
          <p className="text-gray-600">A passionate team of finance experts, tech innovators, and client success champions.</p>
        </div>
      </div>
      <ul className="list-none flex flex-wrap justify-center gap-6 text-lg text-gray-700 animate-fade-in-up delay-800">
        <li className="flex items-center gap-2"><span>🚀</span> Fast digital KYC & onboarding</li>
        <li className="flex items-center gap-2"><span>🔒</span> Bank-level security & SEBI registered partners</li>
        <li className="flex items-center gap-2"><span>💡</span> Personalized SIP recommendations</li>
        <li className="flex items-center gap-2"><span>📈</span> 1 Lakh+ satisfied investors across India</li>
      </ul>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.23,1,.32,1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
}
