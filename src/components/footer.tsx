import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
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
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand-blue text-sm transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">Accra, Ghana</span>
              </li>
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">0504574334</span>
              </li>
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">info@mindminers.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">LinkedIn</span>
              </li>
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">Twitter (X)</span>
              </li>
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">Instagram</span>
              </li>
              <li className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  className="text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm">TikTok</span>
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
