import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const Example = function Example() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json()),
  );

  if (isLoading) return 'Loading...';

  if (error) return 'error';

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
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
      <div>pokemon</div>
    </QueryClientProvider>
  );
};

export default Pokemon;
