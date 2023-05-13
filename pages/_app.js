import Head from 'next/head';
import '../styles/globals.css';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Next Todo</title>
        <meta name="description" content="NextJS with Reat context todo app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
