import { GithubFilled, MailFilled } from "@ant-design/icons";
import { Email, EmailOutlined, EmailRounded, MailRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { PropsWithChildren, ReactChild, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../../constant/animation";
import { media } from "../../constant/media";
import DrawerCover from "../../icons/drawerCover";
import Icon from "../../icons/icon";

type TMobileActionProps = {};

export const MobileDrawer: React.FC<PropsWithChildren<TMobileActionProps>> = (props) => {
  const { children } = props;
  const drawerVariants = {
    initial: {
      transform: "translateX(50%)",
    },
    animate: {
      transform: "translateX(0)",
      transition: {
        duration: 1,
      },
    },
    exit: {
      transform: "translateX(50%)",
    },
  };
  const linkVariants = {
    ...defaultVariants,
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };
  const actionVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    initial: {
      opacity: 0,
      y: 100,
    },
    exit: {
      opacity: 0,
    },
  };
  const onclickGithub = () => {
    window.open("https://github.com/D3arDear");
  };
  const onclickMail = () => {
    window.open("mailto:brenz@d3ardear.fun");
  };
  return (
    <DrawerContainer>
      <MobileActionContainer {...defaultMotionProps} variants={defaultVariants}>
        <DrawerAction variants={actionVariants}>{children}</DrawerAction>
        <StyledFooter variants={linkVariants}>
          <header>
            <h2>CONTACT</h2>
          </header>
          <main>
            <StyledIconButton onClick={onclickGithub}>
              <GithubFilled />
            </StyledIconButton>
            <StyledIconButton style={{ marginLeft: "1em" }} onClick={onclickMail}>
              <MailFilled />
            </StyledIconButton>
          </main>
        </StyledFooter>
      </MobileActionContainer>
      <DrawerCover />
    </DrawerContainer>
  );
};

export const StyledIcon = styled(Icon)`
  margin-left: 4.5px;
`;
const StyledIconButton = styled(IconButton)`
  font-size: 24px;
  color: currentColor;
  border: 2px solid #eee;
  padding: 10px;
`;
const StyledFooter = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 15px;
  font-size: 6vw;
  h2 {
    font-weight: normal;
    font-size: inherit;
  }
  main {
    color: #eeeeee;
    font-size: inherit;
  }
`;
export const DrawerAction = styled(motion.main)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  color: #eac486;
`;
const DrawerContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;
const MobileActionContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 20px;
  height: 100%;
  width: 100%;
  color: #eeeeee;
  z-index: 10;
  /* background: rgba(20, 43, 51, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  /* ${media("tablet")} {
    display: none;
  } */
`;
