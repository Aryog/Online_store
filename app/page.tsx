"use client"
import Products from '@/components/PageComponents/Home/Products';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css'
const Home = () => {
  const [queryClient] = React.useState(() => new QueryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Products />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default Home;
