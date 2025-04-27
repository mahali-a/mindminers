'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import AboutSection from '@/components/about-section';
import CorporateSection from '@/components/corporate-section';
import CoursesSection from '@/components/courses-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import NavBar from '@/components/nav-bar';
import CtaSection from '@/components/scta-section';
import TestimonialCarousel from '@/components/testimonial-carousel';
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInUpVariants,
  scaleUpVariants,
  staggerContainer,
} from '@/lib/animation';

export default function Home() {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const corporateRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  // Check if sections are in view
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const coursesInView = useInView(coursesRef, { once: true, amount: 0.2 });
  const corporateInView = useInView(corporateRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  return (
    <div className="">
      <NavBar />

      {/* Hero section - no motion */}
      <Hero />

      {/* About section */}
      <div ref={aboutRef}>
        <motion.div variants={fadeInUpVariants} initial="hidden" animate={aboutInView ? 'visible' : 'hidden'}>
          <AboutSection />
        </motion.div>
      </div>

      {/* Courses section */}
      <div ref={coursesRef}>
        <motion.div variants={staggerContainer} initial="hidden" animate={coursesInView ? 'visible' : 'hidden'}>
          <CoursesSection />
          <div className="text-center mt-5 md:mt-15">
            <motion.div variants={fadeInUpVariants}>
              {/* <CustomButton
                variant="outline"
                size="md"
                withIcon={true}
                endIcon={<span className="ml-2">→</span>}
                className="w-full max-w-xs mx-auto sm:max-w-none sm:w-auto"
                href="/courses"
              >
                View all courses
              </CustomButton> */}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Corporate section */}
      <div ref={corporateRef}>
        <motion.div variants={fadeInLeftVariants} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'}>
          <CorporateSection />
        </motion.div>
      </div>

      {/* Testimonials section */}
      <div ref={testimonialsRef}>
        <motion.div variants={scaleUpVariants} initial="hidden" animate={testimonialsInView ? 'visible' : 'hidden'}>
          <TestimonialCarousel />
        </motion.div>
      </div>

      {/* FAQ section */}
      <div ref={faqRef}>
        <motion.div variants={fadeInRightVariants} initial="hidden" animate={faqInView ? 'visible' : 'hidden'}>
          <FaqSection />
        </motion.div>
      </div>

      {/* CTA section */}
      <div ref={ctaRef}>
        <motion.div variants={fadeInUpVariants} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}>
          <CtaSection />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
