import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../constant/animation";
import { TLoadingProps } from "./Loading";
import { LoadingIcon } from "./loadingIcon";

export const Loading: React.FC<PropsWithChildren<{}>> = () => {
  const containerVariant = {
    initial: {
      opacity: 0,
      background: "rgba(20, 43, 51, 0.3)",
    },
    animate: {
      opacity: 1,
      background: "rgba(20, 43, 51, 0.8)",
      transition: {
        background: { delay: 0.3, duration: 0.5 },
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      background: "rgba(20, 43, 51, 0.3)",
    },
  };
  return (
    <LoadingContainer {...defaultMotionProps} variants={containerVariant} className="loading">
      这里是画板
      <LoadingIcon />
    </LoadingContainer>
  );
};

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #eeeeee;
  z-index: 20;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
