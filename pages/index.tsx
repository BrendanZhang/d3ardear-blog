import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import ArrowLink from "../components/arrowLink/arrowLink";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>D3arDear</title>
        <meta name="description" content=";" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header mode="light" />
      <MainContainer>
        <BackgroundImg />
        <ArrowLink color="#eeeeee" />
      </MainContainer>
      <Footer />
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
