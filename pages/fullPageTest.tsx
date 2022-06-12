// @ts-nocheck
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import ArrowLink from "../components/arrowLink/arrowLink";
import { FullPageMain } from "../components/styledComponents/fullPageMain";
import styled from "styled-components";
import FullPageScroll from "../components/utils/FullPage/FullPage";
import FullPageWrapper from "../components/utils/FullPage/FullPageWrapper";
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

const TestFullPage = () => {
  return (
    <div className="App">
      <Head>
        <title>My styled page</title>
      </Head>
      <FullPageScroll>
        <FullPageWrapper>
          <FullPageMain>1</FullPageMain>
        </FullPageWrapper>
        <FullPageWrapper>
          <FullPageMain>2</FullPageMain>
        </FullPageWrapper>
        <FullPageWrapper>
          <FullPageMain>3</FullPageMain>
        </FullPageWrapper>
      </FullPageScroll>
    </div>
  );
};

export default TestFullPage;
