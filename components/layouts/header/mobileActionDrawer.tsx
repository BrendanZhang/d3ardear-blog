import { motion, MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { media } from "../../constant/media";

type TMobileActionProps = {
  active: boolean;
  onClose: () => void;
};

export const MobileAction: React.FC<PropsWithChildren<TMobileActionProps>> = (props) => {
  const { children } = props;
  return (
    <MobileActionContainer
      animate="enter"
      exit="exit"
      initial="initial"
      variants={{
        enter: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
        },
        exit: {
          opacity: 0,
          y: 0,
          x: -100,
          transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
        },
        initial: {
          opacity: 0,
          y: 0,
          x: -100,
          transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
        },
      }}>
      {children}
    </MobileActionContainer>
  );
};
const MobileActionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  position: absolute;
  height: 100vh;
  color: #eeeeee;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: rgba(25, 55, 65, 0.75);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  ${media("tablet")} {
    display: none;
  }
`;
