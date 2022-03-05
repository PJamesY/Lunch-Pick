import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUser = () => ({ user: 'james', loading: false });

const App = function App() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login');
    }
  }, [user, loading]);

  return (
    <div className="App">
      <Head>
        <title>Home</title>
      </Head>
    </div>
  );
};

export default App;
