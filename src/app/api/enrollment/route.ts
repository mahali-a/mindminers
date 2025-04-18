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

// GraphQL mutation for enrollment submission
const SUBMIT_ENROLLMENT_MUTATION = gql`
  mutation Mutation($data: [EnrollCreateInput!]!) {
    createEnrolls(data: $data) {
      streetAddress
      referral
      postalCode
      phoneNumber
      nationality
      levelOfEducation
      lastName
      id
      gender
      firstName
      emailAddress
      dob
      city
      course {
        id
      }
    }
  }
`;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const enrollmentData = await request.json();

    if (!enrollmentData) {
      return NextResponse.json({ error: 'Invalid enrollment data' }, { status: 400 });
    }

    // Format date as full ISO 8601 string
    let dobFormatted = enrollmentData.dob;

    // If the date is in YYYY-MM-DD format, convert it to a full ISO string
    if (dobFormatted && dobFormatted.match(/^\d{4}-\d{2}-\d{2}$/)) {
      // Create a date at noon UTC to avoid timezone issues
      const dobDate = new Date(`${dobFormatted}T12:00:00Z`);
      dobFormatted = dobDate.toISOString();
      console.log('Formatted DOB:', dobFormatted);
    }

    // Prepare data for the mutation
    const mutationData = [
      {
        firstName: enrollmentData.firstName,
        lastName: enrollmentData.lastName,
        dob: dobFormatted, // Use the properly formatted date
        gender: enrollmentData.gender,
        emailAddress: enrollmentData.emailAddress,
        phoneNumber: enrollmentData.phoneNumber,
        nationality: enrollmentData.nationality,
        streetAddress: enrollmentData.streetAddress,
        city: enrollmentData.city,
        postalCode: enrollmentData.postalCode,
        levelOfEducation: enrollmentData.levelOfEducation,
        referral: enrollmentData.referral,
        course: {
          connect: { id: enrollmentData.courseId },
        },
      },
    ];

    console.log('Submitting enrollment data:', JSON.stringify(mutationData).substring(0, 200) + '...');

    // Execute the mutation
    const { data, errors } = await client.mutate({
      mutation: SUBMIT_ENROLLMENT_MUTATION,
      variables: { data: mutationData },
    });

    if (errors) {
      console.error('GraphQL errors:', errors);
      return NextResponse.json({ error: errors[0]?.message || 'GraphQL mutation error' }, { status: 500 });
    }

    if (!data || !data.createEnrolls || data.createEnrolls.length === 0) {
      console.error('No enrollment data returned');
      return NextResponse.json({ error: 'Failed to create enrollment' }, { status: 500 });
    }

    // Return the successful response
    return NextResponse.json({
      success: true,
      data: data.createEnrolls[0],
    });
  } catch (error) {
    console.error('Error submitting enrollment:', error);
    return NextResponse.json(
      { error: 'Failed to submit enrollment', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
