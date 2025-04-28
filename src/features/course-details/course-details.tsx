'use client';

import React, { useEffect, useState } from 'react';

import CourseCard from '@/components/courses-card';
import Footer from '@/components/footer';
import CourseHeroSection from '@/features/course-details/components/course-hero-section';
import CourseInfoSection from '@/features/course-details/components/course-info';

// Types for our course data
interface CourseData {
  id: string;
  title: string;
  numberOfStudents?: number;
  enrollmentsCount?: number;
  featuredImage?: {
    id: string;
    url: string;
  } | null;
  requirements?: {
    document: any;
  };
  whatYouWillLearn?: {
    document: any;
  };
  targetAudience?: {
    document: any;
  };
  learningTechniques?: {
    document: any;
  };
  category?: {
    id: string;
    name: string;
  };
  description?: string;
  rating?: number;
  reviewCount?: number;
  price?: number;
  discountedPrice?: number;
  imageSrc?: string;
}

interface CourseDetailProps {
  initialCourseData: CourseData;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ initialCourseData }) => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState<Error | null>(null);

  // const params = useParams();

  // Log the initial course data
  useEffect(() => {
    console.log('Initial course data from server:', initialCourseData);
    console.log('Course title from server:', initialCourseData?.title);
  }, [initialCourseData]);

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

  // Add a smooth scroll effect when the page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Transform API courses for display
  const transformedCourses = courses
    .filter((course) => course.id !== initialCourseData.id)
    .map((course) => ({
      ...course,
      imageSrc: course.featuredImage?.url || `/images/course-${Math.floor(Math.random() * 4) + 1}.png`,
      description: course.description || 'Learn specialized techniques to enhance your mental abilities',
      category: course.category?.name || 'General',
      rating: course.rating || 4.8,
      reviewCount: course.reviewCount || 95,
      price: course.price || 49.99,
      discountedPrice: course.discountedPrice,
      enrollmentsCount: course.numberOfStudents || course.enrollmentsCount || 0,
    }));

  return (
    <div className="min-h-screen bg-white">
      <main>
        <CourseHeroSection course={initialCourseData} />
        <CourseInfoSection course={initialCourseData} />

        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-8">Explore more courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[400px]">
            {transformedCourses
              ?.slice(0, 4)
              .map((course) => (
                <CourseCard
                  key={course.id}
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
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
