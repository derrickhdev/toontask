import InvasionData from '@/app/components/stats/InvasionData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invasions',
  description: 'Toontown Rewritten Invasions',
};

const InvasionsPage = () => {
  return (
    <>
      <InvasionData />
    </>
  );
};

export default InvasionsPage;
