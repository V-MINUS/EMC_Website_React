import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Electronic Music Council', 
  description = 'Electronic Music Council - A community for electronic music producers and enthusiasts.'
}) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
