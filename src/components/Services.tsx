import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Palette, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { client, queries, urlFor, Service } from '../lib/sanity';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        if (!client.config().projectId || client.config().projectId === 'your-project-id') {
          console.warn('Sanity project ID not configured, using fallback data');
          setServices(fallbackServices);
          setLoading(false);
          return;
        }
        
        const data = await client.fetch(queries.services);
        setServices(data);
      } catch (error) {
        console.warn('Error fetching services from Sanity, using fallback data:', error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };
    

    fetchServices();
  }, []);
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fallbackServices = [
    {
      _id: '1',
      title: 'Nail Art & Care',
      description: 'Professional nail art, manicures, pedicures, and nail extensions with premium products and creative designs that express your unique style.',
      features: ['Custom Nail Art', 'Gel Polish', 'Nail Extensions', 'Cuticle Care', 'Hand Massage', 'Nail Health Analysis'],
      image: null,
      popular: true
    },
    {
      _id: '2',
      title: 'Eyelash Extensions',
      description: 'Transform your eyes with our premium eyelash extensions. From natural to dramatic looks with professional application and long-lasting results.',
      features: ['Classic Lashes', 'Volume Lashes', 'Hybrid Lashes', 'Lash Lifts', 'Lash Tinting', 'Aftercare Kit'],
      image: null,
      popular: true
    },
    {
      _id: '3',
      title: 'Permanent Makeup',
      description: 'Korean BB Glow, eyebrow microblading, and semi-permanent makeup for effortless beauty every day with natural-looking results.',
      features: ['Korean BB Glow', 'Eyebrow Microblading', 'Lip Blushing', 'Eyeliner Tattooing', 'Touch-up Sessions', 'Color Matching'],
      image: null,
      popular: false
    }
  ];

  const getServiceIcon = (title: string) => {
    if (title.toLowerCase().includes('nail')) return Sparkles;
    if (title.toLowerCase().includes('eyelash')) return Eye;
    return Palette;
  };

  const getDefaultImage = (title: string) => {
    if (title.toLowerCase().includes('nail')) {
      return 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
    if (title.toLowerCase().includes('eyelash')) {
      return 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
    return 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  if (loading) {
    return (
      <section id="services" className={`py-32 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-yellow-500 border-t-transparent mx-auto"></div>
              <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-yellow-300 border-t-transparent mx-auto animate-ping"></div>
            </div>
            <p className={`mt-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Loading our premium services...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-72 h-72 rounded-full opacity-35 animate-pulse blur-[100px] ${
          darkMode ? 'bg-yellow-400' : 'bg-yellow-300'
        }`} style={{animationDelay:'2s'}}></div>
        <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 animate-pulse blur-[64px] ${
          darkMode ? 'bg-yellow-500' : 'bg-yellow-400'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className={`text-lg font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
              Premium Services
            </span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
              Natural Beauty
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-4xl mx-auto`}>
            Experience luxury beauty treatments with our expert team using the finest products and cutting-edge techniques
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.title);
            const imageUrl = service.image ? urlFor(service.image).width(800).height(600).url() : getDefaultImage(service.title);
            
            return (
              <div
                key={service._id}
                className={`service-card relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
  darkMode ? 'bg-gray-900' : 'bg-white'
} rounded-3xl shadow-2xl overflow-hidden hover:shadow-yellow-500/25`}

                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredService(service._id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service.popular && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg animate-bounce">
                      <Award className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredService === service._id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredService === service._id ? 'opacity-80' : 'opacity-40'
                  }`}></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                      hoveredService === service._id ? 'scale-110 rotate-12' : 'scale-100'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent transition-opacity duration-300 ${
                    hoveredService === service._id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  } ${hoveredService === service._id ? 'text-yellow-500' : ''}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-base mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center space-x-3 transition-all duration-300 ${
                          hoveredService === service._id ? 'translate-x-2' : 'translate-x-0'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button onClick={scrollToContact} className={`group w-full py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                    darkMode 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white' 
                      : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white'
                  } shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105`}>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Book Now</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredService === service._id ? 'translate-x-1' : 'translate-x-0'
                      }`} />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full transition-all duration-300 ${
                  hoveredService === service._id ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 text-center ${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-yellow-50 to-yellow-100'
        } rounded-3xl p-12 shadow-2xl`}>
          <h3 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Look?
          </h3>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Book your appointment today and experience the difference of premium beauty services
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25">
            Schedule Consultation
          </button>
        </div>
      </div>

      <style >{`
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
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;