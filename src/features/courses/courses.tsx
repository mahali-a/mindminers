import React from 'react';

import CoursesSection from '@/components/courses-section';
import Footer from '@/components/footer';
import CtaSection from '@/components/scta-section';
import CoursesHero from './components/courses-hero';

export default function Courses() {
  return (
    <div>
      <CoursesHero />
      <CoursesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
