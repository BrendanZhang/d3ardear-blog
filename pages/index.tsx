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
import FullPage from "../components/utils/FullPage/FullPage";
import { useMemo, useState } from "react";

const Home: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const onClickArrow = (direction: "up" | "down") => {
    direction === "down" ? handlePageChange(pageIndex + 1) : handlePageChange(pageIndex - 1);
  };
  const arrowColor = useMemo(() => (pageIndex === 0 ? "#eee" : "#333"), [pageIndex]);
  const headerColor = useMemo(() => (pageIndex === 0 ? "light" : "dark"), [pageIndex]);
  const onBeforePageScroll = (index: number) => {
    console.log("onBeforePageScroll");
    console.log(index);
  };
  const handlePageChange = (index: number) => {
    console.log("触发handler");
    setPageIndex(index);
    console.log(index);
  };
  console.log("clickArrow", pageIndex);

  const PageButton = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i - 1)}>
          {i}
        </button>
      );
    }
    return <>{[...pageNumbers]}</>;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>D3arDear</title>
        <meta name="description" content=";" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header mode={headerColor} />
      <ArrowLink order={pageIndex} color={arrowColor} clickTrigger={onClickArrow} />

      <FullPage
        onBeforePageScroll={onBeforePageScroll}
        onPageChange={handlePageChange}
        customPageIndex={pageIndex}>
        <HomePageMainContainer key={0} className="section">
          <HomePageBackgroundImg />
        </HomePageMainContainer>
        <FullPageMain key={1} className="section">
          <div>这是博客</div>
        </FullPageMain>
        <FullPageMain key={2} className="section">
          <div>这是项目</div>
        </FullPageMain>
      </FullPage>
      <Footer />
    </div>
  );
};

export default Home;
