import { NextResponse } from 'next/server';
import fetchApi from '@/app/utils/fetchApi';

export async function GET(req: Request) {
  const INVASIONS_API_URL = process.env.INVASIONS_API_URL || 'https://www.toontownrewritten.com/api/invasions';

  try {
    const invasionData = await fetchApi(INVASIONS_API_URL);

    // Returns HTTP response
    const res = NextResponse.json(invasionData);

    // Cache the response for 60 seconds
    res.headers.set('Cache-Control', 'public, max-age=60');
    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch invasion data' }, { status: 500 });
  }
}
