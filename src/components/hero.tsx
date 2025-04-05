'use client';

import { Button } from '@/components/ui/button';
import GradientBadge from './gradient-badge';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-0">
      <div className="relative w-full bg-[#FFF9E9] rounded-3xl mx-2 sm:mx-6 lg:mx-8 my-4 sm:my-6 border-2 sm:border-4 border-[#0057FF] overflow-hidden shadow-[-5px_5px_0px_0px_#0057FF] sm:shadow-[-10px_10px_0px_0px_#0057FF]">
        {/* <div className={`absolute bg-red-500 rounded-2xl w-full h-full top-3 right-3 z-0`}></div> */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 sm:mb-6">
              <GradientBadge text="NEVER STOP LEARNING" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-3 sm:mb-4">
              Unleash your mind&apos;s
              <br className="hidden sm:block" />
              full potential
            </h1>

            <p className="text-gray-700 max-w-lg mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Discover innovative learning techniques designed to
              <br className="hidden sm:block" />
              enhance cognitive abilities and life skills.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 items-center justify-center w-full">
              <div className="w-full sm:w-auto">
                <Button className="bg-blue-600 hover:bg-brand-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base rounded-full w-full sm:w-auto">
                  Get Started
                </Button>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="flex -space-x-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="items-center gap-2">
                  <div className="flex text-pink-400 text-sm sm:text-base">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm">(1.5k+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Images section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-10 pb-6 sm:pb-10">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Student with book"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Student with laptop"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Business person"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Business presentation"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden sm:block absolute top-32 left-20 w-12 sm:w-16 h-12 sm:h-16 rotate-12">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="12" fill="#4FD1C5" />
            <path d="M20 30H40M20 22H40M20 38H40" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="hidden sm:block absolute top-32 right-20 w-12 sm:w-16 h-12 sm:h-16 -rotate-12">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="12" fill="#F687B3" />
            <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="3" />
            <circle cx="30" cy="25" r="5" fill="white" />
            <path
              d="M22 38C22 34.6863 25.5817 32 30 32C34.4183 32 38 34.6863 38 38"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
