import type { NextPage } from "next";
import ArrowLink from "../../components/arrowLink/arrowLink";
import { MotionWrapper } from "../../components/common/motionWrapper";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header/header";

const WorkPage: NextPage = () => {
  return (
    <MotionWrapper>
      <Header mode="dark" />
      <main></main>
      {/* <ArrowLink color="#333" /> */}
      <Footer />
    </MotionWrapper>
  );
};

export default WorkPage;
