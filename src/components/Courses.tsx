import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { client, queries, urlFor, Course } from '../lib/sanity';

interface CoursesProps {
  darkMode: boolean;
}

const Courses: React.FC<CoursesProps> = ({ darkMode }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Check if we have a valid project ID
        if (!client.config().projectId || client.config().projectId === 'your-project-id') {
          console.warn('Sanity project ID not configured, using fallback data');
          setCourses(fallbackCourses);
          setLoading(false);
          return;
        }
        
        const data = await client.fetch(queries.courses);
        setCourses(data);
      } catch (error) {
        console.warn('Error fetching courses from Sanity, using fallback data:', error);
        setCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Default courses as fallback
  const fallbackCourses = [
    {
      _id: '1',
      title: 'Professional Eyelash Extensions Course',
      duration: '3 Days',
      students: '50+',
      rating: 4.9,
      price: '$899',
      image: null,
      description: 'Master the art of eyelash extensions with our comprehensive 3-day course covering classic, volume, and hybrid techniques.',
      highlights: [
        'Classic & Volume Lash Techniques',
        'Proper Isolation Methods',
        'Eye Mapping & Design',
        'Adhesive & Tool Knowledge',
        'Safety & Sanitation',
        'Business & Marketing Tips',
        'Certification Upon Completion',
        'Starter Kit Included'
      ],
      featured: true
    },
    {
      _id: '2',
      title: 'Advanced Nail Extensions Course',
      duration: '4 Days',
      students: '75+',
      rating: 4.8,
      price: '$1,199',
      image: null,
      description: 'Learn professional nail extension techniques including gel, acrylic, and the latest nail art trends from industry experts.',
      highlights: [
        'Gel & Acrylic Extensions',
        'Nail Art & Design',
        'Proper Nail Prep',
        'Shaping & Filing Techniques',
        'Color Theory & Application',
        'Nail Health & Care',
        'Client Consultation',
        'Professional Kit Included'
      ],
      featured: false
    }
  ];

  const getDefaultImage = (title: string) => {
    if (title.toLowerCase().includes('eyelash')) {
      return 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
    return 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  if (loading) {
    return (
      <section id="courses" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Courses
          </h2>
          <p className={`text-lg md:text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Start your beauty career with our comprehensive training courses taught by industry professionals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const imageUrl = course.image ? urlFor(course.image).width(800).height(600).url() : getDefaultImage(course.title);
            
            return (
              <div
                key={course._id}
                className={`relative ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  course.featured ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Course Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Course Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{course.students} Students</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        ({course.rating})
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {course.description}
                  </p>

                  {/* Course Highlights */}
                  <div className="space-y-3 mb-8">
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      What You'll Learn:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {course.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Enroll Now</span>
                    </button>
                    
                    <button className={`flex-1 border-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      darkMode 
                        ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900' 
                        : 'border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white'
                    }`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Benefits */}
        <div className={`mt-16 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        } rounded-2xl p-8`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose Our Courses?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Industry Certification
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Receive professional certification recognized by the beauty industry
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Expert Instructors
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Learn from experienced professionals with years of industry experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hands-On Training
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Practice with real clients and get immediate feedback from instructors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;