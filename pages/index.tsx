import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import ArrowLink from "../components/arrowLink/arrowLink";
import { FullPageMain } from "../components/styledComponents/fullPageMain";
import {
  HomePageBackgroundImg,
  HomePageMainContainer,
} from "../components/styledComponents/homePageComponents";

const Home: NextPage = () => {
  const testFunc = () => {
    console.log("占用");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>D3arDear</title>
        <meta name="description" content=";" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header mode="light" />
      <HomePageMainContainer key={0} className="section">
        <HomePageBackgroundImg />
        <ArrowLink order={0} color="#eeeeee" triggerUp={testFunc} triggerDown={testFunc} />
      </HomePageMainContainer>
      <FullPageMain key={1} className="section">
        <div>这是博客</div>
        <ArrowLink order={1} color="#333" triggerUp={testFunc} triggerDown={testFunc} />
      </FullPageMain>
      <FullPageMain key={2} className="section">
        <div>这是项目</div>
        <ArrowLink order={2} color="#333" triggerUp={testFunc} triggerDown={testFunc} />
      </FullPageMain>
      <Footer />
    </div>
  );
};

export default Home;
