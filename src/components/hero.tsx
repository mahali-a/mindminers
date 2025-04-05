'use client';

import { Button } from '@/components/ui/button';
import GradientBadge from './gradient-badge';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-0">
      <div className="relative max-w-7xl bg-[#FFF9E9] rounded-3xl mx-2   my-4 sm:my-6 border-2 sm:border-4 border-[#0057FF] overflow-hidden shadow-[-5px_5px_0px_0px_#0057FF] sm:shadow-[-10px_10px_0px_0px_#0057FF]">
        {/* <div className={`absolute bg-red-500 rounded-2xl w-full h-full top-3 right-3 z-0`}></div> */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-8 md:pt-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 sm:mb-6">
              <GradientBadge text="NEVER STOP LEARNING" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-3 sm:mb-4">
              Unleash your mind&apos;s
              <br className="hidden sm:block" />
              full potential
            </h1>

            <p className="text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-xl">
              Discover innovative learning techniques designed to
              <br className="hidden sm:block" />
              enhance cognitive abilities and life skills.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 items-center justify-center w-full">
              <div className="w-full sm:w-auto">
                <Button className="bg-[#0057FF] shadow-lg hover:bg-[#0057FF]/90 text-[#FEDE70] px-6 sm:px-8 py-3 sm:py-4 h-auto text-base rounded-full w-full sm:w-auto">
                  Get Started
                </Button>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="flex -space-x-3">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF]  overflow-hidden">
                    <img src="/images/snap-1.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF]  overflow-hidden">
                    <img src="/images/snap-2.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF]  overflow-hidden">
                    <img src="/images/snap-3.png" alt="User" className="w-full h-full object-cover" />
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
            <div className="rounded-xl sm:rounded-2xl overflow-hidden ">
              <img
                src="/images/person-1.png"
                alt="Student with book"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden ">
              <img
                src="/images/person-2.png"
                alt="Student with laptop"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden ">
              <img
                src="/images/person-3.png"
                alt="Business person"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden ">
              <img
                src="/images/person-4.png"
                alt="Business presentation"
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className=" sm:block hidden  absolute top-60 left-60 w-12 sm:w-30 h-12 sm:h-30 rotate-12">
          <img src="/analysis.svg" alt="Book" className="w-full h-full object-cover" />
        </div>

        <div className=" sm:block absolute hidden top-60 right-60 w-12 sm:w-30 h-12 sm:h-30 -rotate-12">
          <img src="/brain.svg" alt="Book" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
