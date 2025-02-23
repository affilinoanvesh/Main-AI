import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                  <Beaker className="w-7 h-7 text-white transform -rotate-12" />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-none mb-0.5">User Labs</span>
                <span className="text-xs text-primary-600 font-medium tracking-wider">AI SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              Custom AI solutions for businesses, built with care and expertise.
            </p>
            <a 
              href="mailto:hello@userlabs.co.nz"
              className="text-primary-600 hover:text-primary-700 inline-block"
            >
              hello@userlabs.co.nz
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/industries" className="text-gray-600 hover:text-gray-900">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-600 text-center">© 2025 User Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}