import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from "react-query";
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
  <QueryClientProvider  client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  )
}

export default MyApp
