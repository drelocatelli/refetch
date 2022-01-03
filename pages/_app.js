import Head from 'next/head';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/reset.css'

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();
  
  return(
      <>
      <Head>
        <title>API refetch</title>
      </Head>
      <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
      </QueryClientProvider>
      </>
  );
}

export default MyApp
