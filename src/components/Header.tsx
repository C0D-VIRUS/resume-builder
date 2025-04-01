
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
          ProFile:AI powered Resume Builder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-brand-400">
            Home
          </Link>
          <Link to="/templates" className="text-sm font-medium transition-colors hover:text-brand-400">
            Templates
          </Link>
          <Link to="/career-center" className="text-sm font-medium transition-colors hover:text-brand-400">
            Career Center
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/templates" 
              className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/career-center" 
              className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Career Center
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link 
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full justify-start">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
