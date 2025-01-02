import SillyMeterData from '@/app/components/stats/SillyMeterData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Silly Meter',
  description: 'Toon The Task',
};
const SillyMeterPage = () => {
  return (
    <>
      <SillyMeterData />
    </>
  );
};

export default SillyMeterPage;
