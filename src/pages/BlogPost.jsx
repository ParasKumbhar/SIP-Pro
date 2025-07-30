import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const posts = [
  {
    id: 'sip-mistakes',
    title: "5 SIP Mistakes to Avoid for Maximum Returns",
    content: `
      <p>Systematic Investment Plans (SIPs) are a powerful way to build wealth over time, but many investors unknowingly make mistakes that can limit their returns. Understanding and avoiding these common pitfalls can help you maximize your investment growth.</p>
      <h2>1. Not Starting Early Enough</h2>
      <p>Time is one of the most critical factors in investment growth. Delaying your SIP investments means missing out on the benefits of compounding. Start as early as possible to give your money more time to grow.</p>
      <h2>2. Ignoring Market Volatility</h2>
      <p>Market ups and downs are normal. Stopping your SIPs during market downturns can harm your long-term returns. Instead, continue investing regularly to benefit from rupee cost averaging.</p>
      <h2>3. Stopping SIPs During Downturns</h2>
      <p>Many investors panic and stop their SIPs when markets fall. This is often the worst time to stop investing. Staying consistent through market cycles helps you buy more units at lower prices.</p>
      <h2>4. Choosing the Wrong Funds</h2>
      <p>Not all funds are created equal. Selecting funds without proper research or based on past performance alone can lead to suboptimal returns. Consider fund manager expertise, expense ratios, and fund objectives.</p>
      <h2>5. Lack of Diversification</h2>
      <p>Putting all your money into one type of fund or sector increases risk. Diversify your SIP investments across different asset classes and sectors to balance risk and reward.</p>
      <h2>Conclusion</h2>
      <p>Avoiding these common SIP mistakes can significantly enhance your investment outcomes. Stay disciplined, do your research, and keep your long-term goals in focus.</p>
    `,
    date: "July 10, 2025",
    author: "Priya Sharma",
    tags: ["SIP Tips", "Mistakes", "Returns"],
  },
  {
    id: 'choose-best-sip',
    title: "How to Choose the Best SIP Plan for You",
    content: `
      <p>Choosing the right Systematic Investment Plan (SIP) is crucial to achieving your financial goals. Here is a step-by-step guide to help you select the best SIP plan tailored to your needs.</p>
      <h2>1. Assess Your Financial Goals</h2>
      <p>Identify your short-term and long-term financial objectives. Whether it's buying a house, funding education, or retirement planning, your goals will influence your SIP choices.</p>
      <h2>2. Understand Your Risk Tolerance</h2>
      <p>Evaluate how much risk you are willing to take. Conservative investors may prefer debt or balanced funds, while aggressive investors might opt for equity funds.</p>
      <h2>3. Compare Fund Performance</h2>
      <p>Look at the historical performance of funds over different time frames. Consistency is more important than short-term gains.</p>
      <h2>4. Check Fund Manager's Track Record</h2>
      <p>The expertise and experience of the fund manager can impact fund performance. Research their track record and management style.</p>
      <h2>5. Review Expense Ratios</h2>
      <p>Lower expense ratios mean more of your money is invested rather than spent on fees. Compare expense ratios across similar funds.</p>
      <h2>6. Consider Fund Objectives and Portfolio</h2>
      <p>Ensure the fund's investment objectives align with your goals and that the portfolio is diversified.</p>
      <h2>Conclusion</h2>
      <p>By carefully evaluating these factors, you can choose a SIP plan that suits your financial situation and helps you achieve your goals.</p>
    `,
    date: "July 5, 2025",
    author: "Amit Verma",
    tags: ["SIP Plans", "Guide", "Finance"],
  },
  {
    id: 'power-of-compounding',
    title: "The Power of Compounding in SIPs",
    content: `
      <p>Compounding is often called the eighth wonder of the world. It allows your investments to grow exponentially over time by earning returns on both your initial principal and the accumulated returns.</p>
      <h2>How Compounding Works</h2>
      <p>When you reinvest your earnings, you start earning returns on your returns. This snowball effect accelerates your wealth creation, especially over long investment horizons.</p>
      <h2>Benefits of Compounding in SIPs</h2>
      <ul>
        <li>Disciplined investing through regular SIP contributions</li>
        <li>Benefit from rupee cost averaging during market fluctuations</li>
        <li>Long-term growth potential with relatively lower risk</li>
      </ul>
      <h2>Example</h2>
      <p>If you invest ₹5,000 monthly for 20 years at an average annual return of 12%, your corpus can grow significantly due to compounding.</p>
      <h2>Tips to Maximize Compounding</h2>
      <ul>
        <li>Start early and invest consistently</li>
        <li>Reinvest dividends and returns</li>
        <li>Avoid withdrawing your investments prematurely</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Harnessing the power of compounding through SIPs can help you build substantial wealth over time. Patience and consistency are key.</p>
    `,
    date: "June 28, 2025",
    author: "Neha Gupta",
    tags: ["Compounding", "Growth", "Investing"],
  },
];

export default function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h2>
        <button
          onClick={() => navigate('/blog')}
          className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-500 transition"
        >
          Back to Blog
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen max-w-full sm:max-w-4xl mx-auto p-4 sm:p-8 md:p-16 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-2xl shadow-2xl mt-12">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-900 mb-6 sm:mb-10 leading-tight">{post.title}</h1>
      <div className="text-base text-gray-600 mb-6 sm:mb-10">
        By <span className="font-semibold">{post.author}</span> • {post.date}
      </div>
      <article
        className="prose prose-blue max-w-none mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="flex flex-wrap gap-3 mb-12 sm:mb-16">
        {post.tags.map((tag, idx) => (
          <span key={idx} className="px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-800 text-sm sm:text-base font-semibold">
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => navigate('/blog')}
        className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full shadow-lg hover:bg-yellow-500 transition"
      >
        Back to Blog
      </button>
    </section>
  );
}
