import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>D3arDear</title>
        <meta name="description" content=";" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <BackgroundImg />
      </MainContainer>
      {/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #2c3033 100%, #2c3033 90%);
  display: flex;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background: url("/semicolon.png") center center no-repeat;
  margin: auto;
  background-size: cover;
`;

export default Home;
