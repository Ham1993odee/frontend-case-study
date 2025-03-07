import React from 'react';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../src/components/ReduxProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;