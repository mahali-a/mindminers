import { Metadata } from 'next';

import Enroll from '@/features/enroll/enroll';

export const metadata: Metadata = {
  title: 'Enroll in a Course | Mind Miners',
  description: 'Enroll in our specialized cognitive learning courses',
};

export default function EnrollPage({ searchParams }: { searchParams?: { courseId?: string } }) {
  console.log('🚀 ~ EnrollPage ~ searchParams:', searchParams);
  // const courseId = searchParams?.courseId || '';

  return <Enroll />;
}
