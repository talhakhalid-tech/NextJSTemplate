'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';

const SessionProviderComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </SessionProvider>
  );
};

export default SessionProviderComponent;
