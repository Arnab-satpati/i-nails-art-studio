import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`${
      darkMode ? 'bg-gray-900' : 'bg-gray-900'
    } text-white py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">  <a href="#"><img src="/logo-dark.png" alt="i Nails Dark" className="h-20" /></a>
</h3>
            <p className="text-gray-300 leading-relaxed">
              Premier beauty studio specializing in nail art, eyelash extensions, and permanent makeup services. 
              We bring Korean beauty techniques to enhance your natural elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/i_nails_art_and_studio?igsh=bmQ4bXh1amVqbW9p"
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/iNailsArtAndStudio"
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">
                  Nail Art & Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">
                  Eyelash Extensions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">
                  Permanent Makeup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">
                  Korean BB Glow
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">
                  Eyebrow Microblading
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#courses" className="hover:text-yellow-400 transition-colors duration-200">
                  Eyelash Extensions Course
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-yellow-400 transition-colors duration-200">
                  Nail Extensions Course
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-yellow-400 transition-colors duration-200">
                  Certification Programs
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-yellow-400 transition-colors duration-200">
                  Advanced Techniques
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <div>Antara Appartment</div>
                  <div>4no. Deshbandhu Nagar, Sodepur, <br /> behind Sriniketan near Siddeshwari Kali Temple</div>
                  <div>Kolkata :- 700110</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <div>+91 8240423031</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 i Nails. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;