import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/restArea/[id]' && <NavBar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
