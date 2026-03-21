import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Open Pantry Logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <span className="text-2xl font-bold text-white">Open Pantry</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating cozy creative spaces for cake decorating enthusiasts since 2023.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#00A5B8] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#00A5B8] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#00A5B8] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#00A5B8] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a
                  href="mailto:openpantry.ca@gmail.com"
                  className="hover:text-[#00A5B8] transition-colors"
                >
                  openpantry.ca@gmail.com
                </a>
              </p>
              <p className="text-gray-400">Greater Toronto Area</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            &copy; {currentYear} Open Pantry. Made with
            <Heart className="text-[#FFB5B5] mx-2" size={16} fill="#FFB5B5" />
            by Patrice
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
