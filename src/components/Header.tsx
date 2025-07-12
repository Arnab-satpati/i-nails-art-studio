import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Courses', href: '#courses' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-yellow-400/20' 
          : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mb-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          {darkMode ? (
  <img src="/logo-dark.png" alt="i Nails Dark" className="h-20" />
) : (
  <img src="/logo-dark.png" alt="i Nails Light" className="h-20" />
)}


          {/* Desktop Navigation with Hover Effects */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden ${
                  darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                  darkMode ? 'bg-yellow-400/10' : 'bg-yellow-500/10'
                }`}></div>
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${
                  darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu with Enhanced Animations */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`relative p-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-12 ${
                darkMode 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-400/25' 
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="relative">
                {darkMode ? (
                  <Sun size={20} className="animate-spin-slow" />
                ) : (
                  <Moon size={20} className="animate-bounce-subtle" />
                )}
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden rounded-full p-3 transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800' : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100'
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div className={`md:hidden rounded-[20px] overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-2 pt-2 pb-6 space-y-2 ${
            darkMode ? 'bg-gray-900/95' : 'bg-white/95'
          } backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border ${
            darkMode ? 'border-yellow-400/20' : 'border-yellow-500/20'
          }`}>
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;