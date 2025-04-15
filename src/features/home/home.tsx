'use client';

import { motion } from 'framer-motion';
import React from 'react';

import AboutSection from '@/components/about-section';
import { CustomButton } from '@/components/common/CustomButton';
import CorporateSection from '@/components/corporate-section';
import CoursesSection from '@/components/courses-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import NavBar from '@/components/nav-bar';
import CtaSection from '@/components/scta-section';
import TestimonialCarousel from '@/components/testimonial-carousel';

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <AboutSection />
      <div>
        <CoursesSection />
        <div className="text-center mt-5 md:mt-15">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <CustomButton
              variant="outline"
              size="md"
              withIcon={true}
              endIcon={<span className="ml-2">→</span>}
              className="w-full max-w-xs mx-auto sm:max-w-none sm:w-auto"
              href="/courses"
            >
              View all courses
            </CustomButton>
          </motion.div>
        </div>
      </div>

      <CorporateSection />
      <TestimonialCarousel />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
