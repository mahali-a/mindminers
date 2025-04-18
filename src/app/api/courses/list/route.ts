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

// GraphQL query for simplified course list
const COURSE_LIST_QUERY = gql`
  query Courses {
    courses {
      id
      title
    }
  }
`;

export async function GET() {
  try {
    // Execute the query
    const { data, error } = await client.query({
      query: COURSE_LIST_QUERY,
    });

    if (error) {
      console.error('GraphQL error fetching course list:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Log the response for debugging
    console.log('Server-side courses list data:', data?.courses?.length || 0, 'courses fetched');

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching course list:', error);
    return NextResponse.json(
      { error: 'Failed to fetch course list', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
