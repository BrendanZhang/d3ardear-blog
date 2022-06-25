import type { NextPage } from "next";
import ArrowLink from "../../components/arrowLink/arrowLink";
import { MotionWrapper } from "../../components/common/motionWrapper";
import DrawerCover from "../../components/icons/drawerCover";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header/header";

const WorkPage: NextPage = () => {
  return (
    <MotionWrapper>
      <Header mode="dark" />
      <main></main>
      <div style={{ width: "100%", height: "100%" }}>
        <svg width="100%" height="100%" viewBox="0 0 20 10" preserveAspectRatio="none">
          <polygon fill="red" stroke-width="0" points="0,10 20,10 10,0" />
        </svg>
      </div>
      <Footer />
    </MotionWrapper>
  );
};

export default WorkPage;
