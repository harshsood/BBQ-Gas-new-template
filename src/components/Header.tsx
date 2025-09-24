import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on Scroll */}
      {!isScrolled && (
        <div className="bg-blue-600 text-white py-2 px-4 text-sm fixed w-full z-40 top-0 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+971 58 282 1712</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Licensed & Insured • Same Day Delivery</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'top-0' : 'top-8'
        } ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}
      >
        <div className="h-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🔥</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">BBQ Gas</h1>
                <p className="text-xs text-gray-600">Dubai's Gas Cylinder Experts</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['/', '/services', '/about', '/contact'].map((path, idx) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-medium transition-colors ${
                    location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {['Home', 'Services', 'About', 'Contact'][idx]}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="bg-white border-t px-4 py-4 space-y-4">
            {['/', '/services', '/about', '/contact'].map((path, idx) => (
              <Link
                key={path}
                to={path}
                className={`block font-medium ${
                  location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {['Home', 'Services', 'About', 'Contact'][idx]}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Order Now
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
