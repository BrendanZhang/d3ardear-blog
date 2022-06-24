import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { AppProvider } from "../components/context/context";
import { MotionWrapper } from "../components/common/motionWrapper";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "../components/loading/loading";
import { Noise } from "../components/noise/noise";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loadingVisible, setLoadingVisible] = useState(true);
  const routerChangeStartHandler = useCallback(() => {
    setLoadingVisible(true);
  }, []);
  const routerChangeEnd = useCallback(() => {
    setLoadingVisible(false);
  }, []);
  useEffect(() => {
    setLoadingVisible(false);
    router.events.on("routeChangeStart", routerChangeStartHandler);
    router.events.on("routeChangeComplete", routerChangeEnd);
    return () => {
      router.events.off("routeChangeStart", routerChangeStartHandler);
      router.events.off("routeChangeComplete", routerChangeEnd);
    };
  }, []);

  return (
    <AppProvider>
      <Head key="head">
        <title>D3arDear</title>
        <meta name="description" content="D3arDear 的技术博客" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Noise />
      <AnimatePresence exitBeforeEnter>
        {loadingVisible ? (
          <Loading key="loading" />
        ) : (
          <Component {...pageProps} key={router.pathname} />
        )}
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
