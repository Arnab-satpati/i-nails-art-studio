import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Image carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-yellow-50 via-white to-yellow-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-60 blur-3xl  ${
          darkMode ? 'bg-yellow-400' : 'bg-yellow-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-40 blur-3xl  ${
          darkMode ? 'bg-yellow-500' : 'bg-yellow-400'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              {/* Trust Badge with Animation */}
              <div className="flex items-center space-x-3 group">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current transform transition-transform duration-300 hover:scale-125" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 group-hover:text-yellow-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Trusted by 500+ clients worldwide
                </span>
              </div>
              
              {/* Main Heading with Gradient Animation */}
              <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block animate-fade-in-up">Premium Beauty</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                  Services
                </span>
                
              </h1>
              
              {/* Description with Typewriter Effect */}
              <p className={`text-xl md:text-2xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } max-w-2xl animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
                Experience the finest <span className="text-yellow-500 font-semibold">nail art</span>, 
                <span className="text-yellow-500 font-semibold"> eyelash extensions</span>, and 
                <span className="text-yellow-500 font-semibold"> permanent makeup</span> services. 
                We bring Korean beauty techniques to enhance your natural elegance.
              </p>
            </div>

            {/* CTA Buttons with Hover Animations */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button 
                onClick={scrollToServices}
                className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button 
                onClick={scrollToGallery}
                className={`group border-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden transform hover:scale-105 hover:-translate-y-1 ${
                  darkMode 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 shadow-lg hover:shadow-yellow-400/25' 
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white shadow-lg hover:shadow-yellow-500/25'
                }`}
              >
                <span className="relative z-10">View Our Work</span>
                <div className={`absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
                }`}></div>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              {[
                { number: '500+', label: 'Happy Clients', icon: Users },
                { number: '5+', label: 'Years Experience', icon: Award },
                { number: '100%', label: 'Satisfaction', icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12 ${
                    darkMode ? 'bg-yellow-400/20 text-yellow-400' : 'bg-yellow-500/20 text-yellow-600'
                  }`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 group-hover:text-yellow-500 ${
                    darkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image with Advanced Animations */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Image Carousel */}
              <div className="relative h-[700px] overflow-hidden">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Professional beauty services ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className={`absolute -bottom-8 -left-8 ${
              darkMode ? 'bg-gray-800/95' : 'bg-white/95'
            } backdrop-blur-xl p-8 rounded-3xl shadow-2xl border ${
              darkMode ? 'border-yellow-400/20' : 'border-yellow-500/20'
            } transform hover:scale-105 transition-all duration-300 animate-float`}>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white fill-current animate-pulse" />
                </div>
                <div>
                  <div className={`text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Award Winning
                  </div>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Beauty Studio
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-yellow-500 font-medium">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;