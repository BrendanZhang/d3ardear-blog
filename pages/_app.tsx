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
  const [loadingVisible, setLoadingVisible] = useState(false);
  const routerChangeStartHandler = useCallback(() => {
    console.log("打开loading");
    setLoadingVisible(true);
  }, []);
  const routerChangeEnd = useCallback(() => {
    console.log("关闭loading");
    setLoadingVisible(false);
  }, []);
  useEffect(() => {
    router.events.on("routeChangeStart", routerChangeStartHandler);
    router.events.on("routeChangeComplete", routerChangeEnd);
    return () => {
      router.events.off("routeChangeStart", routerChangeStartHandler);
      router.events.off("routeChangeComplete", routerChangeEnd);
    };
  }, []);

  return (
    <AppProvider>
      <Noise />
      <AnimatePresence exitBeforeEnter>{loadingVisible && <Loading />}</AnimatePresence>
      <Head key="head">
        <title>D3arDear</title>
        <meta name="description" content="D3arDear 的技术博客" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
