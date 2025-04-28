import { getCodes, getNames } from 'country-list';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get country names and codes from country-list library
    const countryNames = getNames() as string[];
    const countryCodes = getCodes() as string[];

    // Transform into the expected format
    const nationalities = countryNames.map((name: string, index: number) => ({
      id: countryCodes[index]?.toLowerCase() || `country-${index}`,
      name,
    }));

    // Log the response for debugging
    console.log('Server-side nationalities data: returning', nationalities.length, 'nationalities');

    // Return the country data
    return NextResponse.json({
      data: {
        nationalities,
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
