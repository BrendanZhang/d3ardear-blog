import styled from "styled-components";

type TMenuIcon = {
  width: string;
  height: string;
  fill: string;
  active: boolean;
};
export const MenuIcon: React.FC<TMenuIcon> = (props) => {
  const { width, height, fill, active } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 55 38.5"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="bt-menu-bars">
        <TopRect active={active} rx="2.5" ry="2.5" y="0" width="55" height="5"></TopRect>
        <MiddleRect active={active} rx="2.5" ry="2.5" y="16.4" width="55" height="5"></MiddleRect>
        <BottomRect active={active} rx="2.5" ry="2.5" y="32.5" width="55" height="5"></BottomRect>
      </g>
    </svg>
  );
};

const StyledRect = styled.rect`
  transition: transform 200ms, opacity 150ms;
`;

const MiddleRect = styled(StyledRect)<{ active: boolean }>`
  opacity: ${(props) => (props.active ? 0 : 1)};
  transform: ${(props) => (props.active ? "translateX(-100%)" : "translateX(0)")};
`;

const TopRect = styled(StyledRect)<{ active: boolean }>`
  transform-origin: 15% 30%;
  transform: ${(props) => (props.active ? "rotate(45deg)" : "rotate(0)")};
`;
const BottomRect = styled(StyledRect)<{ active: boolean }>`
  transform-origin: 15% 70%;
  transform: ${(props) => (props.active ? "rotate(-45deg)" : "rotate(0)")};
`;
