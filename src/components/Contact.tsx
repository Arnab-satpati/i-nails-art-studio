// Fully cleaned, functional, customized WhatsApp Business integrated Contact Section for your i-Nails Art & Studio
// Replaces your entire Contact.tsx file for clean scalability and professional CTA flow

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, service, date, time, message } = formData;
    const whatsappMessage = `Hello, this is ${firstName} ${lastName}.

I would like to book an appointment at i Nails Art & Studio.

Preferred Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}

Additional Message:\n${message}\n\nThank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918240423031?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl p-8`}>
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Book Your Appointment</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preferred Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              >
                <option value="">Select a service</option>
                <option value="Nail Art & Care">Nail Art & Care</option>
                <option value="Eyelash Extensions">Eyelash Extensions</option>
                <option value="Permanent Makeup">Permanent Makeup</option>
                <option value="Korean BB Glow">Korean BB Glow</option>
                <option value="Eyelash Extensions Course">Eyelash Extensions Course</option>
                <option value="Nail Extensions Course">Nail Extensions Course</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Anything else you would like us to know?"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition duration-200"
            >
              Book via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Address</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Antara Appartment, 4no. Deshbandhu Nagar, Sodepur, Kolkata - 700110</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 8240423031</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Business Hours</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mon-Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/i_nails_art_and_studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl overflow-hidden shadow-lg`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7983244936094!2d88.3779263736088!3d22.698236951762322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc559090309b94a9%3A0x5fae7cc53e7431a8!2si-Nails%20Art%20%26%20Studio!5e1!3m2!1sen!2sin!4v1752342427819!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="i Nails Studio Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
