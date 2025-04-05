'use client';

import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { SectionHeader } from './section-header';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Reference to track if component is mounted
  const isMounted = useRef(true);

  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'David Chen',
      role: 'CTO, NexTech Solutions',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote:
        'The cognitive training program at Mind Miners has significantly enhanced our development team&apos;s problem-solving capabilities. y.',
    },
    {
      id: 2,
      name: 'Ama Boateng',
      role: 'Founder, Freshyo AI',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote:
        'Mind Miners transformed the way our team approaches problem-solving! After the Cognitive Training sessions, we became more productive and innovative. ',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Director of Operations, Global Ed',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      quote: 'Implementing Mind Miners&apos; techniques across our organization has reduced decision-making  ',
    },
    {
      id: 4,
      name: 'Michael Roberts',
      role: 'VP of Engineering, TechFlow',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote:
        'The team-building exercises combined with cognitive training created a powerful synergy that transformed our department. ',
    },
    {
      id: 5,
      name: 'Elena Santiago',
      role: 'Product Manager, Innovate Inc.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote:
        'Mind Miners&apos; approach to problem-solving and creative thinking has been a game-changer for our product development process. ',
    },
  ];

  // Next testimonial function (memoized to prevent recreating in useEffect)
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [isAnimating, testimonials.length]);

  // Previous testimonial function
  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [isAnimating, testimonials.length]);

  // Navigation with animation lock
  const goToTestimonial = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(index);
    },
    [isAnimating]
  );

  // Reset animation lock after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMounted.current) {
        setIsAnimating(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Automated rotation effect
  useEffect(() => {
    // Set up cleanup function when component unmounts
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    let autoRotateInterval: NodeJS.Timeout;

    if (!isPaused) {
      autoRotateInterval = setInterval(() => {
        if (!isAnimating && isMounted.current) {
          nextTestimonial();
        }
      }, 5000); // Change testimonial every 5 seconds
    }

    // Clean up interval on component unmount or when paused
    return () => {
      clearInterval(autoRotateInterval);
    };
  }, [isPaused, isAnimating, nextTestimonial]);

  // Get 3 visible testimonials with wrap-around
  const getVisibleTestimonials = (): Testimonial[] => {
    const length = testimonials.length;
    return [
      testimonials[(activeIndex - 1 + length) % length],
      testimonials[activeIndex],
      testimonials[(activeIndex + 1) % length],
    ] as Testimonial[];
  };

  // Get the visible testimonials
  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      className="py-16 px-4 my-20 overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header with Badge */}
      <div className="text-center ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-block heading-pill mb-4"
        >
          <SectionHeader text="Testimonials" />
        </motion.div>
      </div>
      {/* Section Title */}
      <h2 className="text-3xl font-medium text-center text-gray-800 mb-16">Hear from our success stories</h2>

      {/* Testimonial Carousel */}
      <div className="w-[1600px] ml-[-100px] mx-auto relative">
        <div className="flex items-center justify-center">
          {/* Left navigation button */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-2 md:left-8 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:bg-white transition-all duration-300 disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Testimonial Display */}
          <div className="flex w-full mx-auto justify-center items-stretch overflow-visible">
            {visibleTestimonials.map((testimonial, idx) => {
              if (!testimonial) return null;

              // Determine positioning and styling based on position
              const isCenter = idx === 1;

              // Positioning classes
              let positionClass = '';
              if (idx === 0) positionClass = 'z-0'; // Left
              if (idx === 1) positionClass = 'z-10'; // Center
              if (idx === 2) positionClass = 'z-0'; // Right

              return (
                <div
                  key={`${testimonial.id}-${idx}-${activeIndex}`}
                  className={`transition-all duration-500 ease-out ${positionClass} ${
                    isCenter
                      ? 'w-3/5 md:w-1/2 lg:w-2/5 transform-none opacity-100'
                      : 'w-1/4 md:w-1/3 opacity-40 blur-[2px] scale-90 hover:opacity-60 hover:blur-[1px] transition-all'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transform: isCenter
                      ? 'translateZ(0)'
                      : `translateZ(-50px) ${idx === 0 ? 'rotateY(15deg)' : 'rotateY(-15deg)'}`,
                  }}
                >
                  <div
                    className={`h-42 flex flex-row rounded-2xl overflow-hidden transition-all duration-500 ${
                      isCenter ? 'bg-white  ' : 'bg-white/80'
                    }`}
                  >
                    {/* Profile Picture */}
                    <div className={`relative ${isCenter ? 'aspect-[4/3]' : 'aspect-[3/2]'}  w-[200px]`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Testimonial Content - Show more details for center */}
                    <div className={`px-4 py-1 pb-4 ${isCenter ? 'px-6' : ''} flex-grow flex flex-col`}>
                      <h3 className={`font-bold text-blue-600 ${isCenter ? 'text-lg mb-1' : 'text-lg truncate'}`}>
                        {testimonial.name}
                      </h3>

                      <p className={`text-gray-600 text-xs ${isCenter ? 'mb-2' : 'text-sm truncate'}`}>
                        {testimonial.role}
                      </p>

                      {isCenter && (
                        <>
                          <div className="mb-2 text-pink-300 ">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed flex-grow">{testimonial.quote}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right navigation button */}
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-2 md:right-8 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:bg-white transition-all duration-300 disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Pagination indicators with auto-rotation progress */}
        <div className="flex justify-center space-x-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className="relative rounded-full"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {/* Background indicator */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-gray-300' : 'bg-gray-300'
                }`}
              />

              {/* Active indicator with progress */}
              {index === activeIndex && !isPaused && (
                <motion.div
                  className="absolute inset-0 bg-black rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                  key={`progress-${activeIndex}`}
                />
              )}

              {/* Static active indicator when paused */}
              {index === activeIndex && isPaused && <div className="absolute inset-0 bg-black rounded-full" />}

              {/* Elongated active indicator */}
              {index === activeIndex && <div className="absolute inset-0 w-8 h-2 -ml-3 bg-black rounded-full" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
