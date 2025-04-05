'use client';

import React, { useEffect } from 'react';

import CourseCard from '@/components/courses-card';
import Footer from '@/components/footer';
import CourseHeroSection from '../courses/components/course-hero-section';
import CourseInfoSection from '../courses/components/course-info';

const courseData = [
  {
    id: 1,
    imageSrc: '/images/course-1.png',
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
    imageSrc: '/images/course-2.png',
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
    imageSrc: '/images/course-3.png',
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
    imageSrc: '/images/course-4.png',
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

const CourseDetail = () => {
  // Add a smooth scroll effect when the page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <CourseHeroSection />
        <CourseInfoSection />

        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-8">Explore more courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[400px]">
            {courseData.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={course.imageSrc}
                title={course.title}
                description={course.description}
                category={course.category}
                rating={course.rating}
                reviewCount={course.reviewCount}
                price={course.price}
                discountedPrice={course.discountedPrice}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
