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
    <MobileActionContainer>
      <section>{children}</section>
    </MobileActionContainer>
  );
};
const MobileActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: center;
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
