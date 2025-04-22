import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Electronic Music Council - Promoting electronic music culture in Cork through events, education, and community." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Electronic Music Council" />
        <meta property="og:description" content="Promoting electronic music culture in Cork through events, education, and community." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
