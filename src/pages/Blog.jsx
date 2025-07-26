import React from 'react';

const posts = [
  {
    title: "5 SIP Mistakes to Avoid for Maximum Returns",
    excerpt: "Learn the common pitfalls investors make with SIPs and how to maximize your wealth.",
    date: "July 10, 2025",
    author: "Priya Sharma",
    tags: ["SIP Tips", "Mistakes", "Returns"],
  },
  {
    title: "How to Choose the Best SIP Plan for You",
    excerpt: "A step-by-step guide to selecting the right SIP plan based on your goals and risk profile.",
    date: "July 5, 2025",
    author: "Amit Verma",
    tags: ["SIP Plans", "Guide", "Finance"],
  },
  {
    title: "The Power of Compounding in SIPs",
    excerpt: "Discover how compounding can accelerate your investment growth over time.",
    date: "June 28, 2025",
    author: "Neha Gupta",
    tags: ["Compounding", "Growth", "Investing"],
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 animate-fade-in-up">SIP Blog & Financial Tips</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-up delay-200">
        {posts.map((post, idx) => (
          <article key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transform transition duration-300 flex flex-col justify-between">
            <header>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            </header>
            <footer className="flex flex-col gap-2 mt-4">
              <div className="text-sm text-gray-500">By <span className="font-semibold text-green-700">{post.author}</span> • {post.date}</div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </footer>
          </article>
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
      `}</style>
    </section>
  );
}
