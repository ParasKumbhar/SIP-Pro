import React, { useState } from 'react';
import { FaFacebook, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 animate-fade-in-up">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl animate-fade-in-up delay-200">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              message: e.target.message.value,
            };
            if (!formData.name || !formData.email || !formData.message) {
              alert('Please fill all fields');
              return;
            }
            try {
              const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
              });
              const data = await res.json();
              if (res.ok) {
                alert(data.message);
                e.target.reset();
              } else {
                alert(data.error || 'Failed to send message');
              }
            } catch (err) {
              alert('Error connecting to server');
            }
          }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
        >
          <label className="font-semibold text-blue-900">Name
            <input type="text" name="name" required className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <label className="font-semibold text-blue-900">Email
            <input type="email" name="email" required className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <label className="font-semibold text-blue-900">Message
            <textarea name="message" required rows={4} className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <button type="submit" className="bg-yellow-400 text-blue-900 font-bold py-3 rounded-full shadow hover:bg-yellow-500 transition-all duration-300">Send Message</button>
        </form>
        <div className="flex flex-col gap-8 justify-center items-center">
          <iframe title="SIP Office Location" src="https://www.openstreetmap.org/export/embed.html?bbox=72.8337%2C18.9218%2C72.8337%2C18.9218&amp;layer=mapnik" className="w-full h-64 rounded-xl shadow" allowFullScreen loading="lazy"></iframe>
          <div className="flex gap-6 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-800 rounded-full p-3 shadow hover:scale-110 transition-all duration-300"><FaFacebook size={24} /></a>
            <a href="mailto:info@sippro.com" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-blue-900 rounded-full p-3 shadow hover:scale-110 transition-all duration-300"><FaEnvelope size={24} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-fuchsia-700 rounded-full p-3 shadow hover:scale-110 transition-all duration-300"><FaInstagram size={24} /></a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 rounded-full p-3 shadow hover:scale-110 transition-all duration-300"><FaWhatsapp size={24} /></a>
          </div>
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
      `}</style>
    </section>
  );
}
