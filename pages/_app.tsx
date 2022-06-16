import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { AppProvider } from "../components/context/context";
import { MotionWrapper } from "../components/common/motionWrapper";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AppProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
