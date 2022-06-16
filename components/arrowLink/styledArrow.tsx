import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const bounceUp = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
 `;

export const DownArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  color: inherit;
  animation: ${bounce} 2s linear infinite;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  width: 100%;
  z-index: 1;
`;

export const UpArrowContainer = styled(DownArrowContainer)`
  animation: ${bounceUp} 2s linear infinite;
  top: 5%;
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  width: 100%;
`;
