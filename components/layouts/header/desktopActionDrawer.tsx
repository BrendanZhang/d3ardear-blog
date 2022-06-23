import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../../constant/animation";
import { media } from "../../constant/media";
import { DrawerAction, StyledIcon } from "./mobileActionDrawer";

export const DesktopDrawer: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const actionVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    initial: {
      opacity: 0,
      y: -100,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <DesktopAction {...defaultMotionProps} variants={defaultVariants}>
      <StyledIcon color="#eeeeee" height="46px" />
      <DesktopDrawerAction variants={actionVariants}>{children}</DesktopDrawerAction>
      <PlaceHolder />
    </DesktopAction>
  );
};

const PlaceHolder = styled.div`
  width: 50.5px;
  height: 46px;
`;
const DesktopDrawerAction = styled(DrawerAction)`
  flex-direction: row;
`;
const DesktopAction = styled(motion.header)`
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 86px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(20, 43, 51, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  ${media("tablet")} {
    display: inline-flex;
  }
`;
