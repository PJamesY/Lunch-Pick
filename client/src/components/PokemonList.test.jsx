import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

// const {result, waitFor} = renderHook(() => useCustom)

describe('PokemonList', () => {
  describe('while loading', () => {
    it.todo('return loader');
  });
});
