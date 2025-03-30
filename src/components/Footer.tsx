
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                ProFile
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered resume builder for the modern professional. Stand out with personalized, ATS-optimized resumes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-400">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/templates" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link to="/career-center" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Career Center
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for tips and updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white dark:bg-gray-800"
              />
              <Button size="sm" variant="default">
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} ProFile. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-400">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
