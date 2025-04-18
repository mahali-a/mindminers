import React from 'react';

import Footer from '@/components/footer';
import EnrollmentForm from './components/enrollment-form';
import EnrollmentHeader from './components/enrollment-header';

interface EnrollProps {
  initialCourseId?: string;
}

export default function Enroll({ initialCourseId = '' }: EnrollProps) {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-12">
        <EnrollmentHeader />
        <EnrollmentForm initialCourseId={initialCourseId} />
      </main>
      <Footer />
    </>
  );
}
