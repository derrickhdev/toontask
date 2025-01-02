import { NextResponse } from 'next/server';
import fetchApi from '@/app/utils/fetchApi';

export async function GET(req: Request) {
  const POPULATION_API_URL = process.env.POPULATION_API_URL || 'https://www.toontownrewritten.com/api/population';

  try {
    const populationData = await fetchApi(POPULATION_API_URL);

    // Returns HTTP response
    const res = NextResponse.json(populationData);

    // Cache the response for 60 seconds
    res.headers.set('Cache-Control', 'public, max-age=60');
    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch population data' }, { status: 500 });
  }
}
