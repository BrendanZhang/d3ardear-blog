import styled from "styled-components";

export const Noise = () => {
  return (
    <StyledNoise>
      <NoiseImg></NoiseImg>
    </StyledNoise>
  );
};

const StyledNoise = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  opacity: 0.05;
  z-index: 99;
`;

const NoiseImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/noise.gif");
`;
