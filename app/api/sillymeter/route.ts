import { NextResponse } from 'next/server';
import fetchApi from '@/app/utils/fetchApi';

export async function GET(req: Request) {
  const SILLYMETER_API_URL = process.env.SILLYMETER_API_URL || 'https://www.toontownrewritten.com/api/sillymeter';

  try {
    const sillyData = await fetchApi(SILLYMETER_API_URL);

    // Returns HTTP response
    const res = NextResponse.json(sillyData);

    // Cache the response for 60 seconds
    res.headers.set('Cache-Control', 'public, max-age=60');
    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Silly Meter data' }, { status: 500 });
  }
}
