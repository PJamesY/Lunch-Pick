import React, { useEffect } from 'react';
import useSwr from 'swr';
import axios from 'axios';

export interface foodProps {}

// const fetcher = url => fetch()

const food: React.FC<foodProps> = ({ children }) => {
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/api/food', {
        method: 'GET',
        // credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Credentials': 'true',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed');
        })
        .then((resObject) => {
          // console.log(resObject.user.displayName);
          // setUser(resObject.user.displayName);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return <div>food</div>;
};

export default food;
