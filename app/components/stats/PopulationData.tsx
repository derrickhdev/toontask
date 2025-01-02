import { Container } from '@mui/material';

interface Population {
  error: null | string;
  totalPopulation: number;
  populationByDistrict: { [districtName: string]: number };
  statusByDistricts: { [distrctName: string]: string };
  lastUpdated: number;
}

const PopulationData = async () => {
  const url = process.env.NEXT_PUBLIC_POPULATION_API_URL;

  if (!url) {
    throw new Error('Population API URL is missing');
  }

  const data = await fetch(url, {
    cache: 'no-store',
  });

  const population: Population = await data.json();

  const districtArray = Object.entries(population.populationByDistrict).sort();

  return (
    <>
      <Container>
        <p>Last updated: {population.lastUpdated}</p>
        <p>{population.totalPopulation}</p>
        <ul>
          {districtArray.map(([district, populationDistrict]: [string, number]) => (
            <li key={district}>
              {district}: {populationDistrict}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default PopulationData;
