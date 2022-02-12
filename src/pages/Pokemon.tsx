import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Example = function Example() {
  return <div>example</div>;
};

const Pokemon = function Pokemon(): ReactElement {
  return <div>pokemon</div>;
};

export default Pokemon;
