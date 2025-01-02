import Link from 'next/link';
import RootLayout from './(main)/layout';

const NotFound = () => {
  return (
    <RootLayout>
      <p>womp womp 404</p>
      <p>
        <Link href="/">Teleport back home</Link>
      </p>
    </RootLayout>
  );
};

export default NotFound;
