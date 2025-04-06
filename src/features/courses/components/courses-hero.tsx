'use client';

import { motion } from 'framer-motion';

const CoursesHero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className=" md:mt-20  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 sm:mb-6">Explore our courses</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            We offer a range of courses designed to enhance your cognitive abilities and life skills. Whether
            you&apos;re looking to strengthen your math foundation, improve comprehension, boost cognitive function, or
            develop essential life skills, we have the right course for you.
          </p>
          <p className="text-gray-900 py-2  text-lg font-semibold rounded-md transition-all duration-200 hover:opacity-80">
            Start your journey to smarter learning today.
          </p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl ">
              <img
                src="/images/course-hero.png"
                alt="Student learning"
                className="w-full h-auto object-cover pr-10 md:pr-0"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
