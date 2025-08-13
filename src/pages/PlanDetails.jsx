import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const planDetails = {
  "Starter Plan": {
    title: "Starter Plan",
    nav: "9.76",
    minInvestment: "₹1,000",
    minSIP: "₹500",
    risk: "Low",
    summary: [
      "Low risk, ideal for students",
      "Flexible exit",
      "Long term capital appreciation"
    ],
    managers: [
      { name: "Mr. Vishal Jajoo", experience: "17 years" },
      { name: "Ms. Priya Shah", experience: "8 years" }
    ]
  },
  "Growth Plan": {
    title: "Growth Plan",
    nav: "12.34",
    minInvestment: "₹2,000",
    minSIP: "₹1,000",
    risk: "Medium",
    summary: [
      "Balanced risk, good for salaried professionals",
      "Tax-saving options",
      "Steady returns"
    ],
    managers: [
      { name: "Mr. Chetan Sanjay Ginodia", experience: "8 years" }
    ]
  },
  "Wealth Builder": {
    title: "Wealth Builder",
    nav: "15.89",
    minInvestment: "₹5,000",
    minSIP: "₹2,500",
    risk: "High",
    summary: [
      "High growth potential",
      "Long-term wealth creation",
      "Goal tracking tools"
    ],
    managers: [
      { name: "Ms. Priya Shah", experience: "8 years" }
    ]
  },
  "Tax Saver SIP": {
    title: "Tax Saver SIP",
    nav: "10.50",
    minInvestment: "₹1,500",
    minSIP: "₹500",
    risk: "Medium",
    summary: [
      "ELSS funds",
      "Tax benefits under 80C",
      "3-year lock-in"
    ],
    managers: [
      { name: "Mr. Vishal Jajoo", experience: "17 years" }
    ]
  },
  "Retirement Plus": {
    title: "Retirement Plus",
    nav: "11.20",
    minInvestment: "₹3,000",
    minSIP: "₹1,000",
    risk: "Low",
    summary: [
      "Long-term growth",
      "Retirement planning",
      "Stable returns"
    ],
    managers: [
      { name: "Mr. Chetan Sanjay Ginodia", experience: "8 years" }
    ]
  },
  "Child Future SIP": {
    title: "Child Future SIP",
    nav: "13.00",
    minInvestment: "₹2,500",
    minSIP: "₹1,200",
    risk: "Medium",
    summary: [
      "Education planning",
      "Flexible tenure",
      "Insurance cover"
    ],
    managers: [
      { name: "Ms. Priya Shah", experience: "8 years" }
    ]
  },
  "Women’s Wealth SIP": {
    title: "Women’s Wealth SIP",
    nav: "9.90",
    minInvestment: "₹1,200",
    minSIP: "₹600",
    risk: "Low",
    summary: [
      "Women-centric funds",
      "Empowerment focus",
      "Flexible withdrawal"
    ],
    managers: [
      { name: "Ms. Priya Shah", experience: "8 years" }
    ]
  },
  "Aggressive Growth": {
    title: "Aggressive Growth",
    nav: "16.75",
    minInvestment: "₹4,000",
    minSIP: "₹2,000",
    risk: "High",
    summary: [
      "High equity exposure",
      "Potential high returns",
      "Active management"
    ],
    managers: [
      { name: "Mr. Vishal Jajoo", experience: "17 years" }
    ]
  },
  "Balanced Advantage": {
    title: "Balanced Advantage",
    nav: "12.80",
    minInvestment: "₹2,200",
    minSIP: "₹1,000",
    risk: "Medium",
    summary: [
      "Dynamic asset allocation",
      "Risk management",
      "Consistent returns"
    ],
    managers: [
      { name: "Mr. Chetan Sanjay Ginodia", experience: "8 years" }
    ]
  },
  "Global SIP": {
    title: "Global SIP",
    nav: "14.60",
    minInvestment: "₹3,500",
    minSIP: "₹1,500",
    risk: "High",
    summary: [
      "International funds",
      "Currency diversification",
      "Global growth"
    ],
    managers: [
      { name: "Ms. Priya Shah", experience: "8 years" }
    ]
  }
};

function PlanDetails() {
  const { plan } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const risk = params.get('risk') || 'All';
  const details = planDetails[plan] || {
    title: plan,
    nav: "N/A",
    minInvestment: "N/A",
    minSIP: "N/A",
    risk: "N/A",
    summary: ["No details available."],
    managers: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-12 animate-fade-in-up">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-primary focus:outline-none"
          onClick={() => navigate(`/plans`, { state: { filter: risk } })}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 text-center animate-fade-in-up">{details.title}</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="bg-yellow-100 rounded-lg px-6 py-4 text-center shadow">
            <div className="text-lg font-semibold text-gray-700">NAV</div>
            <div className="text-2xl font-bold text-green-700">{details.nav}</div>
          </div>
          <div className="bg-blue-100 rounded-lg px-6 py-4 text-center shadow">
            <div className="text-lg font-semibold text-gray-700">Min Investment</div>
            <div className="text-xl font-bold text-blue-900">{details.minInvestment}</div>
          </div>
          <div className="bg-green-100 rounded-lg px-6 py-4 text-center shadow">
            <div className="text-lg font-semibold text-gray-700">Min SIP</div>
            <div className="text-xl font-bold text-green-900">{details.minSIP}</div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">Fund Summary</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {details.summary.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">Fund Managers</h2>
          <ul className="list-none pl-0 text-gray-700 space-y-1">
            {details.managers.map((m, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="font-semibold">{m.name}</span> <span className="text-sm">({m.experience} experience)</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">Risk Level</h2>
          <div className="flex items-center gap-2">
            <div className="w-40 h-8 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 relative shadow-md flex items-center">
              {/* Proper dynamic position for risk circle, always inside bar */}
              <div
                className="absolute w-8 h-8 rounded-full border-4 border-white shadow-xl"
                style={{
                  top: '50%',
                  left:
                    details.risk === 'Low' ? '0px' :
                    details.risk === 'Medium' ? 'calc(50% - 1.2rem)' :
                    details.risk === 'High' ? 'calc(100% - 2rem)' : 'calc(50% - 1.5rem)',
                  transform: 'translateY(-50%)',
                  background:
                    details.risk === 'Low' ? '#22c55e' :
                    details.risk === 'Medium' ? '#eab308' :
                    details.risk === 'High' ? '#ef4444' : '#eab308',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  transition: 'left 0.3s, background 0.3s'
                }}
              />
            </div>
            <span
              className={
                details.risk === 'Low' ? 'font-bold text-green-600' :
                details.risk === 'Medium' ? 'font-bold text-yellow-600' :
                details.risk === 'High' ? 'font-bold text-red-600' : 'font-bold text-gray-600'
              }
            >
              {details.risk}
            </span>
          </div>
        </div>
        <button
          className="w-full py-3 px-4 rounded-full bg-primary text-white font-bold shadow hover:bg-primary-dark transition-all duration-300 text-lg"
          onClick={() => alert('Investment Confirmed!')}
        >
          Invest Now
        </button>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.23,1,.32,1) both;
        }
        .animate-bounce {
          animation: bounce 1s infinite alternate;
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default PlanDetails;
