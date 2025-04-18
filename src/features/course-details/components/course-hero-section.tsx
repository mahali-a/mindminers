'use client';

import React, { useEffect } from 'react';

interface CourseProps {
  course: {
    id: string;
    title?: string;
    numberOfStudents?: number;
    enrollmentsCount?: number;
    featuredImage?: {
      id: string;
      url: string;
    } | null;
  } | null;
}

const CourseHeroSection: React.FC<CourseProps> = ({ course }) => {
  // Log course data for debugging
  useEffect(() => {
    console.log('CourseHeroSection received course data from server:', course);
  }, [course]);

  // Fallback values for when API data is missing
  const title = course?.title || 'Overcome Math Anxiety and Master the Basics';
  const studentCount = course?.numberOfStudents || course?.enrollmentsCount || 42;
  const imageUrl = course?.featuredImage?.url || '/images/course-detail.png';

  return (
    <section className="bg-amber-50 mt-4 lg:max-w-7xl mx-auto sm:mt-6 md:mt-10 mx-auto rounded-lg sm:rounded-xl md:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center ">
              <div className="rounded-lg p-2">
                <img
                  src="/images/logo-2.png"
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
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full ">
                    <img src="/images/blink.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full ">
                    <img src="/images/big-bird.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full ">
                    <img src="/images/bartender.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full b">
                    <img src="/images/bill.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">+ {studentCount} students</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
          </div>

          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden max-w-md mx-auto lg:max-w-none">
              <img src={imageUrl} alt="Course thumbnail" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
