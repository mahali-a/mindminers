'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from './courses-card';
import { SectionHeader } from './section-header';

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

// Interface for course data from API
interface CourseData {
  id: string;
  title: string;
  numberOfStudents?: number;
  enrollmentsCount?: number;
  featuredImage?: {
    id: string;
    url: string;
  } | null;
  category?: {
    id: string;
    name: string;
  };
}

// Define a TransformedCourse interface that includes all properties used in the component
interface TransformedCourse {
  id: string | number;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  categoryId: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountedPrice?: number;
  enrollmentsCount?: number;
}

// Fallback course data in case API returns empty
const fallbackCourses = [
  {
    id: 1,
    title: 'Overcome Math Anxiety and Master the Basics',
    description:
      'Learn fundamental math concepts in a stress-free environment designed to build confidence and mathematical thinking.',
    category: 'First Aid in Mathematics',
    categoryId: 'math',
    imageSrc: '/images/course-1.png',
    rating: 4.9,
    reviewCount: 128,
    price: 49.99,
    discountedPrice: 39.99,
    enrollmentsCount: 40,
  },
  {
    id: 2,
    title: 'Cognitive Training for Mental Agility',
    description: 'Break through mental blocks and develop solid foundations in mental arithmetic and problem-solving.',
    category: 'Cognitive Training',
    categoryId: 'cognitive',
    imageSrc: '/images/course-2.png',
    rating: 4.8,
    reviewCount: 96,
    price: 49.99,
    enrollmentsCount: 35,
  },
  {
    id: 3,
    title: 'Reading Comprehension Mastery',
    description:
      'Transform reading anxiety into reading confidence with our specialized cognitive approach to comprehension.',
    category: 'First Aid in Comprehension',
    categoryId: 'comprehension',
    imageSrc: '/images/course-3.png',
    rating: 4.7,
    reviewCount: 87,
    price: 49.99,
    enrollmentsCount: 28,
  },
  {
    id: 4,
    title: 'Essential Life Skills',
    description:
      'Master the fundamentals of life skills through our unique cognitive training approach designed to reduce anxiety.',
    category: 'Life Skills',
    categoryId: 'skills',
    imageSrc: '/images/course-4.png',
    rating: 4.9,
    reviewCount: 112,
    price: 59.99,
    discountedPrice: 49.99,
    enrollmentsCount: 53,
  },
];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [courses, setCourses] = useState<CourseData[]>([]);

  // Fetch courses from server API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/courses');

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Courses from server API:', responseData);

        if (responseData.data && responseData.data.courses) {
          setCourses(responseData.data.courses);
        } else {
          console.warn('No courses data returned from API');
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleTabChange = (value: TabValue) => {
    setActiveTab(value);
  };

  // Transform API courses for display
  const transformedCourses: TransformedCourse[] =
    courses.length > 0
      ? courses.map((course) => ({
          id: course.id,
          imageSrc: course.featuredImage?.url || `/images/course-${Math.floor(Math.random() * 4) + 1}.png`,
          title: course.title,
          description: 'Learn specialized techniques to enhance your mental abilities',
          category: course.category?.name || 'General',
          categoryId: course.category?.id || '',
          rating: 4.8,
          reviewCount: 95,
          price: 49.99,
          enrollmentsCount: course.numberOfStudents || course.enrollmentsCount || 0,
        }))
      : fallbackCourses;

  // Filter courses based on the active tab
  const getFilteredCourses = () => {
    if (activeTab === 'all') {
      return transformedCourses;
    }

    // Map our tab values to category search terms
    const categoryMapping: Record<string, string> = {
      kids: 'comprehension',
      comprehension: 'cognitive',
      online: 'skills',
      language: 'language',
    };

    const searchTerm = categoryMapping[activeTab] || '';

    return transformedCourses.filter(
      (course) =>
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.categoryId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const activeCourses = getFilteredCourses();

  return (
    <section className="section-container max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:mb-40 mx-auto pb-12">
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
                All Courses
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

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-brand-blue">Loading courses...</p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-red-500">Error loading courses. Using fallback data instead.</p>
          </div>
        )}

        {/* Courses grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 min-h-[400px]">
            <AnimatePresence>
              {activeCourses.length > 0 ? (
                activeCourses.map((course) => (
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
                      id={course.id.toString()}
                      imageSrc={course.imageSrc}
                      title={course.title}
                      description={course.description}
                      category={course.category}
                      rating={course.rating}
                      reviewCount={course.reviewCount}
                      price={course.price}
                      discountedPrice={course.discountedPrice}
                      enrollmentsCount={course.enrollmentsCount}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500">No courses found in this category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </Tabs>
    </section>
  );
};

export default CoursesSection;
