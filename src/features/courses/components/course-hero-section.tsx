import React from 'react';

const CourseHeroSection = () => {
  return (
    <section className="bg-amber-50 mt-4 lg:max-w-7xl mx-auto sm:mt-6 md:mt-10 mx-auto rounded-lg sm:rounded-xl md:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="rounded-lg p-2">
                <img
                  src="/images/logo-pink.png"
                  alt="Mind Miners Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-gray-500">Taught by</span>
                <span className="font-medium text-sm sm:text-base">Mind Miners</span>
              </div>
              <div className="flex items-center gap-1 ml-2 sm:ml-4">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-400 border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-400 border-2 border-white"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">• 42 students</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Overcome Math Anxiety and Master the Basics
            </h1>
          </div>

          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-yellow-300 max-w-md mx-auto lg:max-w-none">
              <img src="/images/course-detail.png" alt="Course thumbnail" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
