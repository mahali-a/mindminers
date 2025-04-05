import React from 'react';

import AboutSection from '@/components/about-section';
import CorporateSection from '@/components/corporate-section';
import CoursesSection from '@/components/courses-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import NavBar from '@/components/nav-bar';
import CtaSection from '@/components/scta-section';
import TestimonialCarousel from '@/components/testimonial-carousel';

export default function page() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <AboutSection />
      <CoursesSection />
      <CorporateSection />
      <TestimonialCarousel />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
