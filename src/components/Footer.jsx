import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className='flex items-center mb-6 mx-4 sm:mx-8 md:mx-12'>
                    <Link to="/"><img src="/logo.svg" className="rounded-xl h-12 m-0 pr-0" alt="SIP Pro Logo" /></Link>
                    <h2 className="text-xl font-bold gradient-text ml-4">SIP Pro — Smart Investment Platform</h2>
                </div>
                <div className="flex flex-wrap mx-2 justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:pl-6">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/calculator" className="hover:text-white">Calculator</Link></li>
                            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/plans" className="hover:text-white">Plans</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold ml-4 mb-1">Contact Us</h2>
                        <h3 className="text-xl font-bold mt-0">Mumbai</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaPhone className="mr-2" />+919136322643</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> Gateway of India,<br /> Colaba, Mumbai 400001</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 mt-8">
                        <h3 className="text-xl font-bold">Kalyan</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaPhone className="mr-2" />+919321663261</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> Kalyan 421301</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" className="hover:text-blue-800" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                            <a href="mailto:info@sippro.com" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaEnvelope size={30} /></a>
                            <a href="https://www.instagram.com/" className="hover:text-fuchsia-700" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                            <a href="https://web.whatsapp.com/" className="hover:text-green-600" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} SIP Pro — Smart Investment Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
