import { NextResponse } from 'next/server';

export default async function fetchApi(url: string) {
  try {
    // Send request to API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'ToonTask',
      },
    });

    // Parse the response
    const data = await response.json();

    return data;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
