import React, { useState } from 'react';

export default function Calculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  // SIP formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
  const r = rate / 100 / 12;
  const n = years * 12;
  const futureValue = monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 animate-fade-in-up">SIP Calculator</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl animate-fade-in-up delay-200">
        <div className="mb-6">
          <label className="block font-semibold text-blue-900 mb-2">Monthly Investment (₹)</label>
          <input type="range" min="500" max="50000" step="100" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className="w-full accent-blue-900" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>₹500</span>
            <span>₹50,000</span>
          </div>
          <div className="text-lg font-bold text-green-700 mt-2">₹{monthly.toLocaleString()}</div>
        </div>
        <div className="mb-6">
          <label className="block font-semibold text-blue-900 mb-2">Investment Duration (Years)</label>
          <input type="range" min="1" max="30" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-green-700" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1</span>
            <span>30</span>
          </div>
          <div className="text-lg font-bold text-green-700 mt-2">{years} Years</div>
        </div>
        <div className="mb-6">
          <label className="block font-semibold text-blue-900 mb-2">Expected Annual Return (%)</label>
          <input type="range" min="6" max="20" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-blue-600" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>6%</span>
            <span>20%</span>
          </div>
          <div className="text-lg font-bold text-green-700 mt-2">{rate}%</div>
        </div>
        <div className="mt-8 text-center">
          <div className="text-xl font-semibold text-blue-900 mb-2">Estimated Future Value</div>
          <div className="text-3xl font-extrabold text-yellow-500 mb-2 animate-fade-in-up delay-400">₹{futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
          <div className="text-sm text-gray-500">* Calculated with monthly compounding</div>
        </div>
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
