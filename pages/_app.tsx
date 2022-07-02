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
    console.log("路由改变");
    setLoadingVisible(true);
  }, []);
  const routerChangeEnd = useCallback(() => {
    setTimeout(() => {
      setLoadingVisible(false);
    }, 1500);
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
      <Head key="head">
        <title>D3arDear</title>
        <meta name="description" content="D3arDear 的技术博客" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Noise />
      <Loading visible={loadingVisible} key="loading" />
      <AnimatePresence exitBeforeEnter>
        {!loadingVisible && <Component {...pageProps} key={router.pathname} />}
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
