import React, { useState } from 'react';

const plans = [
  { title: "Starter Plan", price: "₹500/month", features: ["Low risk", "Ideal for students", "Flexible exit"], risk: "Low" },
  { title: "Growth Plan", price: "₹2,000/month", features: ["Balanced risk", "Good for salaried professionals", "Tax-saving options"], risk: "Medium" },
  { title: "Wealth Builder", price: "₹5,000+/month", features: ["High growth", "Long-term wealth", "Goal tracking tools"], risk: "High" },
  { title: "Tax Saver SIP", price: "₹1,500/month", features: ["ELSS funds", "Tax benefits under 80C", "3-year lock-in"], risk: "Medium" },
  { title: "Retirement Plus", price: "₹3,000/month", features: ["Long-term growth", "Retirement planning", "Stable returns"], risk: "Low" },
  { title: "Child Future SIP", price: "₹2,500/month", features: ["Education planning", "Flexible tenure", "Insurance cover"], risk: "Medium" },
  { title: "Women’s Wealth SIP", price: "₹1,200/month", features: ["Women-centric funds", "Empowerment focus", "Flexible withdrawal"], risk: "Low" },
  { title: "Aggressive Growth", price: "₹4,000/month", features: ["High equity exposure", "Potential high returns", "Active management"], risk: "High" },
  { title: "Balanced Advantage", price: "₹2,200/month", features: ["Dynamic asset allocation", "Risk management", "Consistent returns"], risk: "Medium" },
  { title: "Global SIP", price: "₹3,500/month", features: ["International funds", "Currency diversification", "Global growth"], risk: "High" },
];

export default function Plans() {
  const [filter, setFilter] = useState('All');
  const filteredPlans = filter === 'All' ? plans : plans.filter(p => p.risk === filter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-10 animate-fade-in-up">Choose a SIP Plan That Fits You</h2>
      <div className="flex gap-4 mb-8 animate-fade-in-up delay-200">
        {['All', 'Low', 'Medium', 'High'].map(risk => (
          <button
            key={risk}
            className={`px-6 py-2 rounded-full font-semibold shadow transition-all duration-300 ${filter === risk ? 'bg-yellow-400 text-blue-900' : 'bg-white text-gray-700 hover:bg-yellow-100'}`}
            onClick={() => setFilter(risk)}
          >
            {risk} Risk
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-300 animate-fade-in-up delay-400 flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.title}</h3>
            <p className="text-lg text-green-700 font-semibold mb-4">{plan.price}</p>
            <ul className="mb-6 text-gray-600 space-y-2 list-none">
              {plan.features.map((feat, i) => <li key={i} className="flex items-center gap-2">• {feat}</li>)}
            </ul>
            <button className="mt-auto w-full bg-yellow-400 text-blue-900 py-3 rounded-full font-bold shadow hover:bg-yellow-500 transition-all duration-300">Invest Now</button>
          </div>
        ))}
      </div>
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
      `}</style>
    </section>
  );
}
