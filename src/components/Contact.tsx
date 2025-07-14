import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg md:text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Ready to book your appointment or have questions about our services? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          } rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Book Your Appointment
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Service
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option value="">Select a service</option>
                  <option value="nail-art">Nail Art & Care</option>
                  <option value="eyelash-extensions">Eyelash Extensions</option>
                  <option value="permanent-makeup">Permanent Makeup</option>
                  <option value="korean-bb-glow">Korean BB Glow</option>
                  <option value="eyelash-course">Eyelash Extensions Course</option>
                  <option value="nail-course">Nail Extensions Course</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell us about your preferences or ask any questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className={`${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'
            } rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Address
                    </div>
                    <div className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div>Antara Appartment</div>
                      <div>4no. Deshbandhu Nagar, Sodepur, <br /> behind Sriniketan near Siddeshwari Kali Temple</div>
                      <div>Kolkata :- 700110</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Phone
                    </div>
                    <div className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      +91 8240423031
                    </div>
                  </div>
                </div>



                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Business Hours
                    </div>
                    <div className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Mon - Sun: 10:00 AM - 9:00 PM<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className={`${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'
            } rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/i_nails_art_and_studio?igsh=bmQ4bXh1amVqbW9p"
                  className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>

              </div>
            </div>

            {/* Google Map */}
            <div className={`${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'
            } rounded-2xl overflow-hidden shadow-lg`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7983244936094!2d88.3779263736088!3d22.698236951762322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc559090309b94a9%3A0x5fae7cc53e7431a8!2si-Nails%20Art%20%26%20Studio!5e1!3m2!1sen!2sin!4v1752342427819!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="i Nails Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;