import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Pokemon = function Pokemon(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <div>pokemon</div>
    </QueryClientProvider>
  );
};

export default Pokemon;
