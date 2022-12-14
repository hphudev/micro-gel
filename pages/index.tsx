import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Body from '../components/Body';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Micro Gel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default Home;
