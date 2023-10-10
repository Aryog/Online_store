"use client"
import Products from '@/components/PageComponents/Home/Products';
import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './globals.css'
import Navbar from '@/components/PageComponents/Navbar';
const Home = () => {
  const [queryClient] = React.useState(() => new QueryClient)
  const [activeCat, setActiveCat] = useState<string>('')
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <nav><Navbar activeCat={activeCat} setActiveCat={setActiveCat} /></nav>
        <Products activeCat={activeCat} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Home;
