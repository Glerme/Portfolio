import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../layouts';

import GlobalStyles from '../styles/global';
import { ErrorBoundary } from 'components/ErrorBoundary';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Guilherme Felipe | Dev. Júnior </title>
      </Head>
      <GlobalStyles />

      <ErrorBoundary>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
