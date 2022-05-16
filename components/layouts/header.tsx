import { GithubFilled } from "@ant-design/icons";
import { TextSnippet } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";

interface IHeader {
  mode: "light" | "dark";
  sticky?: boolean;
}

const Header: React.FC<IHeader> = (props) => {
  const { mode, sticky } = props;
  const isLight = useMemo(() => mode === "light", [mode]);
  const IconStyle = {
    fontsize: "20px",
    color: isLight ? "#eeeeee" : "#333333",
    margin: "0 0.5em",
  };
  return (
    <HeaderContainer>
      <div></div>
      <div>
        <Link href="blog/archive">
          <IconButton aria-label="blog" style={IconStyle}>
            <TextSnippet />
          </IconButton>
        </Link>
        <Link href="portfolio/archive">
          <IconButton aria-label="github" style={IconStyle}>
            <GithubFilled />
          </IconButton>
        </Link>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "20px",
  position: "absolute",
  width: "100%",
  top: 0,
  color: "white",
  zIndex: 10,
});

export default Header;
