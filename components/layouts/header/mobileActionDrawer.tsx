import { GithubFilled, MailFilled } from "@ant-design/icons";
import { Email, EmailOutlined, EmailRounded, MailRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { PropsWithChildren, ReactChild, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { defaultMotionProps, defaultVariants } from "../../constant/animation";
import { media } from "../../constant/media";
import Icon from "../../icons/icon";

type TMobileActionProps = {};

export const MobileDrawer: React.FC<PropsWithChildren<TMobileActionProps>> = (props) => {
  const { children } = props;
  const drawerVariants = {
    initial: {
      originX: "right",
      originY: "top",
      transform: "rotate(-90deg) translateZ(0)",
    },
    animate: {
      transform: "rotate(0deg) translateZ(0)",
      transition: {
        duration: 1,
      },
    },
    exit: {
      transform: "rotate(-90deg) translateZ(0)",
    },
  };
  const linkVariants = {
    ...defaultVariants,
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.5,
      },
    },
  };
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
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <MobileActionContainer {...defaultMotionProps} variants={drawerVariants}>
        <StyledIcon color="#eeeeee" height="46px" />
        <DrawerAction variants={actionVariants}>{children}</DrawerAction>
        <StyledFooter variants={linkVariants}>
          <header>
            <h2>LINKS</h2>
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
    </div>
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
  h2 {
    font-weight: normal;
    font-size: 18px;
  }
  main {
    color: #eeeeee;
    font-size: 30px;
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
const MobileActionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 20px;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #eeeeee;
  z-index: 5;
  background: rgba(20, 43, 51, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  ${media("tablet")} {
    display: none;
  }
`;
