import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../constant/animation";
import { TLoadingProps } from "./Loading";
import { LoadingIcon } from "./loadingIcon";
import { LoadingRing } from "./loadingRing";

export const Loading: React.FC<PropsWithChildren<{ visible: boolean }>> = (props) => {
  const { visible } = props;
  const containerVariant = {
    initial: {
      transform: "translateY(100%)",
    },
    animate: {
      transform: "translateY(0%)",
      transition: {
        // background: { delay: 0.3, duration: 1.5 },
        duration: 0.75,
        // ease: [0.04, 0.58, 0.445, 1.0],
        ease: "easeIn",
        bounce: 0,
      },
    },
    exit: {
      transform: "translateY(-100%)",
      transition: {
        // background: { delay: 0.3, duration: 1.5 },
        duration: 0.75,
        delay: 0.5,
        // ease: [0.04, 0.58, 0.445, 1.0],
        ease: "easeIn",
        bounce: 0,
      },
    },
  };
  return (
    <LoadingWrapper>
      <LoadingContainer>
        <AnimatePresence exitBeforeEnter>
          {visible && (
            <LoadingIcons {...defaultMotionProps} variants={containerVariant} className="loading">
              <LoadingRing />
              <LoadingIcon />
            </LoadingIcons>
          )}
        </AnimatePresence>
      </LoadingContainer>
    </LoadingWrapper>
  );
};

const LoadingIcons = styled(motion.div)`
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
  background: rgba(20, 43, 51, 0.9);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const LoadingContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  pointer-events: none;
`;
const LoadingWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
`;
