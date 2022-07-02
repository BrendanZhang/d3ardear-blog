import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../constant/animation";
import DrawerCover from "../icons/drawerCover";
import { TLoadingProps } from "./Loading";
import { LoadingIcon } from "./loadingIcon";
import { LoadingRing } from "./loadingRing";

export const Loading: React.FC<PropsWithChildren<{ visible: boolean }>> = (props) => {
  const { visible } = props;
  const containerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeIn",
        bounce: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.75,
        delay: 0.2,
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
            <>
              <LoadingIcons {...defaultMotionProps} variants={containerVariant} className="loading">
                <LoadingRing />
                <LoadingIcon />
              </LoadingIcons>
              <DrawerCover vertical={true} />
            </>
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
