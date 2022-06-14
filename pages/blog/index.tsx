import { motion } from "framer-motion";
import type { NextPage } from "next";
import styled from "styled-components";
import ArrowLink from "../../components/arrowLink/arrowLink";
import { MotionWrapper } from "../../components/common/motionWrapper";
import Footer from "../../components/layouts/footer";
import { BlogHeader } from "../../components/layouts/header/BlogHeader";
import Header from "../../components/layouts/header/header";

const StyledMain = styled.main`
  padding-bottom: 50px;
  max-width: 1200px;
  border: 1px solid red;
  margin: auto;
  width: 100%;
  flex: 1;
`;
const StyledPagecontainer = styled.main`
  display: flex;
  padding-top: 80px;
  padding-bottom: 50px;
`;

// const BlogHeader = styled.header`
//   width: 100%;
//   padding: 80px 40px 20px 40px;
//   display: flex;
//   background: #2c3033;
//   justify-content: space-between;
// `;

const BlogPage: NextPage = () => {
  return (
    <MotionWrapper>
      <StyledPagecontainer>
        <BlogHeader />
        <StyledMain>
          <header>
            <div style={{ display: "flex" }}>
              <p>JS</p>
              <p>Golang</p>
              <p>Docker</p>
            </div>
          </header>
          <main>
            <section>博客1</section>
            <section>博客2</section>
            <section>博客3</section>
          </main>
          <footer>1,2,3,4,5,6</footer>
        </StyledMain>
        <Footer />
      </StyledPagecontainer>
    </MotionWrapper>
  );
};

export default BlogPage;
