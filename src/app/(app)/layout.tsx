'use client';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Provider>
    </StrictMode>
  );
}
