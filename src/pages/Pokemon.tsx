import React, { ReactElement, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const Example = function Example() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=190').then((res) => res.json()),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.height}</p>
      <strong> {data.subscribers_count}</strong> <strong> {data.stargazers_count}</strong>{' '}
      <strong> {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
};

const Pokemon = function Pokemon(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

export default Pokemon;
