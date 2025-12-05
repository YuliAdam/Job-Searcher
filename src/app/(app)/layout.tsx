'use client';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </StrictMode>
  );
}
