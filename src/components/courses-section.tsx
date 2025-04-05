'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from './courses-card';
import { SectionHeader } from './section-header';

interface Course {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountedPrice?: number;
  tags: string[];
}

const courseData = [
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Overcome Math Anxiety and Master the Basics',
    description:
      'Learn fundamental math concepts in a stress-free environment designed to build confidence and mathematical thinking.',
    category: 'Math',
    rating: 4.9,
    reviewCount: 128,
    price: 49.99,
    discountedPrice: 39.99,
    tags: ['For Adults', 'Beginners'],
  },
  {
    id: 2,
    imageSrc:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    title: 'Overcome Math Anxiety and Master the Basics',
    description: 'Break through mental blocks and develop solid foundations in mental arithmetic and problem-solving.',
    category: 'Math',
    rating: 4.8,
    reviewCount: 96,
    price: 49.99,
    tags: ['For Adults', 'Intermediate'],
  },
  {
    id: 3,
    imageSrc:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
    title: 'Overcome Math Anxiety and Master the Basics',
    description:
      'Transform math anxiety into math confidence with our specialized cognitive approach to mathematical learning.',
    category: 'Math',
    rating: 4.7,
    reviewCount: 87,
    price: 49.99,
    tags: ['For Kids'],
  },
  {
    id: 4,
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Overcome Math Anxiety and Master the Basics',
    description:
      'Master the fundamentals of mathematics through our unique cognitive training approach designed to reduce anxiety.',
    category: 'Math',
    rating: 4.9,
    reviewCount: 112,
    price: 59.99,
    discountedPrice: 49.99,
    tags: ['Online'],
  },
];

// Animation variants for the filtering effect
const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type TabValue = 'all' | 'kids' | 'comprehension' | 'online' | 'language';

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('all');

  const handleTabChange = (value: TabValue) => {
    setActiveTab(value);
  };

  const tabCoursesMap: Record<TabValue, Course[]> = {
    all: courseData,
    kids: courseData.filter((course) => course.tags.includes('For Kids')),
    comprehension: courseData.filter((course) => course.id % 2 === 0), // Example filter
    online: courseData.filter((course) => course.tags.includes('Online')),
    language: courseData.filter((course) => course.id % 3 === 0), // Example filter
  };

  // Get courses for the active tab
  const activeCourses = tabCoursesMap[activeTab] || [];

  return (
    <section className="section-container max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:my-20 md:mb-40 mx-auto pb-12">
      <div className="text-center mb-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-block heading-pill mb-4"
        >
          <SectionHeader text="Courses 📚" />
        </motion.div>
      </div>

      <Tabs
        defaultValue="all"
        className="mb-5 mx-auto"
        onValueChange={(value: string) => handleTabChange(value as TabValue)}
        value={activeTab}
      >
        <div className="relative mb-10 sm:mb-20">
          <div className="overflow-x-auto sm:overflow-visible pb-3 sm:pb-0">
            <TabsList className="inline-flex sm:flex sm:flex-wrap md:grid md:grid-cols-5 gap-2 bg-transparent w-max sm:w-full justify-center">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-black data-[state=active]:text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-black text-xs sm:text-sm transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              >
                First Aid in Mathematics
              </TabsTrigger>
              <TabsTrigger
                value="kids"
                className="data-[state=active]:bg-black data-[state=active]:text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-black text-xs sm:text-sm transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              >
                First Aid in Comprehension
              </TabsTrigger>
              <TabsTrigger
                value="comprehension"
                className="data-[state=active]:bg-black data-[state=active]:text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-black text-xs sm:text-sm transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              >
                Cognitive Training
              </TabsTrigger>
              <TabsTrigger
                value="online"
                className="data-[state=active]:bg-black data-[state=active]:text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-black text-xs sm:text-sm transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              >
                Life Skills
              </TabsTrigger>
              <TabsTrigger
                value="language"
                className="data-[state=active]:bg-black data-[state=active]:text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-black text-xs sm:text-sm transition-all duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              >
                Languages
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Using a single content area with AnimatePresence to animate items in/out */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[400px]">
          <AnimatePresence>
            {activeCourses.map((course: Course) => (
              <motion.div
                key={course.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
                layoutId={`course-${course.id}`}
              >
                <CourseCard
                  imageSrc={course.imageSrc}
                  title={course.title}
                  description={course.description}
                  category={course.category}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={course.price}
                  discountedPrice={course.discountedPrice}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Tabs>

      <div className="text-center mt-5 md:mt-15">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-[#0056D2] font-medium py-5 px-4 text-sm md:text-lg text-[#0056D2] hover:bg-[#0056D2] hover:text-white transition-all duration-300 w-full border-2 sm:w-auto"
          >
            View all courses <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
