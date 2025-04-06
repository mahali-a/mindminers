import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white  border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center mb-5">
              <div className="text-brand-blue font-bold text-lg flex space-x-2 items-center">
                <img src="/images/logo.png" alt="mindminers-logo" className="w-6 h-6" />
                <span>mindminers</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm mb-5">
              We believe in unlocking human potential through innovative learning techniques.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:text-brand-blue text-sm transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">Accra, Ghana</span>
              </li>
              <li className="flex items-start">
                <Phone className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">0504574334</span>
              </li>
              <li className="flex items-start">
                <Mail className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">info@mindminers.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaLinkedin className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">LinkedIn</span>
              </li>
              <li className="flex items-start">
                <FaXTwitter className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">Twitter (X)</span>
              </li>
              <li className="flex items-start">
                <Instagram className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">Instagram</span>
              </li>
              <li className="flex items-start">
                <FaTiktok className=" w-5 h-5 mr-2 mt-0.5" />
                <span className=" text-sm">TikTok</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2023 MindMiners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
