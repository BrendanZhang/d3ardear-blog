import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { media } from "../../constant/media";
import Icon from "./icon";

type TMobileActionProps = {};

export const MobileDrawer: React.FC<PropsWithChildren<TMobileActionProps>> = (props) => {
  const { children } = props;
  return (
    <MobileActionContainer animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
      <StyledIcon color="#eeeeee" height="46px" />
      <DrawerAction>{children}</DrawerAction>
      <StyledFooter></StyledFooter>
    </MobileActionContainer>
  );
};
export const StyledIcon = styled(Icon)`
  margin-left: 4.5px;
`;
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: flex-start;
  justify-content: center;
`;
export const DrawerAction = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  color: #eac486;
`;
const MobileActionContainer = styled(motion.header)`
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
