import styled, { keyframes } from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

interface IArrowLink {
  href: "blog" | "/" | "portfolio";
}

const ArrowLink: React.FC<IArrowLink> = (props) => {
  const { href } = props;
  const buttonLabel = useMemo(() => `to${href}`, [href]);
  return (
    <DownArrowContainer>
      <Link href={href}>
        <IconButton aria-label={buttonLabel}>
          <KeyboardArrowDownIcon style={{ fontSize: "40px", color: "white" }} />
        </IconButton>
      </Link>
    </DownArrowContainer>
  );
};
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

const DownArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  animation: ${bounce} 2s linear infinite;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10%;
  width: 100%;
`;

export default ArrowLink;
