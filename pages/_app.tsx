import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { AppProvider } from "../components/context/context";
import { MotionWrapper } from "../components/common/motionWrapper";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AppProvider>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>D3arDear</title>
          <meta name="description" content=";" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
