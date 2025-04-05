'use client';

import { motion } from 'framer-motion';

const CoursesHero = () => {
  return (
    <section className="section-container max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Explore our courses</h1>
          <p className="text-gray-600 text-lg mb-8">
            We offer a range of courses designed to enhance your cognitive abilities and life skills. Whether
            you&apos;re looking to strengthen your math foundation, improve comprehension, boost cognitive function, or
            develop essential life skills, we have the right course for you.
          </p>
          <button className="  text-gray-900 py-2 font-semibold  rounded-md transition-all duration-200">
            Start your journey to smarter learning today.
          </button>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden ">
              <img src="/images/course-hero.png" alt="Student learning" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
