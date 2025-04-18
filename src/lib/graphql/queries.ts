import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
    }
  }
`;
// Query to get nationalities
export const GET_NATIONALITIES = gql`
  query GetNationalities {
    nationalities {
      id
      name
    }
  }
`;
// Mutation to submit enrollment
export const SUBMIT_ENROLLMENT = gql`
  mutation CreateEnroll($input: EnrollInput!) {
    createEnroll(data: $input) {
      id
      firstName
      lastName
      dob
      gender
      emailAddress
      phoneNumber
      nationality
      streetAddress
      city
      postalCode
      levelOfEducation
      referral
    }
  }
`;
// Types for the enrollment form data
export interface Course {
  id: string;
  title: string;
  description?: string;
  category?: string;
}
export interface Nationality {
  id: string;
  name: string;
  code: string;
}
export interface EnrollmentInput {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  nationality: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  educationLevel: string;
  desiredCourse: string;
  referralSource: string;
}
