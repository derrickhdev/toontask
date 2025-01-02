import PopulationData from '@/app/components/stats/PopulationData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Population',
  description: 'Toontown Rewritten Population',
};

const page = () => {
  return (
    <>
      <PopulationData />
    </>
  );
};

export default page;
