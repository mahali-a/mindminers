import React from 'react';

import CoursesSection from '@/components/courses-section';
import Footer from '@/components/footer';
import CtaSection from '@/components/scta-section';
import CoursesHero from '@/features/courses/components/courses-hero';

export default function page() {
  return (
    <div>
      <CoursesHero />
      <CoursesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
