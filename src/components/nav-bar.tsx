'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 mx-auto relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-brand-blue font-bold text-xl space-x-1 flex items-center">
              <img src="/images/logo.png" alt="mindminers-logo" className="w-8 h-8" />
              <span className="text-2xl">mindminers</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
              About Us
            </Link>
            <Link
              href="/training"
              className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors"
            >
              Training
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
              FAQs
            </Link>
            <Link href="/partner" className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
              Our Partner
            </Link>
          </nav>

          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="/contact"
              className="hidden sm:inline-flex font-semibold text-[#0056D2] border-[#0056D2] items-center border-2 justify-center rounded-md text-base text-brand-blue h-10 px-6 py-2 transition-colors hover:bg-brand-blue/5"
            >
              Contact Us
            </Link>
            <Link
              href="/enroll"
              className="inline-flex font-semibold bg-[#0056D2] items-center justify-center rounded-md text-base bg-brand-blue text-[#FEDE70] h-10 px-6 py-2 transition-colors hover:bg-brand-blue/90"
            >
              Enroll Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/courses"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/training"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              href="/faqs"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/partner"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Partner
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
