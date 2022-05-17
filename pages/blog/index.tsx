import type { NextPage } from "next";
import styled from "styled-components";
import ArrowLink from "../../components/arrowLink/arrowLink";
import Footer from "../../components/layouts/footer";
import { BlogHeader } from "../../components/layouts/header/BlogHeader";
import Header from "../../components/layouts/header/header";

const StyledMain = styled.main`
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
    <main>
      <BlogHeader />
      <StyledMain></StyledMain>
      <Footer />
    </main>
  );
};

export default BlogPage;
