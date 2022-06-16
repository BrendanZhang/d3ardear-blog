import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header/header";
import ArrowLink from "../components/arrowLink/arrowLink";
import { FullPageMain } from "../components/styledComponents/fullPageMain";
import {
  HomePageBackgroundImg,
  HomePageMainContainer,
} from "../components/styledComponents/homePageComponents";
import FullPageScroll from "../components/utils/FullPage/FullPage";
import { useMemo, useState } from "react";
import { HomePageBlog } from "../components/home/homeBlog/homeBlog";
import { HomePageProject } from "../components/home/homePortfolio/homePortfolio";
import { MotionWrapper } from "../components/common/motionWrapper";
import { motion } from "framer-motion";
import { motionVariants } from "../components/constant/animation";

const Home: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const onClickArrow = (direction: "up" | "down") => {
    console.log("clickDown");
    direction === "down" ? handlePageChange(pageIndex + 1) : handlePageChange(pageIndex - 1);
  };
  const themeColor = useMemo(() => (pageIndex === 0 ? "light" : "dark"), [pageIndex]);
  const onBeforePageScroll = (index: number) => {
    console.log(index);
    index === 0 ? setHeaderVisible(true) : setHeaderVisible(false);
  };
  const handlePageChange = (index: number) => {
    setPageIndex(index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>D3arDear</title>
        <meta name="description" content=";" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {pageIndex === 0 && <Header mode={themeColor} />}
      <ArrowLink order={pageIndex} color={themeColor} clickTrigger={onClickArrow} />
      <FullPageScroll
        onBeforePageScroll={onBeforePageScroll}
        onPageChange={handlePageChange}
        customPageIndex={pageIndex}
        minimalScrollDistance={3}>
        <HomePageMainContainer key={0} className="section">
          <HomePageBackgroundImg />
        </HomePageMainContainer>
        <FullPageMain key={1} className="section">
          <HomePageBlog />
        </FullPageMain>
        <FullPageMain key={2} className="section">
          <HomePageProject />
        </FullPageMain>
      </FullPageScroll>
      <Footer />
    </div>
  );
};

export default Home;
