import type { NextPage } from "next";
import styled from "styled-components";

const StyledMain = styled.main`
  padding-bottom: 50px;
`;

const BlogHeader = styled.header`
  width: 100%;
  padding: 80px 40px 20px 40px;
  display: flex;
  background: #2c3033;
  justify-content: space-between;
`;

const Blog: NextPage = () => {
  return (
    <div>
      <StyledMain>
        <BlogHeader>
          <section style={{ background: "white", minHeight: "60%", minWidth: "30%" }}></section>
          <section style={{ color: "white", marginLeft: "20px" }}>
            <h1>这里是标题</h1>
            <section>这里是tag tag tag tag tag tag tag tag</section>
            <p>这这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述里是描述</p>
          </section>
        </BlogHeader>
      </StyledMain>
    </div>
  );
};

export default Blog;
