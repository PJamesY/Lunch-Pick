import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Pokemon = function Pokemon(): ReactElement {
  return <div>pokemon</div>;
};

export default Pokemon;
