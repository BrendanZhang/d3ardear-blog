import { Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export const ActionButtons: React.FC<{ device: "mobile" | "desktop"; active: boolean }> = (
  props
) => {
  const { device, active } = props;
  const router = useRouter();
  const IconStyle = {
    fontsize: "20px",
    color: "inherit",
    margin: "0 0.5em",
    transition: "color 300ms",
  };
  return (
    <>
      {router.pathname !== "/" && (
        <Link href="/">
          {device === "mobile" ? (
            <MobileButton aria-label="home">HOME</MobileButton>
          ) : (
            <DesktopButton>HOME</DesktopButton>
          )}
        </Link>
      )}
      <Link href="/blog">
        {device === "mobile" ? (
          <MobileButton aria-label="blog">BLOG</MobileButton>
        ) : (
          <DesktopButton>BLOG</DesktopButton>
        )}
      </Link>
      <Link href="/work">
        {device === "mobile" ? (
          <MobileButton aria-label="work">WORK</MobileButton>
        ) : (
          <DesktopButton>WORK</DesktopButton>
        )}
      </Link>
    </>
  );
};

const MobileButton = styled(Button)`
  color: currentColor;
  font-size: 8vw;
  position: relative;
  transition: all 300ms;
  margin-left: 5px;
  &:after {
    content: "";
    background: currentColor;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    transition: all 300ms;
    transform: scaleX(0);
  }
  &:hover {
    &:after {
      transform: scaleX(-100%);
    }
  }
`;

const DesktopButton = styled(MobileButton)`
  font-size: 20px;
  margin-left: 5px;
  margin-right: 5px;
  color: currentColor;
`;
