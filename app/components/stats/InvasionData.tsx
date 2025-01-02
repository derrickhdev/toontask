import { Container } from '@mui/material';

const InvasionData = async () => {
  const url = process.env.NEXT_PUBLIC_INVASIONS_API_URL;
  if (!url) {
    throw new Error('Invasion API URL is missing');
  }
  const data = await fetch(url, {
    cache: 'no-store',
  });

  const invasion = await data.json();

  const invasionDistricts = Object.entries(invasion.invasions);

  return (
    <>
      <Container>
        <p>Invasion Data</p>
      </Container>
    </>
  );
};

export default InvasionData;
