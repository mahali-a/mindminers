import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import { NextRequest, NextResponse } from 'next/server';

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

// GraphQL query for course by ID
const COURSE_BY_ID_QUERY = gql`
  query CourseById($id: ID!) {
    course(id: $id) {
      id
      title
      numberOfStudents
      enrollmentsCount
      featuredImage {
        id
        filesize
        width
        height
        extension
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
        coursesCount
      }
    }
  }
`;

export async function GET(request: NextRequest, { params }: any) {
  const courseId = params.id;

  if (!courseId) {
    return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
  }

  try {
    // Execute the query with the ID variable
    const { data, error } = await client.query({
      query: COURSE_BY_ID_QUERY,
      variables: { id: courseId },
    });

    if (error) {
      console.error(`GraphQL error for course ID ${courseId}:`, error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Log the response for debugging
    console.log(`Server-side course details for ID ${courseId}:`, JSON.stringify(data).substring(0, 200) + '...');

    return NextResponse.json({ data });
  } catch (error) {
    console.error(`Error fetching course details for ID ${courseId}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch course details', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
