import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// const useUser = () => ({ user: 'james', loading: false });

const App = function App() {
  // const { user, loading } = useUser();
  const [user, setUser] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!(user || loading)) {
  //     router.push('/login');
  //   }
  // }, [user, loading]);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed');
        })
        .then((resObject) => {
          // console.log(resObject.user.displayName);
          setUser(resObject.user.displayName);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Home</title>
      </Head>
      <div className="buttons">
        <Link href="/restArea">
          <a>휴게소 목록</a>
        </Link>
        <Link href="/aroundRestArea">
          <a>내 주위 휴게소</a>
        </Link>
      </div>

      <style jsx>{`
        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: black;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          background: green;
          height: 100px;
          width: 300px;
          margin: 10px 0px;
        }
      `}</style>
    </div>
  );
};

export default App;
