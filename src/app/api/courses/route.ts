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

// GraphQL query for courses
const COURSES_QUERY = gql`
  query Courses {
    courses {
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

export async function GET() {
  try {
    // Execute the query
    const { data, error } = await client.query({
      query: COURSES_QUERY,
    });

    if (error) {
      console.error('GraphQL error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Log the response for debugging
    console.log('Server-side courses data:', JSON.stringify(data).substring(0, 200) + '...');

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
