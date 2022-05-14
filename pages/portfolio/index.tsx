import type { NextPage } from "next";
import ArrowLink from "../../components/arrowLink/arrowLink";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";

const PortfolioPage: NextPage = () => {
  return (
    <main>
      <Header mode="dark" />
      <main></main>
      {/* <ArrowLink color="#333" /> */}
      <Footer />
    </main>
  );
};

export default PortfolioPage;
