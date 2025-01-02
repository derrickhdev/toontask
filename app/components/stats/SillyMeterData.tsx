import { Container } from '@mui/material';
import unixConverter from '../../utils/unixConverter';

const SillyMeterData = async () => {
  const url = process.env.NEXT_PUBLIC_SILLYMETER_API_URL;

  if (!url) {
    throw new Error('Silly Meter API URL is missing');
  }

  const data = await fetch(url, {
    cache: 'no-store',
  });

  const silly = await data.json();

  const sillyState = silly.state;
  const sillyRewards = silly.rewards;
  const sillyDescriptions = silly.rewardDescriptions;
  const sillyPoints = silly.rewardPoints;
  const sillyWinner = silly.winner;
  const sillyHp = silly.hp;
  const sillyNextUpdate = silly.nextUpdateTimestamps;
  const sillyAsOf = unixConverter(silly.asOf);
  const sillyRatio = silly.hp / 5000000;

  return (
    <>
      <Container>
        <p>{sillyState}</p>
        <p>{sillyHp}</p>
        <p>{sillyRatio}</p>
        <p>{sillyAsOf.toLocaleTimeString()}</p>
      </Container>
    </>
  );
};

export default SillyMeterData;
