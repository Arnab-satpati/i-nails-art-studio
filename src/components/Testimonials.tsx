import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { client, queries, urlFor, Testimonial } from '../lib/sanity';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Check if we have a valid project ID
        if (!client.config().projectId || client.config().projectId === 'your-project-id') {
          console.warn('Sanity project ID not configured, using fallback data');
          setTestimonials(fallbackTestimonials);
          setLoading(false);
          return;
        }
        
        const data = await client.fetch(queries.testimonials);
        setTestimonials(data);
      } catch (error) {
        console.warn('Error fetching testimonials from Sanity, using fallback data:', error);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Default testimonials as fallback
  const fallbackTestimonials = [
    {
      _id: '1',
      name: 'Sarah Johnson',
      role: 'Regular Client',
      image: null,
      rating: 5,
      text: 'I\'ve been coming to i Nails for over a year now, and I\'m consistently amazed by their attention to detail. The nail art is absolutely stunning, and the eyelash extensions last for weeks while looking completely natural.',
      service: 'Nail Art & Eyelash Extensions'
    },
    {
      _id: '2',
      name: 'Maria Rodriguez',
      role: 'Course Graduate',
      image: null,
      rating: 5,
      text: 'The eyelash extension course was life-changing! The instructors were incredibly knowledgeable and patient. I now have my own successful lash business thanks to the skills I learned here.',
      service: 'Eyelash Extension Course'
    },
    {
      _id: '3',
      name: 'Emily Chen',
      role: 'Beauty Enthusiast',
      image: null,
      rating: 5,
      text: 'The Korean BB Glow treatment was absolutely amazing! My skin looks flawless without makeup. The staff is professional, and the studio has such a luxurious atmosphere.',
      service: 'Korean BB Glow'
    }
  ];

  const getDefaultImage = (index: number) => {
    const defaultImages = [
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300'
    ];
    return defaultImages[index % defaultImages.length];
  };

  if (loading) {
    return (
      <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg md:text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Don't just take our word for it - hear from our satisfied clients and course graduates
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const imageUrl = testimonial.image ? urlFor(testimonial.image).width(300).height(300).url() : getDefaultImage(index);
            
            return (
              <div
                key={testimonial._id}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-8 h-8 text-yellow-500" />
                </div>

                {/* Client Image */}
                <div className="flex items-center mb-6">
                  <img
                    src={imageUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.service}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-2xl p-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                500+
              </div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Happy Clients
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                4.9
              </div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Average Rating
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                125+
              </div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Course Graduates
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                100%
              </div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;