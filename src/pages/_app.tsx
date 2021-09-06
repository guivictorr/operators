import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

import NextNprogress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Operators</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <GlobalStyle />
      <NextNprogress
        color="#2499ff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
