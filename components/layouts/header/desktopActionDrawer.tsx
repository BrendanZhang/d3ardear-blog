import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { media } from "../../constant/media";
import { DrawerAction, StyledIcon } from "./mobileActionDrawer";

export const DesktopDrawer: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  return (
    <DesktopAction animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
      <StyledIcon color="#eeeeee" height="46px" />
      <DesktopDrawerAction>{children}</DesktopDrawerAction>
    </DesktopAction>
  );
};

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
