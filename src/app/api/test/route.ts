import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import { NextResponse } from 'next/server';

// Server-side Apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://mindminder-be.mahali.dev/api/graphql',
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

// Hardcoded course data for fallback
const HARDCODED_COURSE = {
  id: 'cm9j1divd0000qm0jtzmak6h1',
  title: 'Hardcoded Math Made Easy Course',
  numberOfStudents: 42,
  enrollmentsCount: 42,
  featuredImage: {
    id: '1',
    url: '/images/course-detail.png',
  },
  category: {
    id: '1',
    name: 'Math',
  },
};

// GraphQL query for course by ID with more fields
const TEST_QUERY = gql`
  query Course {
    course(where: { id: "cm9j1divd0000qm0jtzmak6h1" }) {
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

export async function GET() {
  try {
    // Execute the query
    const { data, error } = await client.query({
      query: TEST_QUERY,
      fetchPolicy: 'no-cache',
    });

    if (error) {
      console.error('GraphQL error:', error);
      // Return hardcoded data instead of error
      return NextResponse.json({
        data: { course: HARDCODED_COURSE },
        source: 'hardcoded fallback',
      });
    }

    // If the course is null or doesn't have a title, use hardcoded data
    if (!data?.course || !data.course.title) {
      console.log('Course data missing or incomplete, using hardcoded data');
      return NextResponse.json({
        data: { course: HARDCODED_COURSE },
        source: 'hardcoded fallback (missing data)',
      });
    }

    // Log the response for debugging
    console.log('Test course data - title:', data?.course?.title);
    console.log('Test course data - ID:', data?.course?.id);

    return NextResponse.json({
      data,
      source: 'graphql api',
    });
  } catch (error) {
    console.error('Error fetching test course:', error);

    // Return hardcoded data on error
    return NextResponse.json({
      data: { course: HARDCODED_COURSE },
      source: 'hardcoded fallback (error catching)',
    });
  }
}
