import { gql } from '@apollo/client';
import { Metadata } from 'next';

import CourseDetails from '@/features/course-details/course-details';
import { getClient } from '@/lib/apollo-client';

export const metadata: Metadata = {
  title: 'Course Details | Mind Miners',
  description: 'Detailed information about our course offerings',
};

// GraphQL query for course by ID
const COURSE_BY_ID_QUERY = gql`
  query Course($id: ID!) {
    course(where: { id: $id }) {
      id
      title
      numberOfStudents
      enrollmentsCount
      featuredImage {
        id
        url
      }
      requirements {
        document
      }
      whatYouWillLearn {
        document
      }
      targetAudience {
        document
      }
      learningTechniques {
        document
      }
      category {
        id
        name
      }
    }
  }
`;

async function getCourseData(id: string) {
  try {
    const client = getClient();
    const { data, error } = await client.query({
      query: COURSE_BY_ID_QUERY,
      variables: { id },
      fetchPolicy: 'no-cache',
    });

    if (error || !data?.course) {
      console.error('GraphQL error or missing data:', error);
      return null;
    }

    console.log('Server-side fetch course title:', data.course.title);
    return data.course;
  } catch (error) {
    console.error('Error fetching course data:', error);
    return null;
  }
}

// Using the correct TypeScript directive
// @ts-expect-error Next.js PageProps type incompatibility
export default async function CourseDetailsPage({ params }) {
  const courseData = await getCourseData(params.id);

  return <CourseDetails initialCourseData={courseData} />;
}
