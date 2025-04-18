import { NextResponse } from 'next/server';

// Hardcoded nationality data as requested
const NATIONALITIES = [
  {
    id: 'ghana',
    name: 'Ghana',
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
  },
  {
    id: 'cote-divoire',
    name: "Côte d'Ivoire",
  },
  {
    id: 'togo',
    name: 'Togo',
  },
];

export async function GET() {
  try {
    // Log the response for debugging
    console.log('Server-side nationalities data: returning', NATIONALITIES.length, 'nationalities');

    // Return the hardcoded data
    return NextResponse.json({
      data: {
        nationalities: NATIONALITIES,
      },
    });
  } catch (error) {
    console.error('Error handling nationalities request:', error);
    return NextResponse.json(
      { error: 'Failed to fetch nationalities', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
